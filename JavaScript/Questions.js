// Create an array of numbers and take input from
// The user to add numbers to this array.

array = [];
for (let i = 0; i < 10; i++) {
  array.push(Number.parseInt(prompt("Enter a number to add to the array: ")));
}

// Keep adding numbers to the array until 0 is added to the array

do {
  array.push(Number.parseInt(prompt("Enter a number to add to the array: ")));
} while (array[array.length - 1] != 0);

// Filter the numbers divisible by 5 from the array.

// Create an array of squares of the remaining numbers.

// Use reduce to calculate factorial of a given number from an array of first n natural numbers. In being the ' number where factorial needs to be calculated.
