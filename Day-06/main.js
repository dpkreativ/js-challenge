// === Exercise 1 ===
/*1
Iterate 0 to 10 using for loop, do the same using while and do while loop

=== Solution ===
*/
// using for loop
const forArray = [];
for (i = 0; i <= 10; i++) {
  forArray.push(i);
}
console.log(forArray);

// using while loop
const whileArray = [];
i = 0;
while (i <= 10) {
  whileArray.push(i);
  i++;
}
console.log(whileArray);

// using do while loop
const doWhileArray = [];
i = 0;
do {
  doWhileArray.push(i);
  i++;
} while (i <= 10);
console.log(doWhileArray);
