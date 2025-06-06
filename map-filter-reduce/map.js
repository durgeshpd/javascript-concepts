// JavaScript Notes on Map, Filter, Reduce

// 1. map()
// Purpose: Transforms each element in the array and returns a new array.
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// 2. filter()
// Purpose: Filters elements based on a condition and returns a new array.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 3. reduce()
// Purpose: Reduces the array to a single value (sum, product, etc.).
// Syntax: array.reduce(callback(accumulator, currentValue), initialValue)
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Combined Example
// Find the sum of squares of even numbers
const result = numbers
  .filter(num => num % 2 === 0)   // [2, 4]
  .map(num => num * num)         // [4, 16]
  .reduce((acc, num) => acc + num, 0); // 20

console.log(result); // Output: 20
