# 11. JavaScript Cheat Sheet, Interview Questions, and Revision Plan

## 1. Must-Know Syntax

Variables:

```javascript
const name = "Ravi";
let score = 0;
```

Function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => a + b;
```

Object:

```javascript
const user = {
  name: "Asha",
  age: 22
};
```

Array:

```javascript
const numbers = [1, 2, 3];
```

If:

```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Loop:

```javascript
for (const item of items) {
  console.log(item);
}
```

Import/export:

```javascript
export const appName = "My App";
export function add(a, b) {
  return a + b;
}
```

```javascript
import { appName, add } from "./utils.js";
```

Browser module:

```html
<script type="module" src="./main.js"></script>
```

Async:

```javascript
async function loadData() {
  const response = await fetch("/api/data");
  return response.json();
}
```

## 2. Important Concepts

| Concept | Simple meaning |
|---|---|
| Variable | stores value |
| Function | reusable code |
| Object | key-value data |
| Array | ordered list |
| DOM | browser's object version of HTML |
| Event | user/browser action |
| Callback | function passed to another function |
| Promise | future value |
| async/await | cleaner promise syntax |
| Module | separate JS file with imports/exports |
| Class | blueprint for objects |
| Closure | function remembers outer variables |
| Scope | where a variable can be used |
| Hoisting | declarations are known before execution |
| Prototype | object inheritance system |

## 3. Common Mistakes

Using `=` instead of `===`:

```javascript
if (name = "Ravi") {
}
```

Correct:

```javascript
if (name === "Ravi") {
}
```

Forgetting `await`:

```javascript
const data = response.json(); // Promise
```

Correct:

```javascript
const data = await response.json();
```

Changing state but not rendering:

```javascript
todos.push(newTodo);
// forgot renderTodos()
```

Using `innerHTML` with unsafe input:

```javascript
list.innerHTML = userInput;
```

Better:

```javascript
element.textContent = userInput;
```

Mutating data accidentally:

```javascript
const copy = original;
copy.name = "Changed";
```

Better:

```javascript
const copy = { ...original };
```

## 4. Interview Questions

### 1. What is JavaScript?

JavaScript is a programming language used to make web pages interactive and to build frontend, backend, and full-stack applications.

### 2. Difference between `let`, `const`, and `var`?

`let` can be reassigned and is block scoped.  
`const` cannot be reassigned and is block scoped.  
`var` is older and function scoped.

### 3. What are primitive types?

Primitive types include string, number, boolean, undefined, null, bigint, and symbol.

### 4. What is the difference between `null` and `undefined`?

`undefined` means a value is missing or not assigned.  
`null` means intentionally empty.

### 5. What is the difference between `==` and `===`?

`==` compares after type conversion.  
`===` compares value and type.  
Use `===` most of the time.

### 6. What is a function?

A function is reusable code that can take input, perform work, and return output.

### 7. What is scope?

Scope decides where variables can be accessed.

### 8. What is hoisting?

Hoisting is JavaScript behavior where declarations are processed before code execution. Function declarations can be called before they appear. `let` and `const` cannot be used before declaration.

### 9. What is a closure?

A closure is when a function remembers variables from its outer scope even after the outer function has finished.

### 10. What is a callback?

A callback is a function passed into another function.

### 11. What is a higher-order function?

A higher-order function takes a function as input or returns a function.

### 12. What is the DOM?

The DOM is the browser's object representation of HTML. JavaScript uses it to read and change the page.

### 13. What is event delegation?

Event delegation means adding one event listener to a parent and handling events from child elements.

### 14. What is a promise?

A promise represents a future success or failure value.

### 15. What are promise states?

Pending, fulfilled, and rejected.

### 16. What is async/await?

`async/await` is syntax for writing promise-based code in a cleaner way.

### 17. What is `fetch`?

`fetch` is a browser API used to make HTTP requests.

### 18. What is JSON?

JSON is a text format for storing and sending data.

