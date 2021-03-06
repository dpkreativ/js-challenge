// Exercise 1
/*1
Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

=== Solution ===
*/
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const salaryArray = text.match(/\d+/g);
const totalSalary = salaryArray.reduce(
  (curr, acc) => Number(curr) + Number(acc)
);
// console.log(totalSalary);

/*2
The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/
const points = ["-12", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = points.map((arr) => Number(arr)).sort((a, b) => a - b);
const distance =
  Math.abs(sortedPoints[0]) + sortedPoints[sortedPoints.length - 1];
console.log(distance);

/*3
Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/
