// Exercise 1
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
/*1
Explain the difference between forEach, map, filter, and reduce.

=== Solution ===

forEach is used to iterate through an array and perform specific actions for each element.

map is used to iterate through an array, and run the code for each element, and return the result in a new array that has already been created.

filter is used to filter through an array and return elements based on a set condition.

reduce is used in its basic form to loop through the elements of an array and compress them together either by adding or subtracting... based on the code written. It takes in at least two arguments, one for the first index in the array, and another for the last index in the array.
*/

/*2
Define a call function before you them in forEach, map, filter or reduce.

=== Solution ===
I don't understand the question... will ask Asabeneh
*/

/*3
Use forEach to console.log each country in the countries array.

=== Solution ===
*/ countries.forEach(
  (arr) => console.log(arr)
);
