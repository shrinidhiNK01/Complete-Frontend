// ==========================
// VARIABLES
// ==========================

// let => variable that can be reassigned (Better)
// const => variable that cannot be reassigned (Best)
// var => variable that can be reassigned and has function scope (not recommended)

let myVariable; // Camel case
myVariable = 10;

console.log(typeof myVariable);
// alert("Hello World")

var myVariable2 = "Hello World";
console.log(myVariable2);

let myVariable3 = true;
console.log(myVariable3);

const myVariable4 = 3.14;
console.log(myVariable4);

// ==========================
// OBJECTS
// ==========================

// Objects => key-value pairs (Non-primitive)
const myObject = {
    name: "John",
    age: 30,
    isStudent: false,
    Shrinidhi: "Developer"
};

console.log(myObject.name);        // Dot notation
console.log(myObject["age"]);      // Bracket notation

// ==========================
// ARRAYS
// ==========================

const myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]); // First element

myArray.push(6); // Add
console.log(myArray);

myArray.pop(); // Remove last
console.log(myArray);

// ==========================
// FUNCTIONS
// ==========================

function myFunction(a, b) {
    return a + b;
}

console.log(myFunction(5, 10));

// Arrow function
const myArrowFunction = (a, b) => {
    return a * b;
};

console.log(myArrowFunction(5, 10));

// ==========================
// DATA TYPES
// ==========================

// Primitive: string, number, boolean, null, undefined, symbol
// Non-primitive: object, array, function

// ==========================
// TYPE COERCION
// ==========================

let x1 = "5";
let y1 = 10;

console.log(x1 + y1); // "510"
console.log(x1 * y1); // 50

// ==========================
// EQUALITY
// ==========================

console.log(5 == "5");   // true
console.log(5 === "5");  // false

// ==========================
// CONTROL STRUCTURES
// ==========================

let ageCheck = 18;

if (ageCheck >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// ==========================
// LOOPS
// ==========================

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// ==========================
// SCOPE
// ==========================

function myScopeFunction() {
    let localVariable = "I am local";
    console.log(localVariable);
}
myScopeFunction();

// Block scope
if (true) {
    let blockVariable = "I am block scoped";
    console.log(blockVariable);
}

// ==========================
// HOISTING
// ==========================

console.log(hoistedVariable); // undefined
var hoistedVariable = "I am hoisted";
console.log(hoistedVariable);

// let/const NOT hoisted
let notHoistedVariable = "I am not hoisted";
console.log(notHoistedVariable);

// ==========================
// DICTIONARY (OBJECT)
// ==========================

const myDictionary = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(myDictionary["name"]);

// ==========================
// CONSOLE METHODS
// ==========================

console.log("Hello world");
console.error("Hello world");
console.warn("Hello world");
console.info("Hello world");

// ==========================
// USER INPUT (COMMENTED)
// ==========================

// alert("Welcome to JavaScript")
// var a = prompt("Enter Your name:")
// console.log("Hello " + a)

// ==========================
// CONDITIONAL EXAMPLE
// ==========================

var d = 30;
var b = 308;

console.log("Your age is " + b);

if (d) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// ==========================
// VARIABLE BEHAVIOR
// ==========================

// var redeclaration
var x2 = 5;
var x2 = 10;
console.log(x2);

// let scope
let y2 = 5;
{
    let y2 = 10;
    console.log(y2);
}

// const
const z = 5;
console.log(z);

// ==========================
// OBJECT EXAMPLE (MOVIE)
// ==========================

let Movie = {
    Movie_Name: "KGF",
    Actor: "Yash",
    Actress: "Srinidhi Shetty",
    Director: "Prashanth Neel",
    Release_Year: 2018
};

console.log(Movie);

Movie.Genre = "Action";

// ==========================
// OBJECT ITERATION
// ==========================

for (let key in Movie) {
    console.log(key + ": " + Movie[key]);
}

for (let key of Object.keys(Movie)) {
    console.log(`${key}: ${Movie[key]}`);
}

for (let [key, value] of Object.entries(Movie)) {
    console.log(`${key}: ${value}`);
}

// ==========================
// FUNCTION EXAMPLE
// ==========================

function movie(actor, actress, director, villain, side_chick) {
    console.log(`My Movie ${actor} and heroine ${actress} but ${actor} killed by ${villain}, this is directed by ${director} because ${actress} is sidechick of ${director}`);
}

movie("Yash", "Srinidhi Shetty", "Prashanth Neel", "Vijay Sethupathi", "Raveena Tandon");

// ==========================
// ARROW FUNCTION
// ==========================

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10));

// ==========================
// STRINGS
// ==========================

let str = "Hello World";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.slice(0, 5));
console.log(str.split(" "));
console.log(str.replace("el", "99"));
console.log(str.concat(str, "Aishwarya", "rahul"));
console.log(str.trim());
console.log(str.charAt(0));
console.log(str.startsWith("he"));
console.log(str.endsWith("ld"));

// ==========================
// DOM (COMMENTED)
// ==========================

/*
console.log(document)
console.log(document.title)
console.log(document.body)
*/

// ==========================
// MATH
// ==========================

console.log(Math.round(20.09876));
console.log(Math.max(5, 10, 15));
console.log(Math.min(5, 10, 15));
console.log(Math.random());
console.log(Math.floor(Math.random() * 100));

// ==========================
// CONCATENATION
// ==========================

console.log("Shri" + "Nidhi");

console.log(typeof "Hello");
console.log("Hello" + 3);
console.log("Hello" * 3); // NaN

// Escape characters => \' , \n , \"

// ==========================
// TEMPLATE LITERALS
// ==========================

let name = "Shrinidhi";
let age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`${1 + 3} is the result of 1+3`);