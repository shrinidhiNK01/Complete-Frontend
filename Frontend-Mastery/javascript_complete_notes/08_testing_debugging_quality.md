# 08. Testing, Debugging, and Code Quality

## 1. Why Testing?

Testing checks that your code works.

Without tests:

- You manually click everything again and again.
- Bugs return after changes.
- Refactoring feels risky.

With tests:

- You can change code with more confidence.
- Bugs are caught early.
- Important logic is documented.

## 2. Types of Testing

Unit test:

Tests one small function.

Integration test:

Tests multiple parts working together.

End-to-end test:

Tests the full app like a real user.

Manual test:

You test by using the app yourself.

## 3. Write Testable Code

Hard to test:

```javascript
function calculateTotal() {
  const price = Number(document.querySelector("#price").value);
  const qty = Number(document.querySelector("#qty").value);
  document.querySelector("#total").textContent = price * qty;
}
```

Easier to test:

```javascript
export function calculateTotal(price, qty) {
  return price * qty;
}
```

Then DOM code can call it:

```javascript
import { calculateTotal } from "./cart.js";

const total = calculateTotal(100, 3);
```

## 4. Manual Testing Checklist

For each feature, test:

- Normal input.
- Empty input.
- Wrong input.
- Very large input.
- Repeated clicks.
- Refresh page.
- Mobile screen.
- Slow internet if API is used.
- Error messages.

## 5. Debugging with `console.log`

```javascript
console.log("value:", value);
console.table(users);
console.warn("This may be wrong");
console.error("Something failed");
```

Use labels:

```javascript
console.log("cart before update", cart);
```

## 6. Debugger

```javascript
function add(a, b) {
  debugger;
  return a + b;
}

add(2, 3);
```

When DevTools is open, code pauses at `debugger`.

## 7. Common Error Messages

`ReferenceError`:

```javascript
console.log(name); // name is not defined
```

`TypeError`:

```javascript
const user = null;
console.log(user.name); // Cannot read properties of null
```

`SyntaxError`:

```javascript
if (true {
  console.log("bad syntax");
}
```

## 8. Unit Test Example

`cart.js`:

```javascript
export function calculateCartTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
}
```

`cart.test.js`:

```javascript
import { describe, expect, test } from "vitest";
import { calculateCartTotal } from "./cart.js";

describe("calculateCartTotal", () => {
  test("returns total for all items", () => {
    const items = [
      { price: 100, qty: 2 },
      { price: 50, qty: 3 }
    ];

    expect(calculateCartTotal(items)).toBe(350);
  });

  test("returns 0 for empty cart", () => {
    expect(calculateCartTotal([])).toBe(0);
  });
});
```

Install:

```bash
npm install -D vitest
```

`package.json`:

```json
{
  "type": "module",
  "scripts": {
    "test": "vitest"
  }
}
```

Run:

```bash
npm test
```

## 9. Test Matchers

Common matchers:

```javascript
expect(value).toBe(10);
expect(object).toEqual({ name: "Ravi" });
expect(text).toContain("hello");
expect(items).toHaveLength(3);
expect(fn).toThrow();
```

`toBe` checks exact primitive values.

`toEqual` checks object/array shape.

## 10. Testing Errors

```javascript
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}
```

Test:

```javascript
import { expect, test } from "vitest";
import { divide } from "./divide.js";

test("throws when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
```

## 11. Testing Async Code

```javascript
export async function getUserName(fetchUser) {
  const user = await fetchUser();
  return user.name;
}
```

Test:

```javascript
import { expect, test } from "vitest";
import { getUserName } from "./user.js";

test("gets user name", async () => {
  const fakeFetchUser = async () => ({ name: "Asha" });

  await expect(getUserName(fakeFetchUser)).resolves.toBe("Asha");
});
```

## 12. Mocking

Mocking means replacing real behavior with fake behavior during tests.

Example:

```javascript
const fakeApi = {
  getTodos: async () => [
    { id: 1, title: "Learn testing" }
  ]
};
```

Why mock?

- Avoid real network calls.
- Make tests fast.
- Make tests predictable.

## 13. Code Quality

Good code:

- Has clear names.
- Does one thing per function.
- Avoids duplication.
- Handles errors.
- Is easy to test.
- Is formatted consistently.

Bad:

```javascript
function x(a, b, c) {
  return a * b + c;
}
```

Better:

```javascript
function calculateFinalPrice(price, quantity, deliveryFee) {
  return price * quantity + deliveryFee;
}
```

## 14. ESLint and Prettier

ESLint finds code problems.

Prettier formats code.

Install:

```bash
npm install -D eslint prettier
```

Format idea:

```bash
npx prettier . --write
```

## 15. Defensive Programming

Check inputs:

```javascript
function createUser(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Name is required");
  }

  return {
    id: crypto.randomUUID(),
    name: name.trim()
  };
}
```

## 16. Mini Testing Practice

Function:

```javascript
export function applyDiscount(price, percentage) {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

  if (percentage < 0 || percentage > 100) {
    throw new Error("Invalid discount percentage");
  }

  return price - price * (percentage / 100);
}
```

Tests:

```javascript
import { expect, test } from "vitest";
import { applyDiscount } from "./discount.js";

test("applies discount", () => {
  expect(applyDiscount(1000, 10)).toBe(900);
});

test("rejects negative price", () => {
  expect(() => applyDiscount(-1, 10)).toThrow();
});

test("rejects invalid percentage", () => {
  expect(() => applyDiscount(1000, 150)).toThrow();
});
```

