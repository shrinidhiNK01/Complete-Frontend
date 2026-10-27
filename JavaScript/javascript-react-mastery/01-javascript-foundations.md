# 01 — JavaScript Foundations: Values, Decisions, and Repetition

## Aim

Learn how JavaScript represents information and how a program chooses and repeats work. These are the building blocks beneath every framework.

## 1. Values and types

A **value** is a piece of data. JavaScript has seven primitive types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Everything else, including arrays and functions, is an object.

```js
const userName = "Asha";         // string: text
const score = 98.5;              // number: normal numeric values
const hugeId = 9007199254740993n; // bigint: integer ending in n
const isLoggedIn = true;         // boolean
let selectedCourse;              // undefined: no value assigned yet
const chosen = null;             // null: deliberately empty
const key = Symbol("internal"); // symbol: unique token
```

`typeof null` unfortunately returns `"object"`; that is a historic JavaScript bug. Test it explicitly with `value === null`.

### Primitive value versus object reference

Primitives are copied by value. Object variables hold a reference to one shared object.

```js
let first = 10;
let second = first;
second = 20;
console.log(first, second); // 10 20

const originalUser = { name: "Asha" };
const alias = originalUser;
alias.name = "Ravi";
console.log(originalUser.name); // Ravi
```

The second example does **not** copy the object. Both names point to the same object. Use a shallow copy when you mean “new outer object”:

```js
const updatedUser = { ...originalUser, name: "Asha" };
```

This only copies one level. Nested objects are still shared; see the data chapter.

## 2. Variables: `const`, `let`, and never `var` by default

Use `const` when the variable binding will not be reassigned. Use `let` when it will. Avoid `var` in new code because its function scope and hoisting behavior cause avoidable confusion.

```js
const taxRate = 0.18;
let subtotal = 0;

subtotal = subtotal + 100; // allowed: let is reassigned
// taxRate = 0.2;          // TypeError: const cannot be reassigned

const cart = [];
cart.push("book");        // allowed: the array object changes
```

`const` protects the binding, not the contents of an object. Immutably create new values when sharing state is important.

### Scope and the temporal dead zone

`let` and `const` are **block-scoped**: they exist only inside the nearest `{ }`. They cannot be read before their declaration executes; that period is called the temporal dead zone.

```js
if (true) {
  const message = "inside";
  console.log(message);
}
// console.log(message); // ReferenceError
```

## 3. Operators and coercion

Operators combine or compare values. Prefer strict equality `===` and strict inequality `!==`; they do not silently convert type.

```js
console.log(5 === "5"); // false: number is not string
console.log(5 == "5");  // true: loose equality converts first
console.log(Number("42")); // 42
console.log(String(42));    // "42"
console.log(Boolean(0));    // false
```

Avoid relying on automatic conversion. Convert intentionally at input boundaries. Common falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Empty arrays and empty objects are truthy.

### Numbers: beware floating point and `NaN`

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(Number.isNaN(Number("hello"))); // true

const money = Math.round((0.1 + 0.2) * 100) / 100;
```

Binary floating point cannot exactly represent many decimal fractions. For money, store smallest units (for example paise/cents) as integers or use a suitable decimal library where precision matters.

## 4. Strings and template literals

Strings are immutable sequences of UTF-16 code units. You cannot change a character in place; methods return a new string.

```js
const rawName = "  asha  ";
const displayName = rawName.trim().toUpperCase();
const greeting = `Welcome, ${displayName}!`;

