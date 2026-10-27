# 02 — Data, Functions, Objects, and the JavaScript Mental Model

## Aim

Master the ideas that make JavaScript feel difficult at first: arrays, object identity, closures, `this`, prototypes, classes, and modern syntax. These ideas explain most real bugs in stateful programs.

## 1. Arrays: ordered collections

An array is an object that stores values by zero-based indexes. Its `length` is one more than its largest index, not a guarantee every index has a value.

```js
const tasks = ["Read", "Practice", "Review"];
console.log(tasks[0]);      // Read
console.log(tasks.length);  // 3

const nextTasks = [...tasks, "Rest"]; // non-mutating addition
console.log(nextTasks); // ["Read", "Practice", "Review", "Rest"]
```

### Mutation versus transformation

Methods such as `push`, `pop`, `splice`, `sort`, and `reverse` mutate the original array. Methods such as `map`, `filter`, `slice`, `concat`, `toSorted`, `toReversed`, and `toSpliced` return new arrays. Prefer non-mutating operations for shared data and React state.

```js
const students = [
  { id: 1, name: "Asha", score: 82 },
  { id: 2, name: "Mira", score: 91 },
  { id: 3, name: "Kabir", score: 67 },
];

const passedNames = students
  .filter((student) => student.score >= 70)
  .map((student) => student.name);

console.log(passedNames); // ["Asha", "Mira"]
```

Read the pipeline left to right: filter keeps passing student objects; map changes each remaining object to a name. Neither method changes `students`.

### `reduce` without mystery

`reduce` accumulates a list into one value. Its reducer receives the accumulated value and current item. The initial value gives the accumulator a reliable type, especially for empty arrays.

```js
const total = students.reduce((sum, student) => {
  return sum + student.score;
}, 0);

console.log(total); // 240
```

Do not force `reduce` into every problem. A named `for...of` loop is often easier to debug when several steps occur.

### Sorting safely

Default `sort()` converts values to strings. It also mutates. Use a numeric comparator and a copy:

```js
const ascendingScores = [...students].sort((a, b) => a.score - b.score);
// Or modern JavaScript: students.toSorted((a, b) => a.score - b.score)
```

## 2. Objects: named fields and behavior

Objects group related values. Property access can use dot notation for a known valid identifier or brackets for a dynamic key.

```js
const profile = {
  name: "Asha",
  "favorite-language": "JavaScript",
  address: { city: "Pune" },
};

console.log(profile.name);
console.log(profile["favorite-language"]);

const field = "name";
console.log(profile[field]);
```

Use optional chaining when a missing nested response is legitimate: `profile.address?.city`. Validate external data instead of assuming server responses always have the shape you expect.

### Copy and update nested data

Spread syntax makes a shallow copy. Copy every level that changes.

```js
const user = {
  name: "Asha",
  preferences: { theme: "light", fontSize: 16 },
};

const darkUser = {
  ...user,
  preferences: {
    ...user.preferences,
    theme: "dark",
  },
};
```

`darkUser` is a new object. Its `preferences` is also new. Unchanged primitive fields are reused safely. This pattern is central in React state updates.

### Destructuring and rest

```js
const { name, preferences: { theme }, ...publicProfile } = user;
console.log(name, theme, publicProfile);

function printUser({ name, preferences: { theme = "system" } }) {
  console.log(`${name}: ${theme}`);
}
```

Destructuring extracts fields. `...publicProfile` collects remaining own enumerable properties. Do not destructure deeply in function parameters if it makes error messages harder to understand; choose readability.

## 3. Maps, sets, JSON, dates, and regular expressions

Use plain objects for small record-like data; use `Map` when keys are not only strings/symbols or you need ordered key-value operations. Use `Set` for unique values.

```js
const tags = new Set(["js", "react", "js"]);
tags.add("testing");
console.log(tags.has("react")); // true
console.log([...tags]); // ["js", "react", "testing"]

const settings = new Map();
settings.set("theme", "dark");
settings.set({ scope: "editor" }, "large");
```

JSON is a text format, not an object type. It supports objects, arrays, strings, numbers, booleans, and null—not functions, `undefined`, `Map`, `Set`, cyclic references, or `BigInt`.

```js
const text = JSON.stringify({ theme: "dark" });
const restored = JSON.parse(text);
```

Dates are tricky because a date-time has a time zone and parsing can differ. Store unambiguous ISO timestamps from servers, for example `2026-08-06T12:30:00.000Z`, and format for people with `Intl.DateTimeFormat`.

