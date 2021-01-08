/* ========= Tasks =========

=========================================================================================================
Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

2. Check if type of '10' is equal to 10

3. Check if parseInt('9.8') is equal to 10

4. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
7. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.

Exercises: Level 2
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate he perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

7. Compare the slope of above two questions.

8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
If the length of your name is greater than 7 say, your name is long else say your name is short.

10. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
11. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
12. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
13. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.
14. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

Exercises: Level 3
15. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

// ========= Solutions =========

// === Exercise 1 ===
/*1*/ let firstName = "Divine",
  lastName = "Philip",
  country = "Nigeria",
  age = 23,
  isMarried = false,
  year = 2021;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/*2*/ let checkType = typeof "10" == typeof 10;
console.log(checkType);

/*3*/ checkType = parseInt("9.8") == 10;
console.log(checkType);

/*4i*/ console.log(10 == Math.ceil(parseFloat("9.8")));
console.log(typeof "Egg" == typeof "fish");
console.log(true);

/*4ii*/ console.log(false);
console.log(10 == Math.ceil(parseInt("9.8")));
console.log("A good boy" == "A good girl");

/*5i*/ console.log(4 > 3);
/*5ii*/ console.log(4 >= 3);
/*5iii*/ console.log(4 < 3);
/*5iv*/ console.log(4 <= 3);
/*5v*/ console.log(4 == 4);
/*5vi*/ console.log(4 === 4);
/*5vii*/ console.log(4 != 4);
/*5viii*/ console.log(4 !== 4);
/*5ix*/ console.log(4 != "4");
/*5x*/ console.log(4 == "4");
/*5xi*/ console.log(4 === "4");
/*5xii*/ console.log("python".length != "jargon".length);

/*6i*/ console.log(4 > 3 && 10 < 12);
/*6ii*/ console.log(4 > 3 && 10 > 12);
/*6iii*/ console.log(4 > 3 || 10 < 12);
/*6iv*/ console.log(4 > 3 || 10 > 12);
/*6v*/ console.log(!(4 > 3));
/*6vi*/ console.log(!(4 < 3));
/*6vii*/ console.log(!false);
/*6viii*/ console.log(!(4 > 3 && 10 < 12));
/*6ix*/ console.log(!(4 > 3 && 10 > 12));
/*6x*/ console.log(!(4 === "4"));
/*6xi*/ console.log(!("python".includes("on") && "jargon".includes("on")));

let calendar = new Date();
/*7i*/ console.log(calendar.getFullYear());
/*7ii*/ console.log(calendar.getMonth());
/*7iii*/ console.log(calendar.getDate());
/*7iv*/ console.log(calendar.getDay());
/*7v*/ console.log(calendar.getHours());
/*7vi*/ console.log(calendar.getMinutes());
/*7vii*/ console.log(calendar.getTime());
