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

/*3
Iterate 0 to n using for loop

=== Solution ===
*/ const loopToRandomNumberFromZero = (
  n
) => {
  let newArr = [];
  if (n > 0) {
    for (i = 0; i < n; i++) {
      console.log(newArr.push[i]);
    }
  } else if (n < 0) {
    for (i = 0; i > n; i--) {
      console.log(newArr.push[i]);
    }
  } else {
    console.log(newArr);
  }
};

/*4
Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

=== Solution ===
*/ let hashtag =
  "";
for (i = 0; i < 7; i++) {
  hashtag = hashtag + "#";
  console.log(hashtag);
}

/*5
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

=== Solution ===
*/ let multiplicationTable =
  "";
for (i = 0; i <= 10; i++) {
  multiplicationTable = `${i} * ${i} = ${i * i}`;
  console.log(multiplicationTable);
}
