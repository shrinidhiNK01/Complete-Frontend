# 01. JavaScript Basics, Numbers, Math, and Strings

## 1. JavaScript Basics

JavaScript is a language that runs commands from top to bottom.

Example:

```javascript
console.log("Hello");
console.log("I am learning JavaScript");
```

Output:

```text
Hello
I am learning JavaScript
```

`console.log()` prints something to the console. It is mainly used for learning and debugging.

## 2. Statements

A statement is one instruction.

```javascript
console.log("One statement");
```

Semicolons are optional in many cases, but using them is a clean habit:

```javascript
console.log("Hello");
console.log("World");
```

## 3. Comments

Comments are notes for humans. JavaScript ignores them.

Single-line comment:

```javascript
// This is a comment
console.log("Hi");
```

Multi-line comment:

```javascript
/*
  This is a longer comment.
  It can use many lines.
*/
```

## 4. Values

A value is a piece of data.

Examples:

```javascript
10
"hello"
true
null
undefined
```

Main data types:

| Type | Meaning | Example |
|---|---|---|
| Number | Numeric value | `10`, `3.14` |
| String | Text | `"hello"` |
| Boolean | true or false | `true` |
| Undefined | missing value | `undefined` |
| Null | intentionally empty | `null` |
| Object | collection of data | `{ name: "Ravi" }` |
| Array | ordered list | `[1, 2, 3]` |
| BigInt | very large integer | `123n` |
| Symbol | unique identifier | `Symbol("id")` |

Check type:

```javascript
console.log(typeof 10);        // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object, this is an old JS behavior
```

## 5. Numbers

JavaScript has one main number type for integers and decimals.

```javascript
console.log(10);
console.log(3.14);
console.log(-5);
```

Arithmetic:

```javascript
console.log(2 + 3);  // 5
console.log(5 - 2);  // 3
console.log(4 * 3);  // 12
console.log(10 / 2); // 5
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
```

`%` is remainder:

```javascript
console.log(7 % 2); // 1
console.log(8 % 2); // 0
```

Use `%` to check even or odd:

```javascript
const number = 9;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

## 6. Order of Operations

JavaScript follows math order:

1. Parentheses
2. Exponents
3. Multiplication, division, remainder
4. Addition, subtraction

```javascript
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
```

## 7. Floating Point Problem

Decimals can sometimes be slightly inaccurate:

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```

This happens because computers store decimals in binary.

For money, avoid storing rupees/dollars as decimals. Store smallest units:

```javascript
const priceInPaise = 1099;
const taxInPaise = 198;
const total = priceInPaise + taxInPaise;

console.log(total); // 1297
```

## 8. Math Object

`Math` contains useful math tools.

```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.abs(-10));   // 10
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
```

Random number:

```javascript
console.log(Math.random()); // number from 0 to less than 1
```

Random integer from 1 to 6:

```javascript
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
```

## 9. Number Conversion

Convert string to number:

```javascript
console.log(Number("10")); // 10
console.log(Number("abc")); // NaN
```

`NaN` means Not a Number.

Check `NaN`:

```javascript
console.log(Number.isNaN(Number("abc"))); // true
```

Parse integer:

```javascript
console.log(parseInt("42px", 10)); // 42
```

Parse decimal:

```javascript
console.log(parseFloat("3.14kg")); // 3.14
```

## 10. Strings

A string is text.

```javascript
const name = "Ravi";
const city = 'Delhi';
const message = `Hello`;
```

Use double quotes, single quotes, or backticks. Backticks are useful for template strings.

## 11. String Concatenation

Joining strings:

```javascript
const firstName = "Ravi";
const lastName = "Kumar";

console.log(firstName + " " + lastName);
```

## 12. Template Strings

Template strings use backticks.

```javascript
const name = "Asha";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

This is easier than:

```javascript
console.log("My name is " + name + " and I am " + age + " years old.");
```

## 13. Escape Characters

```javascript
console.log("He said \"Hello\"");
console.log("Line 1\nLine 2");
console.log("C:\\Users\\Name");
```

Common escapes:

| Escape | Meaning |
|---|---|
| `\n` | new line |
| `\t` | tab |
| `\"` | double quote |
| `\'` | single quote |
| `\\` | backslash |

## 14. String Properties and Methods

Length:

```javascript
const text = "JavaScript";
console.log(text.length); // 10
```

Uppercase/lowercase:

```javascript
console.log("hello".toUpperCase()); // HELLO
console.log("HELLO".toLowerCase()); // hello
```

Trim spaces:

```javascript
console.log("  hello  ".trim()); // hello
```

Includes:

```javascript
console.log("JavaScript".includes("Script")); // true
```

Starts and ends:

```javascript
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true
```

Slice:

```javascript
console.log("JavaScript".slice(0, 4)); // Java
```

Replace:

```javascript
console.log("I like Java".replace("Java", "JavaScript"));
```

Split:

```javascript
console.log("red,green,blue".split(","));
```

## 15. String Immutability

Strings cannot be changed directly.

```javascript
let word = "cat";
word[0] = "b";
console.log(word); // cat
```

You create a new string instead:

```javascript
word = "bat";
console.log(word);
```

## 16. Equality Basics

Use strict equality:

```javascript
console.log(5 === 5);   // true
console.log(5 === "5"); // false
```

Avoid loose equality:

```javascript
console.log(5 == "5"); // true, confusing
```

Use:

```javascript
===
!==
```

Most of the time, avoid:

```javascript
==
!=
```

## 17. Mini Exercises

### Exercise 1

Create variables:

```javascript
const price = 499;
const quantity = 3;
const total = price * quantity;
console.log(`Total is ${total}`);
```

### Exercise 2

Convert this string:

```javascript
const userInput = "  javascript is fun  ";
```

Into:

```text
JAVASCRIPT IS FUN
```

Solution:

```javascript
const userInput = "  javascript is fun  ";
console.log(userInput.trim().toUpperCase());
```

### Exercise 3

Generate a random OTP from 100000 to 999999:

```javascript
const otp = Math.floor(Math.random() * 900000) + 100000;
console.log(otp);
```

