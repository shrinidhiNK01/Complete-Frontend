# 05. Advanced Functions

Advanced functions are one of the most important parts of JavaScript.

You use them in:

- DOM events
- Array methods
- React
- Node.js
- APIs
- Testing
- Async code

## 1. Functions Are Values

In JavaScript, a function can be stored in a variable.

```javascript
const sayHi = function () {
  console.log("Hi");
};

sayHi();
```

A function can also be passed into another function.

```javascript
function runTask(task) {
  task();
}

runTask(function () {
  console.log("Task running");
});
```

## 2. Callback Functions

A callback is a function passed to another function.

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Ravi", function () {
  console.log("Welcome");
});
```

Common callback example:

```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

Here the click handler is a callback.

## 3. Higher-Order Functions

A higher-order function is a function that:

- Takes another function as input, or
- Returns another function.

Example:

```javascript
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeat(3, index => {
  console.log(`Run ${index}`);
});
```

## 4. Returning Functions

```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## 5. Closures

A closure happens when a function remembers variables from its outer scope.

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The inner function remembers `count` even after `createCounter()` has finished.

Closures are used for:

- Private data
- Function factories
- Event handlers
- React hooks
- Async logic

## 6. IIFE

IIFE means Immediately Invoked Function Expression.

```javascript
(function () {
  console.log("Runs immediately");
})();
```

Modern code uses modules more often, but you may see IIFEs in older code.

## 7. Arrow Functions

Normal function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short arrow:

```javascript
const add = (a, b) => a + b;
```

Returning object from arrow function:

```javascript
const createUser = name => ({ name });
```

Without parentheses, JavaScript thinks `{}` is a function body.

## 8. `this` in Functions

Normal function method:

```javascript
const user = {
  name: "Ravi",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Ravi
```

Arrow functions do not create their own `this`.

```javascript
const user = {
  name: "Ravi",
  greet: () => {
    console.log(this.name); // usually undefined
  }
};
```

Rule:

- Use normal method syntax for object methods.
- Use arrow functions for callbacks when you do not need your own `this`.

## 9. `call`, `apply`, and `bind`

These control `this`.

```javascript
function introduce(city) {
  console.log(`I am ${this.name} from ${city}`);
}

const user = { name: "Asha" };

introduce.call(user, "Mumbai");
introduce.apply(user, ["Delhi"]);

const boundIntroduce = introduce.bind(user);
boundIntroduce("Pune");
```

Difference:

- `call`: pass arguments one by one.
- `apply`: pass arguments as an array.
- `bind`: returns a new function.

## 10. Array Methods with Callbacks

### `map`

Transform every item.

```javascript
const prices = [100, 200, 300];
const withTax = prices.map(price => price * 1.18);
```

### `filter`

Keep matching items.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(number => number % 2 === 0);
```

### `reduce`

Combine into one value.

```javascript
const cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Book", price: 100, qty: 2 }
];

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);

console.log(total);
```

### `sort`

Sort numbers:

```javascript
const numbers = [10, 2, 30];
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 10, 30]
```

Sort objects:

```javascript
const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 700 }
];

products.sort((a, b) => a.price - b.price);
```

## 11. Debounce

Debounce waits until the user stops doing something.

Useful for search input.

```javascript
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce(query => {
  console.log("Searching:", query);
}, 500);

search("j");
search("ja");
search("jav");
```

Only the last call runs after 500ms.

## 12. Throttle

Throttle allows a function to run at most once in a time period.

Useful for scroll and resize events.

```javascript
function throttle(callback, delay) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
```

## 13. Recursion

Recursion means a function calls itself.

```javascript
function countDown(number) {
  if (number <= 0) {
    return;
  }

  console.log(number);
  countDown(number - 1);
}

countDown(5);
```

Every recursive function needs a stop condition.

Factorial:

```javascript
function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5)); // 120
```

## 14. Currying

Currying means turning a function with many arguments into a chain of functions.

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(2)(3)); // 5
```

Arrow version:

```javascript
const add = a => b => a + b;
```

## 15. Function Composition

Composition means combining functions.

```javascript
const trim = text => text.trim();
const lower = text => text.toLowerCase();
const slug = text => lower(trim(text)).replaceAll(" ", "-");

console.log(slug("  Hello World  "));
```

## 16. Mini Project: Cart Total

```javascript
const cart = [
  { id: 1, name: "Laptop", price: 60000, qty: 1 },
  { id: 2, name: "Mouse", price: 700, qty: 2 },
  { id: 3, name: "Keyboard", price: 1500, qty: 1 }
];

const total = cart
  .filter(item => item.qty > 0)
  .map(item => ({
    ...item,
    subtotal: item.price * item.qty
  }))
  .reduce((sum, item) => sum + item.subtotal, 0);

console.log(total);
```