### 19. What is the difference between `map`, `filter`, and `reduce`?

`map` transforms each item.  
`filter` keeps matching items.  
`reduce` combines items into one value.

### 20. What is destructuring?

Destructuring extracts values from arrays or objects.

```javascript
const { name } = user;
const [first] = items;
```

### 21. What is spread?

Spread expands or copies arrays/objects.

```javascript
const copy = { ...user };
const all = [...a, ...b];
```

### 22. What is rest?

Rest collects multiple values.

```javascript
function sum(...numbers) {}
```

### 23. What are modules?

Modules split code into files using `import` and `export`.

### 24. Named export vs default export?

Named exports are imported with `{}`.  
Default export is imported without `{}` and there is only one default per file.

### 25. What is `this`?

`this` refers to the current calling context. In object methods, it usually points to the object. Arrow functions do not have their own `this`.

### 26. What is a class?

A class is a blueprint for creating objects.

### 27. What is inheritance?

Inheritance lets one class reuse behavior from another class.

### 28. What is a prototype?

A prototype is an object from which another object can inherit properties and methods.

### 29. What is localStorage?

`localStorage` stores small string data in the browser with no expiration time.

### 30. What is the event loop?

The event loop lets JavaScript handle async tasks while still running on a single main thread. It manages call stack, task queue, and microtask queue.

## 5. Event Loop Simple Explanation

JavaScript has:

- Call stack: currently running code.
- Web APIs: browser handles timers, fetch, events.
- Task queue: callbacks like `setTimeout`.
- Microtask queue: promises.
- Event loop: moves waiting callbacks to the call stack when it is free.

Example:

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Promises run before `setTimeout` callbacks because promise callbacks are microtasks.

## 6. Advanced Topics to Learn After This

After core JavaScript, learn:

- TypeScript
- React
- Node.js
- Express
- Databases
- Authentication
- Web security
- Performance
- Accessibility
- Deployment

## 7. Web Security Basics

XSS:

Do not insert unsafe user input using `innerHTML`.

CSRF:

Protect state-changing backend requests.

Secrets:

Do not put private API keys in frontend code.

Validation:

Validate on frontend for user experience and backend for security.

## 8. Performance Basics

Use:

- Debounce search inputs.
- Avoid unnecessary DOM updates.
- Use event delegation.
- Load only needed data.
- Split large code with modules/build tools.
- Avoid blocking loops on huge data.

## 9. Accessibility Basics

Good websites should work for everyone.

Use:

- Semantic HTML.
- Button for actions.
- Anchor for navigation.
- Labels for inputs.
- Keyboard-friendly controls.
- Good color contrast.
- Meaningful alt text.

Example:

```html
<label for="email">Email</label>
<input id="email" type="email">
```

## 10. 30-Day Revision Plan

Days 1-3:

- Values, variables, numbers, strings.

Days 4-6:

- Booleans, if, functions.

Days 7-10:

- Objects, arrays, loops.

Days 11-14:

- DOM, events, forms, localStorage.

Days 15-17:

- Advanced functions, closures, array methods.

Days 18-20:

- Modules, npm, Git.

Days 21-23:

- Promises, fetch, async/await.

Days 24-25:

- Testing and debugging.

Days 26-27:

- OOP, classes, inheritance.

Days 28-30:

- Build one complete project and revise interview questions.

## 11. Final Master Checklist

You are strong in JavaScript when you can:

- Explain values and types.
- Use `let` and `const` correctly.
- Write functions confidently.
- Use objects and arrays.
- Use `map`, `filter`, `reduce`.
- Update the DOM.
- Handle events.
- Save data in localStorage.
- Split code into modules.
- Use `import` and `export`.
- Install and use npm packages.
- Make API requests with `fetch`.
- Use promises and async/await.
- Handle errors.
- Write simple tests.
- Use Git.
- Build a frontend project.
- Build a simple backend API.
- Explain closures, `this`, prototypes, and classes.