console.log(greeting); // Welcome, ASHA!
console.log(rawName);  // "  asha  " — unchanged
```

Useful methods: `includes`, `startsWith`, `endsWith`, `slice`, `replace`, `split`, `trim`, `toLowerCase`. Methods such as `toUpperCase` can be locale-sensitive; use `toLocaleUpperCase` when a user’s locale matters.

## 5. Control flow: conditions

An `if` statement selects a path. Put the most specific validation or early-return condition first; this prevents deep nesting.

```js
function accessMessage(user) {
  if (!user) return "Please sign in.";
  if (user.isBanned) return "Account unavailable.";
  if (user.role === "admin") return "Admin dashboard";
  return "Member dashboard";
}
```

Read it as a decision tree. A `return` ends the function, so each later check only sees valid previous state.

Use a `switch` for one value matched against discrete cases. Include `default` and remember `break`, or use `return` inside a function.

```js
function dayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "weekend";
    default:
      return "weekday";
  }
}
```

### `&&`, `||`, `??`, and optional chaining

These operators return operands, not necessarily booleans.

```js
const title = savedTitle || "Untitled"; // uses fallback for "", 0, false too
const page = suppliedPage ?? 1;          // fallback only for null/undefined
const city = user?.address?.city;        // undefined if a link is missing
```

Use `??` for numeric or empty-string values that are valid. Use `?.` only when absence is expected; do not use it to hide a bug that should be fixed.

## 6. Loops: repeat intentionally

Use `for...of` to visit values, `for...in` for object keys (with care), `while` when repetition depends on a changing condition, and array methods when transforming data.

```js
const scores = [78, 91, 85];
let total = 0;

for (const score of scores) {
  total += score;
}

console.log(total / scores.length); // 84.666...
```

Never mutate an array’s length carelessly during a forward loop. Avoid `forEach` when you need `break`, `continue`, `await` in sequence, or a returned new array.

### Choose a loop by the question

| Question | Best first choice |
|---|---|
| “Do this for each value” | `for...of` |
| “Produce a transformed array” | `map` |
| “Keep values matching a rule” | `filter` |
| “Turn many values into one” | `reduce` or a clear loop |
| “Find the first matching value” | `find` |
| “Does any/every value match?” | `some` / `every` |
| “Repeat until state changes” | `while` |

## 7. Functions: the first abstraction

Functions package a named behavior. They should do one understandable job, accept explicit inputs, and return a useful output.

```js
function isAdult(age) {
  if (!Number.isInteger(age) || age < 0) {
    throw new TypeError("age must be a non-negative whole number");
  }
  return age >= 18;
}

console.log(isAdult(20)); // true
```

- `Number.isInteger` validates without converting a string such as `"20"`.
- `throw` stops normal execution and creates an error; callers may handle it.
- `return age >= 18` evaluates the comparison, then returns `true` or `false`.

Function declarations are hoisted; function expressions and arrow functions are values assigned to variables. Prefer declarations for top-level named logic and arrow functions for short callbacks. The difference in `this` is important later.

## 8. Practice: trace it before running

```js
function labelTemperature(celsius) {
  if (celsius < 0) return "freezing";
  if (celsius < 20) return "cool";
  if (celsius < 30) return "warm";
  return "hot";
}

const temperatures = [-2, 8, 23, 35];
for (const temperature of temperatures) {
  console.log(`${temperature}°C is ${labelTemperature(temperature)}`);
}
```

Predict the four lines. Then change the boundaries. Why does the order of conditions matter?

## Common mistakes and repair

- **Using `==`:** use `===` unless you can precisely explain a deliberate loose-equality rule.
- **Using `||` for defaults:** use `??` if `0`, `false`, or `""` are meaningful values.
- **Naming booleans as nouns:** name them questions: `isLoading`, `hasPermission`, `canSubmit`.
- **Deep nested `if`s:** return early or extract a small predicate function.
- **Looping when an array method says the intent better:** choose `map`, `filter`, or `find`.

## Try it

1. Write `formatFullName(first, last)` that trims input, supports missing last names, and capitalizes the output.
2. Write `gradeFromScore(score)` with validation for scores 0–100 and grades A–F.
3. Convert the temperature loop to `map`, returning the strings rather than logging inside it.
4. Explain why `Boolean([])` and `Boolean({})` are true.
5. Build “number guessing” logic: choose a secret number, count valid attempts, and report too high/low/correct.

Next: [02 — Data, functions, and objects](./02-data-functions-objects.md).
