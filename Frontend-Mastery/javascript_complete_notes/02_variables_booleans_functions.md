# 02. Variables, Booleans, If-Statements, and Functions

## 1. Variables

A variable stores a value so we can use it later.

```javascript
let age = 21;
console.log(age);
```

JavaScript has three ways to create variables:

```javascript
let name = "Ravi";
const country = "India";
var oldStyle = "avoid in modern code";
```

## 2. `let`

Use `let` when the value will change.

```javascript
let score = 0;
score = score + 10;
console.log(score); // 10
```

## 3. `const`

Use `const` when the variable should not be reassigned.

```javascript
const appName = "Todo App";
console.log(appName);
```

This is not allowed:

```javascript
const age = 20;
age = 21; // error
```

Important: `const` means the variable cannot be reassigned. It does not mean an object cannot change.

```javascript
const user = { name: "Ravi" };
user.name = "Asha"; // allowed
console.log(user);
```

But this is not allowed:

```javascript
const user = { name: "Ravi" };
user = { name: "Asha" }; // error
```

## 4. `var`

`var` is older. It has confusing scope behavior.

Prefer:

```javascript
const
let
```

Avoid:

```javascript
var
```

unless you are reading old code.

## 5. Naming Variables

Good names:

```javascript
const userName = "Asha";
const totalPrice = 500;
const isLoggedIn = true;
```

Rules:

- Can contain letters, numbers, `_`, `$`.
- Cannot start with a number.
- Cannot use reserved words like `if`, `let`, `return`.
- JavaScript is case-sensitive.

```javascript
const name = "Ravi";
const Name = "Asha";
```

These are different variables.

## 6. Assignment Shortcuts

```javascript
let count = 0;

count = count + 1;
count += 1;
count++;

count = count - 1;
count -= 1;
count--;

count *= 2;
count /= 2;
```

## 7. Booleans

A boolean is either `true` or `false`.

```javascript
const isAdult = true;
const isLoggedIn = false;
```

Boolean expressions:

```javascript
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 === 5); // true
```

Comparison operators:

| Operator | Meaning |
|---|---|
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal |
| `<=` | less than or equal |
| `===` | equal value and type |
| `!==` | not equal value or type |

## 8. If Statements

Use `if` to run code only when a condition is true.

```javascript
const age = 18;

if (age >= 18) {
  console.log("You can vote");
}
```

`if...else`:

```javascript
const age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

`else if`:

```javascript
const marks = 82;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else {
  console.log("D");
}
```

## 9. Logical Operators

`&&` means AND:

```javascript
const age = 25;
const hasId = true;

if (age >= 18 && hasId) {
  console.log("Allowed");
}
```

`||` means OR:

```javascript
const isAdmin = false;
const isOwner = true;

if (isAdmin || isOwner) {
  console.log("Can edit");
}
```

`!` means NOT:

```javascript
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login");
}
```

## 10. Truthy and Falsy Values

Falsy values:

```javascript
false
0
""
null
undefined
NaN
```

Everything else is truthy.

```javascript
if ("hello") {
  console.log("This runs");
}

if ("") {
  console.log("This does not run");
}
```

## 11. Ternary Operator

Short `if...else`:

```javascript
const age = 20;
const message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

Use ternary for simple conditions only. For bigger logic, use `if...else`.

## 12. Switch

Use `switch` when one value has many possible cases.

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Normal day");
}
```

`break` stops the switch. Without `break`, JavaScript continues to the next case.

## 13. Functions

A function is reusable code.

```javascript
function greet() {
  console.log("Hello");
}

greet();
greet();
```

## 14. Parameters and Arguments

Parameter: variable in function definition.  
Argument: actual value passed to function.

```javascript
function greetUser(name) {
  console.log(`Hello, ${name}`);
}

greetUser("Ravi");
greetUser("Asha");
```

Here `name` is a parameter. `"Ravi"` and `"Asha"` are arguments.

## 15. Return

`return` sends a value back from a function.

```javascript
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

After `return`, the function stops.

```javascript
function test() {
  return "done";
  console.log("This never runs");
}
```

## 16. Function Declaration

```javascript
function multiply(a, b) {
  return a * b;
}
```

Function declarations are hoisted, so you can call them before they appear in the file.

```javascript
console.log(add(2, 3));

function add(a, b) {
  return a + b;
}
```

## 17. Function Expression

```javascript
const multiply = function (a, b) {
  return a * b;
};
```

## 18. Arrow Function

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short version:

```javascript
const add = (a, b) => a + b;
```

One parameter:

```javascript
const square = number => number * number;
```

No parameters:

```javascript
const sayHi = () => console.log("Hi");
```

## 19. Default Parameters

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Ravi");
greet();
```

## 20. Scope

Scope means where a variable can be used.

Global scope:

```javascript
const appName = "Todo";

function showApp() {
  console.log(appName);
}
```

Function scope:

```javascript
function test() {
  const message = "Inside";
  console.log(message);
}

test();
// console.log(message); // error
```

Block scope:

```javascript
if (true) {
  const value = 10;
  let another = 20;
}

// console.log(value); // error
```

`let` and `const` are block scoped.

## 21. Hoisting

Hoisting means JavaScript moves declarations to the top internally.

Function declarations work before definition:

```javascript
sayHi();

function sayHi() {
  console.log("Hi");
}
```

`let` and `const` are hoisted but cannot be used before declaration:

```javascript
// console.log(name); // error
const name = "Ravi";
```

## 22. Pure Functions

A pure function:

- Gives same output for same input.
- Does not change outside data.

```javascript
function add(a, b) {
  return a + b;
}
```

Impure function:

```javascript
let total = 0;

function addToTotal(value) {
  total += value;
}
```

Pure functions are easier to test.

## 23. Error Handling Basics

Use `try...catch` to handle errors.

```javascript
try {
  JSON.parse("{ bad json }");
} catch (error) {
  console.log("Something went wrong");
  console.log(error.message);
}
```

Throw your own error:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

## 24. Mini Project: Simple Calculator

```javascript
function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }

  if (operator === "-") {
    return a - b;
  }

  if (operator === "*") {
    return a * b;
  }

  if (operator === "/") {
    if (b === 0) {
      return "Cannot divide by zero";
    }

    return a / b;
  }

  return "Invalid operator";
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
```

