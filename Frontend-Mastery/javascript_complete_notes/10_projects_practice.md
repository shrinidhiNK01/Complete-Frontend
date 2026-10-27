# 10. Complete Practice Projects

Projects make JavaScript real. Do these in order.

## Project 1: Calculator

Skills:

- Variables
- Functions
- Conditions
- DOM events

HTML:

```html
<input id="first" type="number" placeholder="First number">
<input id="second" type="number" placeholder="Second number">

<button data-operator="+">+</button>
<button data-operator="-">-</button>
<button data-operator="*">*</button>
<button data-operator="/">/</button>

<p id="result"></p>
```

JavaScript:

```javascript
const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
  }

  return "Invalid operator";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const a = Number(firstInput.value);
    const b = Number(secondInput.value);
    const operator = button.dataset.operator;

    result.textContent = calculate(a, b, operator);
  });
});
```

Improvements:

- Add clear button.
- Show error for empty inputs.
- Add keyboard support.

## Project 2: Todo App

Skills:

- Arrays
- Objects
- DOM
- Events
- localStorage

Features:

- Add todo.
- Complete todo.
- Delete todo.
- Save in localStorage.
- Filter all/active/completed.

State:

```javascript
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";
```

Core functions:

```javascript
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(title) {
  todos.push({
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date().toISOString()
  });

  saveTodos();
}

function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });

  saveTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
}

function getVisibleTodos() {
  if (filter === "active") {
    return todos.filter(todo => !todo.completed);
  }

  if (filter === "completed") {
    return todos.filter(todo => todo.completed);
  }

  return todos;
}
```

## Project 3: Rock Paper Scissors

Skills:

- Math.random
- Conditions
- Functions
- DOM

```javascript
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getWinner(player, computer) {
  if (player === computer) {
    return "tie";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

console.log(getWinner("rock", getComputerChoice()));
```

Improvements:

- Add score.
- Save score in localStorage.
- Add reset button.

## Project 4: Product Cart

Skills:

- Modules
- Arrays
- Objects
- DOM rendering
- localStorage

Files:

```text
src/
  main.js
  products.js
  cart.js
```

`products.js`:

```javascript
export const products = [
  { id: "p1", name: "Laptop", price: 60000 },
  { id: "p2", name: "Mouse", price: 700 },
  { id: "p3", name: "Keyboard", price: 1500 }
];
```

`cart.js`:

```javascript
export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  const item = cart.find(cartItem => cartItem.productId === productId);

  if (item) {
    item.qty++;
  } else {
    cart.push({ productId, qty: 1 });
  }

  saveCart();
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
}
```

`main.js`:

```javascript
import { products } from "./products.js";
import { addToCart } from "./cart.js";

const productList = document.querySelector("#productList");

function renderProducts() {
  productList.innerHTML = products.map(product => {
    return `
      <article>
        <h2>${product.name}</h2>
        <p>Rs. ${product.price}</p>
        <button data-id="${product.id}">Add to cart</button>
      </article>
    `;
  }).join("");
}

productList.addEventListener("click", event => {
  if (event.target.matches("button")) {
    addToCart(event.target.dataset.id);
  }
});

renderProducts();
```

## Project 5: API Search App

Skills:

- fetch
- async/await
- error handling
- forms
- loading state

```javascript
const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const result = document.querySelector("#result");

async function searchUsers(query) {
  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}

form.addEventListener("submit", async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    return;
  }

  result.textContent = "Loading...";

  try {
    const data = await searchUsers(query);

    result.innerHTML = data.items.slice(0, 5).map(user => {
      return `<p>${user.login}</p>`;
    }).join("");
  } catch (error) {
    result.textContent = error.message;
  }
});
```

## Project 6: Expense Tracker

Skills:

- Forms
- Arrays
- Reduce
- localStorage
- Dates

Data shape:

```javascript
{
  id: "uuid",
  title: "Food",
  amount: 250,
  type: "expense",
  date: "2026-06-11"
}
```

Useful functions:

```javascript
function getBalance(transactions) {
  return transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    }

    return total - transaction.amount;
  }, 0);
}

function getTotalByType(transactions, type) {
  return transactions
    .filter(transaction => transaction.type === type)
    .reduce((total, transaction) => total + transaction.amount, 0);
}
```

## Project 7: Quiz App

Skills:

- Arrays
- Objects
- Conditions
- DOM rendering

```javascript
const questions = [
  {
    question: "Which keyword creates a constant?",
    options: ["let", "const", "var"],
    answer: "const"
  },
  {
    question: "Which method converts JSON string to object?",
    options: ["JSON.parse", "JSON.stringify", "parseInt"],
    answer: "JSON.parse"
  }
];

let currentIndex = 0;
let score = 0;

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentIndex++;
}
```

## Project 8: Full Stack Todo API

Skills:

- Node.js
- Express
- REST API
- async/await

Endpoints:

```text
GET    /api/todos
POST   /api/todos
PATCH  /api/todos/:id
DELETE /api/todos/:id
```

Example:

```javascript
import express from "express";

const app = express();
app.use(express.json());

let todos = [];

app.get("/api/todos", (request, response) => {
  response.json(todos);
});

app.post("/api/todos", (request, response) => {
  const todo = {
    id: crypto.randomUUID(),
    title: request.body.title,
    completed: false
  };

  todos.push(todo);
  response.status(201).json(todo);
});

app.patch("/api/todos/:id", (request, response) => {
  const todo = todos.find(item => item.id === request.params.id);

  if (!todo) {
    return response.status(404).json({ message: "Todo not found" });
  }

  Object.assign(todo, request.body);
  response.json(todo);
});

app.delete("/api/todos/:id", (request, response) => {
  todos = todos.filter(item => item.id !== request.params.id);
  response.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

## Project 9: Amazon-Style Project Plan

Features:

1. Product listing page.
2. Add to cart.
3. Cart quantity update.
4. Checkout page.
5. Delivery options.
6. Order summary.
7. Save cart in localStorage.
8. Use modules.
9. Add tests for cart logic.

Suggested files:

```text
src/
  data/
    products.js
    deliveryOptions.js
  scripts/
    amazon.js
    checkout.js
  utils/
    money.js
  cart/
    cart.js
    cart.test.js
```

Money utility:

```javascript
export function formatCurrency(cents) {
  return `Rs. ${(cents / 100).toFixed(2)}`;
}
```

Cart test:

```javascript
import { expect, test } from "vitest";
import { addToCart, cart } from "./cart.js";

test("adds new product to cart", () => {
  cart.length = 0;

  addToCart("p1");

  expect(cart).toEqual([
    { productId: "p1", qty: 1 }
  ]);
});
```

## Project 10: Next Step Portfolio

Build a portfolio with:

- About section
- Skills
- Projects
- Contact form
- Responsive design
- Deployed link

Then build:

- Weather app
- Movie search app
- Expense tracker
- E-commerce cart
- Blog frontend
- Full-stack todo app

After that learn:

- TypeScript
- React
- Node.js and Express
- Databases like MongoDB/PostgreSQL
- Authentication
- Deployment

