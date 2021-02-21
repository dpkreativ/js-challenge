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
*/
// countries.forEach((arr) => console.log(arr));

/*4
Use forEach to console.log each name in the names array.

=== Solution ===
 */
// names.forEach((arr) => console.log(arr));

/*5
Use forEach to console.log each number in the numbers array.

=== Solution ===
*/
// numbers.forEach((arr) => console.log(arr));

/*6
Use map to create a new array by changing each country to uppercase in the countries array.

=== Solution ===
*/
const countriesUppercase = countries.map((arr) => arr.toUpperCase());
// console.log(countriesUppercase);

/*7
Use map to create an array of countries length from countries array.

=== Solution ===
*/
const countriesLength = countries.map((arr) => arr.length);
// console.log(countriesLength);

/*8
Use map to create a new array by changing each number to square in the numbers array

=== Solution ===
*/
const squaredNumbers = numbers.map((arr) => arr ** 2);
// console.log(squaredNumbers);

/*9
Use map to change to each name to uppercase in the names array

=== Solution ===
*/
const namesUppercase = names.map((arr) => arr.toUpperCase());
// console.log(namesUppercase);

/*10
Use map to map the products array to its corresponding prices.

=== Solution ===
*/
const productPrices = products.map((arr) => {
  if (typeof arr.price !== "number") {
    arr.price = 0;
  }
  return `${arr.product} costs $${arr.price}.`;
});
// console.log(productPrices);

/*11
Use filter to filter out countries containing land.

=== Solution ===
*/
const countriesContainingLand = countries.filter((arr) => {
  if (arr.includes(`land`) || arr.includes(`Land`)) {
    return arr;
  }
});
// console.log(countriesContainingLand);

/*12
Use filter to filter out countries having six characters.

=== Solution ===
*/
const countriesWithSixCharacters = countries.filter((arr) => arr.length == 6);
// console.log(countriesWithSixCharacters);

/*13
Use filter to filter out countries containing six letters and more in the country array.

=== Solution ===
*/
const countriesWithMoreThanSixCharacters = countries.filter(
  (arr) => arr.length >= 6
);
// console.log(countriesWithMoreThanSixCharacters);

/*14
Use filter to filter out country start with 'F'

=== Solution ===
*/
const startWithF = countries.filter((arr) => arr[0] == `F`);
// console.log(startWithF);

/*15
Use filter to filter out only prices with values.

=== Solution ===
*/ const pricesWithValues = products.filter(
  (arr) => {
    if (typeof arr.price == "number") {
      return arr.price;
    }
  }
);
// console.log(pricesWithValues);

/*16
Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

=== Solution ===
*/
const getStringLists = (arr) => {
  const stringLists = arr.filter((element) => {
    if (typeof element == "string") {
      return element;
    }
  });
  return stringLists;
};
// console.log(getStringLists(["Eggs", 1, true, "Salt", "Music", 3, null]));

/*17
Use reduce to sum all the numbers in the numbers array.

=== Solution ===
*/
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sumOfNumbers);

/*18
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

=== Solution ===
*/ const northEuropeanCountries = countries.reduce(
  (acc, cur, index, arr) => {}
);
// console.log(northEuropeanCountries);

/*19
Explain the difference between some and every

=== Solution ===
*/

/*20
Use some to check if some names' length greater than seven in names array

=== Solution ===
*/

/*21
Use every to check if all the countries contain the word land

=== Solution ===
*/

/*22
Explain the difference between find and findIndex.

=== Solution ===
*/

/*23
Use find to find the first country containing only six letters in the countries array

=== Solution ===
*/

/*24
Use findIndex to find the position of the first country containing only six letters in the countries array

=== Solution ===
*/

/*25
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

=== Solution ===
*/

/*26
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

=== Solution ===
*/
