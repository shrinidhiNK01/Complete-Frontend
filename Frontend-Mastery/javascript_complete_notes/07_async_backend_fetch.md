# 07. Backend Intro, Callbacks, Promises, fetch, and async/await

## 1. Synchronous vs Asynchronous

Synchronous code runs line by line.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

Asynchronous code can start now and finish later.

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

## 2. Why Async Exists

Some tasks take time:

- Calling a backend API
- Reading a file
- Waiting for a timer
- Querying a database
- Loading an image

JavaScript should not freeze while waiting.

## 3. Callback Async Example

```javascript
function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Ravi" });
  }, 1000);
}

getUser(user => {
  console.log(user);
});
```

Problem: nested callbacks can become hard to read.

```javascript
getUser(user => {
  getOrders(user.id, orders => {
    getPayment(orders[0].id, payment => {
      console.log(payment);
    });
  });
});
```

This is called callback nesting.

## 4. Promises

A Promise represents a value that will be available later.

Promise states:

- Pending: still waiting.
- Fulfilled: success.
- Rejected: failed.

Create promise:

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Done");
  } else {
    reject(new Error("Failed"));
  }
});
```

Use promise:

```javascript
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });
```

## 5. Promise Example

```javascript
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => {
  console.log("1 second passed");
});
```

## 6. Promise Chaining

```javascript
getUser()
  .then(user => getOrders(user.id))
  .then(orders => getPayment(orders[0].id))
  .then(payment => {
    console.log(payment);
  })
  .catch(error => {
    console.log(error.message);
  });
```

## 7. `async` and `await`

`async/await` makes promise code look simpler.

```javascript
async function run() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  console.log(orders);
}
```

Rules:

- `await` can be used inside `async` functions.
- `await` waits for a promise.
- `async` functions always return a promise.

## 8. Error Handling with async/await

```javascript
async function loadData() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}
```

## 9. HTTP Basics

Frontend and backend usually talk using HTTP.

Common methods:

| Method | Meaning |
|---|---|
| GET | read data |
| POST | create data |
| PUT | replace data |
| PATCH | update part of data |
| DELETE | delete data |

Common status codes:

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 400 | Bad request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not found |
| 500 | Server error |

## 10. `fetch`

`fetch` makes HTTP requests in the browser.

GET request:

```javascript
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);
}

getPosts();
```

Important: `fetch` only rejects for network errors. For 404 or 500, check `response.ok`.

```javascript
async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
```

## 11. POST with fetch

```javascript
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Learn JS",
      body: "Practice every day",
      userId: 1
    })
  });

  const data = await response.json();
  console.log(data);
}
```

## 12. Promise Helpers

Run promises in parallel:

```javascript
const [user, posts] = await Promise.all([
  fetch("/api/user").then(response => response.json()),
  fetch("/api/posts").then(response => response.json())
]);
```

Other helpers:

```javascript
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

## 13. Backend Intro

A backend is code that runs on a server.

Backend usually handles:

- Database
- Authentication
- Business rules
- API endpoints
- Payments
- Emails
- File upload

Frontend:

```text
Browser UI
```

Backend:

```text
Server API
```

Database:

```text
Stores data
```

Flow:

```text
Browser -> Backend API -> Database
Browser <- Backend API <- Database
```

## 14. Simple Node.js Server

Create `server.js`:

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ message: "Hello from backend" }));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Run:

```bash
node server.js
```

## 15. Express Example

Install:

```bash
npm install express
```

`server.js`:

```javascript
import express from "express";

const app = express();

app.use(express.json());

const todos = [
  { id: 1, title: "Learn JS", completed: false }
];

app.get("/api/todos", (request, response) => {
  response.json(todos);
});

app.post("/api/todos", (request, response) => {
  const todo = {
    id: Date.now(),
    title: request.body.title,
    completed: false
  };

  todos.push(todo);
  response.status(201).json(todo);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
```

## 16. Frontend Calling Backend

```javascript
async function loadTodos() {
  const response = await fetch("http://localhost:3000/api/todos");
  const todos = await response.json();

  console.log(todos);
}
```

## 17. CORS

CORS is browser security that controls which websites can call an API.

If frontend and backend are on different origins, you may need CORS.

Express:

```bash
npm install cors
```

```javascript
import cors from "cors";

app.use(cors());
```

Use specific origins in production.

## 18. Async Mistakes

Mistake:

```javascript
const data = fetch("/api/todos");
console.log(data); // Promise, not actual data
```

Correct:

```javascript
const response = await fetch("/api/todos");
const data = await response.json();
```

Mistake:

```javascript
try {
  fetch("/bad-url");
} catch (error) {
  console.log(error);
}
```

Correct:

```javascript
try {
  const response = await fetch("/bad-url");

  if (!response.ok) {
    throw new Error("Request failed");
  }
} catch (error) {
  console.log(error.message);
}
```

## 19. Mini Project: Weather Search Pattern

```javascript
async function getWeather(city) {
  const url = `https://api.example.com/weather?city=${encodeURIComponent(city)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather not found");
  }

  return response.json();
}

async function handleSearch(city) {
  try {
    const weather = await getWeather(city);
    console.log(weather);
  } catch (error) {
    console.log(error.message);
  }
}
```

## 20. Async Mental Model

Remember:

- Promise means future value.
- `await` unwraps a promise.
- Use `try...catch` around awaited requests.
- Check `response.ok` for HTTP errors.
- Use `Promise.all` for independent parallel work.
- Do not block the page while waiting.

