// Exercise 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
/*1
create an empty set

=== Solution ===
*/
const firstSet = new Set();

/*2
Create a set containing 0 to 10 using loop

=== Solution ===
*/
const numberSet = new Set();
for (i = 0; i <= 10; i++) {
  numberSet.add(i);
}
// console.log(numberSet);

/*3
Remove an element from a set

=== Solution ===
*/
const deleteNumber4 = numberSet.delete(4);
// console.log(deleteNumber4);

/*4
Clear a set
*/
const clearSet = numberSet.clear();
// console.log(numberSet);

/*5
Create a set of 5 string elements from array
*/

/*6
Create a map of countries and number of characters of a country
*/