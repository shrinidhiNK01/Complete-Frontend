# 04. HTML, CSS, console.log, DOM, Events, and Browser JavaScript

## 1. HTML Review

HTML gives structure to a web page.

```html
<!doctype html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <button>Click me</button>
  </body>
</html>
```

Common tags:

```html
<h1>Main heading</h1>
<p>Paragraph</p>
<a href="https://example.com">Link</a>
<img src="photo.jpg" alt="Description">
<button>Click</button>
<input type="text">
<form></form>
<div></div>
<span></span>
```

## 2. CSS Review

CSS styles HTML.

```css
body {
  font-family: Arial, sans-serif;
}

button {
  background: blue;
  color: white;
  padding: 10px 16px;
}
```

CSS selector examples:

```css
p {
  color: black;
}

.card {
  border: 1px solid #ddd;
}

#main-title {
  font-size: 32px;
}
```

## 3. Connect HTML, CSS, and JavaScript

Folder:

```text
index.html
style.css
script.js
```

`index.html`:

```html
<!doctype html>
<html>
  <head>
    <title>JS Practice</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <h1 id="title">Hello</h1>
    <button id="changeButton">Change</button>

    <script src="./script.js"></script>
  </body>
</html>
```

`script.js`:

```javascript
console.log("JavaScript connected");
```

For modules:

```html
<script type="module" src="./script.js"></script>
```

## 4. Browser Console

Open DevTools:

- Chrome/Edge: F12 or Ctrl+Shift+I
- Console tab shows logs and errors.

Use:

```javascript
console.log("normal message");
console.warn("warning");
console.error("error");
console.table([{ name: "Ravi" }, { name: "Asha" }]);
```

## 5. DOM

DOM means Document Object Model.

The browser converts HTML into a tree of objects. JavaScript can read and change this tree.

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
const title = document.querySelector("#title");
console.log(title.textContent);
```

## 6. Selecting Elements

Recommended:

```javascript
document.querySelector("h1");
document.querySelector(".card");
document.querySelector("#title");
document.querySelectorAll("button");
```

Older but common:

```javascript
document.getElementById("title");
document.getElementsByClassName("card");
document.getElementsByTagName("button");
```

## 7. Changing Text and HTML

```javascript
const title = document.querySelector("#title");

title.textContent = "New title";
title.innerHTML = "<span>New HTML</span>";
```

Prefer `textContent` when inserting user text. It is safer.

Avoid this with user input:

```javascript
element.innerHTML = userInput;
```

It can create security problems.

## 8. Changing Styles

```javascript
const title = document.querySelector("#title");

title.style.color = "blue";
title.style.fontSize = "32px";
```

Better approach: toggle CSS classes.

```css
.highlight {
  color: white;
  background: green;
}
```

```javascript
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight");
```

## 9. Attributes

```html
<img id="photo" src="old.jpg" alt="Old">
```

```javascript
const photo = document.querySelector("#photo");

console.log(photo.getAttribute("src"));
photo.setAttribute("src", "new.jpg");
photo.setAttribute("alt", "New photo");
```

## 10. Events

Events are actions like click, typing, submit, mouse move, etc.

```javascript
const button = document.querySelector("#changeButton");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

Common events:

| Event | Meaning |
|---|---|
| `click` | user clicks |
| `input` | input value changes |
| `change` | input selection changes |
| `submit` | form submits |
| `keydown` | key pressed |
| `keyup` | key released |
| `mouseover` | mouse enters |
| `mouseout` | mouse leaves |

## 11. Event Object

The event object contains details about the event.

```javascript
document.addEventListener("keydown", event => {
  console.log(event.key);
});
```

For buttons:

```javascript
button.addEventListener("click", event => {
  console.log(event.target);
});
```

## 12. Forms

HTML:

```html
<form id="loginForm">
  <input id="email" type="email" placeholder="Email">
  <input id="password" type="password" placeholder="Password">
  <button type="submit">Login</button>
</form>
```

JavaScript:

```javascript
const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  console.log(email, password);
});
```

`event.preventDefault()` stops the browser from refreshing the page.

## 13. Creating Elements

```javascript
const list = document.querySelector("#list");

const item = document.createElement("li");
item.textContent = "New item";

list.append(item);
```

Remove:

```javascript
item.remove();
```

## 14. Event Delegation

Instead of adding event listener to every child, add it to parent.

```html
<ul id="todoList">
  <li data-id="1">Learn JS</li>
  <li data-id="2">Practice DOM</li>
</ul>
```

```javascript
const todoList = document.querySelector("#todoList");

todoList.addEventListener("click", event => {
  if (event.target.matches("li")) {
    console.log(event.target.dataset.id);
  }
});
```

Useful when items are added dynamically.

## 15. Dataset

HTML:

```html
<button data-product-id="101">Add</button>
```

JavaScript:

```javascript
const button = document.querySelector("button");
console.log(button.dataset.productId);
```

## 16. localStorage

`localStorage` stores small data in the browser.

Save:

```javascript
localStorage.setItem("theme", "dark");
```

Read:

```javascript
const theme = localStorage.getItem("theme");
```

Remove:

```javascript
localStorage.removeItem("theme");
```

Store object:

```javascript
const user = { name: "Ravi" };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);
```

Use localStorage for small non-secret data only. Do not store passwords or tokens carelessly.

## 17. Timers

Run once after delay:

```javascript
setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);
```

Run repeatedly:

```javascript
const intervalId = setInterval(() => {
  console.log("Runs every second");
}, 1000);

clearInterval(intervalId);
```

## 18. Browser Dialogs

```javascript
alert("Hello");

const answer = confirm("Are you sure?");
console.log(answer);

const name = prompt("What is your name?");
console.log(name);
```

Useful for practice, but real apps usually use custom UI.

## 19. Mini Project: Counter App

HTML:

```html
<h1 id="count">0</h1>
<button id="minus">-</button>
<button id="plus">+</button>
<button id="reset">Reset</button>
```

JavaScript:

```javascript
let count = 0;

const countElement = document.querySelector("#count");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const resetButton = document.querySelector("#reset");

function render() {
  countElement.textContent = count;
}

plusButton.addEventListener("click", () => {
  count++;
  render();
});

minusButton.addEventListener("click", () => {
  count--;
  render();
});

resetButton.addEventListener("click", () => {
  count = 0;
  render();
});

render();
```

## 20. Mini Project: Todo DOM App

HTML:

```html
<form id="todoForm">
  <input id="todoInput" placeholder="Enter todo">
  <button>Add</button>
</form>

<ul id="todoList"></ul>
```

JavaScript:

```javascript
const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";

  todos.forEach(todo => {
    const item = document.createElement("li");
    item.textContent = todo.title;
    item.dataset.id = todo.id;

    if (todo.completed) {
      item.style.textDecoration = "line-through";
    }

    list.append(item);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const title = input.value.trim();

  if (title === "") {
    return;
  }

  todos.push({
    id: crypto.randomUUID(),
    title,
    completed: false
  });

  input.value = "";
  saveTodos();
  renderTodos();
});

list.addEventListener("click", event => {
  if (!event.target.matches("li")) {
    return;
  }

  const id = event.target.dataset.id;
  const todo = todos.find(item => item.id === id);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
});

renderTodos();
```

