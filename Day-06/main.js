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

/*2
Iterate 10 to 0 using for loop, do the same using while and do while loop

=== Solution ===
*/ const reverseForArray = [];
for (i = 10; i >= 0; i--) {
  reverseForArray.push(i);
}
console.log(reverseForArray);

// using while loop
const reverseWhileArray = [];
i = 10;
while (i >= 0) {
  reverseWhileArray.push(i);
  i--;
}
console.log(reverseWhileArray);

// using do while loop
const reverseDoWhileArray = [];
i = 10;
do {
  reverseDoWhileArray.push(i);
  i--;
} while (i >= 0);
console.log(reverseDoWhileArray);