```js
const date = new Date("2026-08-06T12:30:00.000Z");
const readable = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "long",
  timeStyle: "short",
}).format(date);
```

Regular expressions search text patterns. Start simple and use test cases; complex regex is often less readable than ordinary string code.

```js
const hasDigitsOnly = /^\d+$/.test("12345"); // true
```

## 4. Scope, execution contexts, and closures

Each function call creates an execution context with local variables. A function can read identifiers from its outer lexical scope. When it survives after that outer call ends, it still remembers those variables: a **closure**.

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

`createCounter` finishes, but the returned `increment` function keeps access to its own `count`. A second `createCounter()` call creates a separate closure and separate count.

```mermaid
flowchart TD
  A[createCounter call] --> B[count = 0]
  B --> C[returns increment function]
  C --> D[counter variable stores function]
  D --> E[counter() reads and changes remembered count]
```

Closures power callbacks, event handlers, modules, and React components. They also create stale-value bugs when an old callback is used later; React’s chapters explain the remedy.

## 5. `this`: determined by the call site

In regular functions, `this` usually depends on **how the function is called**, not where it was written.

```js
"use strict";

const user = {
  name: "Asha",
  greet() {
    return `Hi, ${this.name}`;
  },
};

console.log(user.greet()); // Hi, Asha
const detached = user.greet;
// detached() throws because this is undefined in strict mode
```

Call rules, in order of practical importance:

| Call | `this` |
|---|---|
| `object.method()` | the `object` before the dot |
| `fn.call(value, a)` / `apply` | explicitly `value` |
| `fn.bind(value)` | permanently bound `value` |
| `new Constructor()` | the new instance |
| plain `fn()` in strict mode | `undefined` |
| arrow function | inherited from enclosing scope; cannot be rebound |

Arrow functions are not “short functions with `this`.” They deliberately have no own `this`, `arguments`, `prototype`, or constructor capability. Use them for callbacks, not object prototype methods that need dynamic `this`.

## 6. Prototypes, classes, and inheritance

Every ordinary object has a hidden prototype link. If JavaScript cannot find a property on the object, it looks up its prototype chain. A class is friendlier syntax over this prototype system.

```js
class BankAccount {
  #balance = 0; // private field

  constructor(owner, openingBalance = 0) {
    if (openingBalance < 0) throw new RangeError("balance cannot be negative");
    this.owner = owner;
    this.#balance = openingBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new RangeError("deposit must be positive");
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Asha", 500);
account.deposit(200);
console.log(account.balance); // 700
```

- `class` defines a blueprint. Methods are shared through its prototype, rather than copied into each instance.
- `new` makes an object whose prototype is `BankAccount.prototype`, calls the constructor, and returns it.
- `#balance` is truly private to the class body.
- A **getter** lets `account.balance` read a computed/controlled value like a property.

Use classes when modeling a stateful domain entity is natural. Prefer simple objects plus pure functions for most UI data transformations. Favor composition (“give an object a capability”) over deep inheritance trees.

## 7. Errors and defensive functions

Use built-in error types to state broken contracts.

```js
function divide(dividend, divisor) {
  if (typeof dividend !== "number" || typeof divisor !== "number") {
    throw new TypeError("both inputs must be numbers");
  }
  if (divisor === 0) {
    throw new RangeError("cannot divide by zero");
  }
  return dividend / divisor;
}
```

Throw errors for programmer misuse or invalid data a caller must handle. Do not use exceptions for normal alternatives such as “search found no results”; return a suitable value instead.

## 8. Iterables and generators (advanced core)

An iterable can be used by `for...of`, spread, and `Array.from`. Arrays, strings, maps, and sets are iterable. A generator creates an iterable lazily.

```js
function* idSequence() {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
}

const ids = idSequence();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
```

`yield` pauses the generator and exposes one value. This is useful for lazy sequences and some libraries, but normal arrays/functions are enough for most application code.

## Try it

1. Given an array of transaction objects, use `filter`, `map`, and `reduce` to calculate total expense by category.
2. Write `updateTodo(todos, id, patch)` without mutating the original array or item.
3. Write `createPasswordChecker(minLength)` that returns a function and uses the closed-over length.
4. Explain why `const copied = { ...user }` does not safely copy `user.preferences`.
5. Create a `Playlist` class with a private current index, `next()`, `previous()`, and a read-only current track getter. Decide behavior for an empty playlist.

Next: [03 — Browser, DOM, and events](./03-browser-dom-events.md).
