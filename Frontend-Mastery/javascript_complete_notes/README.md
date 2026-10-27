# JavaScript Complete Notes: Beginner to Advanced

These notes are written in simple English and follow the course timeline you gave, but also add important topics that are often missing from beginner courses.

Use this folder like a full JavaScript book:

1. Read the files in order.
2. Type the code yourself.
3. Change small things and see what happens.
4. Build the mini projects.
5. Revise the cheat sheet and interview questions.

## Course Timeline Covered

| Time | Topic | Covered in |
|---|---|---|
| 00:00:00 | Intro | This README |
| 00:02:01 | JavaScript Basics | `01_basics_numbers_strings.md` |
| 00:14:48 | Numbers and Math | `01_basics_numbers_strings.md` |
| 00:43:26 | Strings | `01_basics_numbers_strings.md` |
| 01:07:32 | HTML CSS Review, console.log | `04_dom_html_css_browser.md` |
| 01:51:06 | Variables | `02_variables_booleans_functions.md` |
| 02:32:55 | Booleans and If-Statements | `02_variables_booleans_functions.md` |
| 03:34:12 | Functions | `02_variables_booleans_functions.md` |
| 04:15:45 | Objects | `03_objects_arrays_loops.md` |
| 05:25:46 | DOM | `04_dom_html_css_browser.md` |
| 06:38:51 | HTML, CSS, JS Together | `04_dom_html_css_browser.md` |
| 07:42:28 | Arrays and Loops | `03_objects_arrays_loops.md` |
| 08:43:04 | Arrays and Loops Part 2 | `03_objects_arrays_loops.md` |
| 09:28:26 | Advanced Functions | `05_advanced_functions.md` |
| 10:10:22 | Advanced Functions Part 2 | `05_advanced_functions.md` |
| 10:58:57 | Amazon Project and Git | `06_modules_libraries_tooling_git.md`, `10_projects_practice.md` |
| 12:28:00 | Modules | `06_modules_libraries_tooling_git.md` |
| 13:56:33 | External Libraries | `06_modules_libraries_tooling_git.md` |
| 15:34:37 | Testing | `08_testing_debugging_quality.md` |
| 15:58:24 | Testing Frameworks | `08_testing_debugging_quality.md` |
| 17:36:30 | OOP | `09_oop_classes_inheritance.md` |
| 18:06:09 | Classes | `09_oop_classes_inheritance.md` |
| 18:51:50 | Inheritance | `09_oop_classes_inheritance.md` |
| 19:32:59 | Backend, Callbacks, Async Await | `07_async_backend_fetch.md` |
| 20:30:57 | Promises and fetch | `07_async_backend_fetch.md` |
| 21:12:47 | Async Await | `07_async_backend_fetch.md` |
| 22:14:08 | Next Steps | `10_projects_practice.md`, `11_interview_cheatsheet.md` |

## Files

- `01_basics_numbers_strings.md`: What JS is, running JS, syntax, numbers, math, strings.
- `02_variables_booleans_functions.md`: Variables, `let`, `const`, booleans, conditions, functions, scope.
- `03_objects_arrays_loops.md`: Objects, arrays, loops, destructuring, spread/rest, JSON.
- `04_dom_html_css_browser.md`: HTML/CSS review, DOM, events, forms, localStorage, browser APIs.
- `05_advanced_functions.md`: Callbacks, higher-order functions, closures, `this`, timers, functional array methods.
- `06_modules_libraries_tooling_git.md`: ES modules, `import`, `export`, `type="module"`, npm, Vite, Git.
- `07_async_backend_fetch.md`: Backend intro, HTTP, callbacks, promises, `fetch`, async/await, error handling.
- `08_testing_debugging_quality.md`: Debugging, unit testing, integration testing, Vitest/Jest style examples.
- `09_oop_classes_inheritance.md`: OOP, classes, inheritance, prototypes, private fields, composition.
- `10_projects_practice.md`: Step-by-step practice projects from beginner to advanced.
- `11_interview_cheatsheet.md`: Cheat sheet, interview questions, common mistakes, revision plan.

## What is JavaScript?

JavaScript is a programming language used mainly for:

- Making websites interactive.
- Building frontend apps with React, Vue, Angular, etc.
- Building backend APIs with Node.js.
- Creating desktop apps, mobile apps, browser extensions, scripts, and tools.

JavaScript runs in two main places:

1. Browser: Chrome, Edge, Firefox, Safari.
2. Server/runtime: Node.js, Deno, Bun.

## JavaScript vs HTML vs CSS

HTML gives structure:

```html
<button>Click me</button>
```

CSS gives style:

```css
button {
  color: white;
  background: blue;
}
```

JavaScript gives behavior:

```javascript
document.querySelector("button").addEventListener("click", () => {
  alert("Clicked");
});
```

## How to Practice

For browser practice, create three files:

```text
index.html
style.css
script.js
```

For Node.js practice:

```bash
node app.js
```

For modern module practice in the browser:

```html
<script type="module" src="./script.js"></script>
```

For modern imports and exports:

```javascript
// math.js
export const appName = "Practice App";

export function add(a, b) {
  return a + b;
}

// script.js
import { appName, add } from "./math.js";

console.log(appName);
console.log(add(2, 3));
```

## Simple Learning Rule

Do not try to memorize everything at once.

Learn in this order:

1. Values
2. Variables
3. Conditions
4. Functions
5. Objects
6. Arrays
7. Loops
8. DOM
9. Events
10. Modules
11. Async code
12. Testing
13. Projects

