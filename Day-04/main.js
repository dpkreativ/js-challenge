// === Exercise 1 ===
/*1
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.

=== Solution ===
*/ function drivingAge() {
  let age = prompt("Enter your age:");

  if (age >= 18) {
    alert("You are old enough to drive.");
  } else {
    alert(`Wait for ${18 - age} more years before you start driving.`);
  }
}
// drivingAge();

/*2
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/ function compareAge() {
  let myAge = 25;
  let yourAge = prompt("Enter your age in numbers:");

  if (myAge > yourAge) {
    alert(`I am ${myAge - yourAge} years older than you.`);
  } else if (myAge < yourAge) {
    alert(`You are ${yourAge - myAge} years older than me`);
  } else {
    alert("We are age mates");
  }
}
// compareAge();

/*3
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/ function compareStuff() {
  let a = prompt("Enter number for a:");
  let b = prompt("Enter number for b:");

  // if (a > b) {
  //   alert(`${a} is greater than ${b}`);
  // } else {
  //   alert(`${a} is less than ${b}`);
  // }

  a > b ? alert(`${a} is greater than ${b}`) : alert(`${a} is less than ${b}`);
}
// compareStuff();

/*4
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/ function checkOddOrEven() {
  let number = prompt("Enter a number:");

  if (number % 2 == 0) {
    alert(`${number} is an even number.`);
  } else {
    alert(`${number} is an odd number.`);
  }
}
checkOddOrEven();
