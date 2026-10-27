# 03. Objects, Arrays, Loops, JSON, and Data Handling

## 1. Objects

An object stores related data in key-value pairs.

```javascript
const user = {
  name: "Ravi",
  age: 22,
  isStudent: true
};

console.log(user);
```

Keys are also called properties.

## 2. Reading Object Properties

Dot notation:

```javascript
console.log(user.name);
```

Bracket notation:

```javascript
console.log(user["age"]);
```

Use bracket notation when the key is dynamic:

```javascript
const key = "name";
console.log(user[key]);
```

## 3. Updating Objects

```javascript
const user = {
  name: "Ravi",
  age: 22
};

user.age = 23;
user.city = "Delhi";
delete user.name;

console.log(user);
```

## 4. Methods

A method is a function inside an object.

```javascript
const user = {
  name: "Asha",
  greet() {
    console.log("Hello");
  }
};

user.greet();
```

## 5. `this`

`this` usually means the object that is calling the method.

```javascript
const user = {
  name: "Ravi",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

user.greet();
```

Do not use arrow functions as object methods when you need `this`.

```javascript
const user = {
  name: "Ravi",
  greet: () => {
    console.log(this.name); // not the user object
  }
};
```

## 6. Nested Objects

```javascript
const student = {
  name: "Meera",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

console.log(student.address.city);
```

Optional chaining prevents errors:

```javascript
console.log(student.address?.city);
console.log(student.profile?.website);
```

## 7. Destructuring Objects

```javascript
const user = {
  name: "Asha",
  age: 22
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Rename while destructuring:

```javascript
const { name: userName } = user;
console.log(userName);
```

Default value:

```javascript
const { city = "Unknown" } = user;
```

## 8. Spread with Objects

Copy object:

```javascript
const user = { name: "Ravi", age: 22 };
const copy = { ...user };
```

Add/override:

```javascript
const updated = {
  ...user,
  age: 23,
  city: "Delhi"
};
```

## 9. Object Utility Methods

```javascript
const user = {
  name: "Ravi",
  age: 22
};

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Ravi", 22]
console.log(Object.entries(user)); // [["name", "Ravi"], ["age", 22]]
```

Loop through object:

```javascript
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

## 10. Arrays

An array stores an ordered list.

```javascript
const fruits = ["apple", "banana", "mango"];
console.log(fruits);
```

Indexes start at 0.

```javascript
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
```

Length:

```javascript
console.log(fruits.length);
```

## 11. Updating Arrays

```javascript
const fruits = ["apple", "banana"];

fruits[1] = "orange";
fruits.push("mango");
fruits.pop();
fruits.unshift("grapes");
fruits.shift();

console.log(fruits);
```

Common methods:

| Method | Meaning |
|---|---|
| `push()` | add to end |
| `pop()` | remove from end |
| `unshift()` | add to start |
| `shift()` | remove from start |
| `includes()` | check if value exists |
| `indexOf()` | find index |
| `slice()` | copy part |
| `splice()` | add/remove/change original array |
| `join()` | convert array to string |

## 12. `slice` vs `splice`

`slice` does not change original:

```javascript
const numbers = [1, 2, 3, 4];
const part = numbers.slice(1, 3);

console.log(part);    // [2, 3]
console.log(numbers); // [1, 2, 3, 4]
```

`splice` changes original:

```javascript
const numbers = [1, 2, 3, 4];
numbers.splice(1, 2);

console.log(numbers); // [1, 4]
```

## 13. Array Destructuring

```javascript
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);
console.log(second);
```

Skip items:

```javascript
const [firstColor, , thirdColor] = colors;
```

## 14. Spread with Arrays

Copy:

```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];
```

Merge:

```javascript
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
```

## 15. Rest Parameters

Collect many arguments:

```javascript
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
```

## 16. Loops

Loops repeat code.

### `for` loop

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while` loop

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

### `do...while`

Runs at least once:

```javascript
let i = 10;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

### `for...of`

Best for array values:

```javascript
const fruits = ["apple", "banana"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

### `for...in`

Best for object keys:

```javascript
const user = { name: "Ravi", age: 22 };

for (const key in user) {
  console.log(key, user[key]);
}
```

## 17. Break and Continue

`break` stops the loop.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

`continue` skips one round.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

## 18. Functional Array Methods

### `forEach`

Runs a function for every item.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(number => {
  console.log(number);
});
```

### `map`

Creates a new array.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

### `filter`

Keeps matching items.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(number => number % 2 === 0);

console.log(even);
```

### `find`

Finds first matching item.

```javascript
const users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Asha" }
];

const user = users.find(item => item.id === 2);
console.log(user);
```

### `some`

Returns true if at least one item matches.

```javascript
const hasAdult = users.some(user => user.age >= 18);
```

### `every`

Returns true if all items match.

```javascript
const allAdults = users.every(user => user.age >= 18);
```

### `reduce`

Combines array into one value.

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);
```

## 19. JSON

JSON means JavaScript Object Notation. It is used to send data between frontend and backend.

Object:

```javascript
const user = {
  name: "Ravi",
  age: 22
};
```

Convert object to JSON string:

```javascript
const json = JSON.stringify(user);
console.log(json);
```

Convert JSON string to object:

```javascript
const parsed = JSON.parse(json);
console.log(parsed.name);
```

JSON rules:

- Keys must use double quotes.
- Strings must use double quotes.
- No functions.
- No comments.
- No trailing commas.

Valid JSON:

```json
{
  "name": "Ravi",
  "age": 22,
  "skills": ["JavaScript", "HTML"]
}
```

## 20. Copying: Shallow vs Deep

Shallow copy:

```javascript
const user = {
  name: "Ravi",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };
copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
```

Nested object was still shared.

Deep copy:

```javascript
const deepCopy = structuredClone(user);
```

For older environments:

```javascript
const deepCopy = JSON.parse(JSON.stringify(user));
```

But JSON copy loses functions, `Date`, `undefined`, `Map`, `Set`, etc.

## 21. Mini Project: Todo Data

```javascript
const todos = [];

function addTodo(title) {
  todos.push({
    id: Date.now(),
    title,
    completed: false
  });
}

function completeTodo(id) {
  const todo = todos.find(item => item.id === id);

  if (todo) {
    todo.completed = true;
  }
}

function deleteTodo(id) {
  const index = todos.findIndex(item => item.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }
}

addTodo("Learn arrays");
addTodo("Practice objects");

console.log(todos);
```

