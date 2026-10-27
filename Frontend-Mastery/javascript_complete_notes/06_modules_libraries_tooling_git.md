# 06. Modules, Imports, Exports, External Libraries, npm, Tooling, and Git

## 1. Why Modules?

Without modules, one large JavaScript file becomes hard to manage.

Modules let you split code into smaller files.

Example:

```text
src/
  main.js
  math.js
  user.js
```

Each file can export code. Other files can import it.

## 2. Browser Module Setup

HTML:

```html
<script type="module" src="./main.js"></script>
```

`type="module"` tells the browser:

- This file can use `import`.
- This file can use `export`.
- Code runs in module scope.
- Strict mode is enabled automatically.

## 3. Named Export

`math.js`:

```javascript
export const appName = "Calculator";

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

`main.js`:

```javascript
import { appName, add, subtract } from "./math.js";

console.log(appName);
console.log(add(2, 3));
console.log(subtract(10, 4));
```

This covers the important pattern:

```javascript
export const exp = "some value";
```

and:

```javascript
import { exp } from "./file.js";
```

## 4. Rename Import

```javascript
import { appName as name } from "./math.js";

console.log(name);
```

## 5. Export After Declaration

```javascript
const API_URL = "https://example.com";

function getApiUrl() {
  return API_URL;
}

export { API_URL, getApiUrl };
```

## 6. Default Export

One default export per file.

`logger.js`:

```javascript
export default function log(message) {
  console.log(`[LOG] ${message}`);
}
```

`main.js`:

```javascript
import log from "./logger.js";

log("Hello");
```

You can choose any name for a default import:

```javascript
import anything from "./logger.js";
```

## 7. Named vs Default Exports

Named export:

```javascript
export const name = "Ravi";
```

Import:

```javascript
import { name } from "./user.js";
```

Default export:

```javascript
export default function greet() {}
```

Import:

```javascript
import greet from "./greet.js";
```

Simple rule:

- Use named exports for most utilities.
- Use default export when the file has one main thing.

## 8. Import Everything

```javascript
import * as math from "./math.js";

console.log(math.add(2, 3));
```

## 9. Module Scope

Variables in one module are not automatically global.

```javascript
// file1.js
const secret = "hidden";

// file2.js cannot use secret unless file1 exports it.
```

This prevents accidental variable conflicts.

## 10. CommonJS

Older Node.js code often uses CommonJS.

Export:

```javascript
module.exports = {
  add,
  subtract
};
```

Import:

```javascript
const { add, subtract } = require("./math");
```

Modern JavaScript often uses ES modules:

```javascript
import { add } from "./math.js";
export { add };
```

## 11. `package.json`

`package.json` describes a JavaScript project.

Create:

```bash
npm init -y
```

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "test": "vitest"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

`"type": "module"` makes Node treat `.js` files as ES modules.

## 12. npm

npm is a package manager.

Install package:

```bash
npm install lodash
```

Install development package:

```bash
npm install -D vitest
```

Run script:

```bash
npm run dev
```

## 13. Dependencies vs Dev Dependencies

Dependencies are needed by the app when it runs:

```bash
npm install axios
```

Dev dependencies are needed only while developing:

```bash
npm install -D vite vitest eslint prettier
```

## 14. External Libraries

A library is reusable code created by others.

Examples:

- `lodash`: utility functions
- `axios`: HTTP requests
- `date-fns`: dates
- `zod`: validation
- `uuid`: IDs
- `vite`: frontend dev server/build tool
- `vitest`: testing

Example with `date-fns`:

```bash
npm install date-fns
```

```javascript
import { format } from "date-fns";

console.log(format(new Date(), "yyyy-MM-dd"));
```

## 15. Vite Project

Create project:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

Basic structure:

```text
my-app/
  index.html
  package.json
  src/
    main.js
    style.css
```

## 16. Git Basics

Git tracks changes in code.

Check version:

```bash
git --version
```

Start repo:

```bash
git init
```

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial commit"
```

View history:

```bash
git log --oneline
```

## 17. GitHub Basic Flow

```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

Daily workflow:

```bash
git status
git add .
git commit -m "Add feature"
git push
```

## 18. `.gitignore`

Do not commit `node_modules`.

`.gitignore`:

```text
node_modules
dist
.env
```

## 19. Environment Variables

`.env`:

```text
VITE_API_URL=https://api.example.com
```

In Vite:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

Do not put secrets in frontend environment variables. Frontend values can be seen by users.

## 20. Build Step

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## 21. Module Mini Project

Files:

```text
index.html
src/
  main.js
  cart.js
  products.js
```

`products.js`:

```javascript
export const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mouse", price: 700 }
];
```

`cart.js`:

```javascript
export const cart = [];

export function addToCart(productId) {
  const item = cart.find(cartItem => cartItem.productId === productId);

  if (item) {
    item.qty++;
  } else {
    cart.push({ productId, qty: 1 });
  }
}

export function getCartQuantity() {
  return cart.reduce((total, item) => total + item.qty, 0);
}
```

`main.js`:

```javascript
import { products } from "./products.js";
import { addToCart, getCartQuantity } from "./cart.js";

addToCart(1);
addToCart(1);
addToCart(2);

console.log(products);
console.log(getCartQuantity());
```

