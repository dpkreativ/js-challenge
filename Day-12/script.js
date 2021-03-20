// JavaScript Practice from Rithm School... Might replace Asabeneh's tutorials or work together with it

// ========= { VARIABLES AND PRIMITIVES } =========
/*1
Create the following variables
- name, which is a string set to your current name
- dayOfBirth, which is a number set to the day of your birth month

=== Solution ===
*/
const name = "Divine Philip";
const dayOfBirth = "10";

/*2
See what happens when you have multiple variables of the same name. Which one takes precedence?

=== Solution ===
The final one
*/

/*3
Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

=== Solution ===
*/
// let favColor = prompt("enter your favorite color:");
// console.log(favColor);

/*4
Create a string that contains both single quotes and double quotes.

=== Solution ===
*/
const randomString = "'Hello Leah', he said";
// console.log(randomString);

/*5
What is the difference between null and undefined?

=== Solution ===
null signifies the intentional absence of data while undefined is a variable  that has been declared but without value yet.
*/

/*6
What is NaN in JavaScript? What is the typeof NaN?

=== Solution ===
NaN means that a value is not a number and cannot be converted to a number... the typeof NaN is number
*/
// console.log(parseInt("bread"));

/*7
You can declare a variable by typing let thing;. What is the value of thing?

=== Solution ===
The value of thing is "undefined"
*/

// ========= { BOOLEAN LOGIC } =========
/* === Part I ===
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

1. 2 == "2"; (true)
2. 2 === 2; (true)
3. 10 % 3; (1)
4. 10 % 3 === 1; (true)
5. true && false; (false)
6. false || true; (true)
7. true || false; (true)

/* === Part II ===
Answer the following questions about this code block:

let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

1. What should the above code console.log? ("Keep it up")

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own? (because since it has already been assigned a boolean value, the if statement will always check if the the variable is true, and then execute else if it is false.)

let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
1. What should the above code console.log? Why? (it will console.log "Third", because the first variable returns undefined which is a falsy value, the second variable is an empty string which is also a falsy value, the third value is a true value and since the if-else statement says firstvariable || thirdvariable, it means it's true and so it will run.)
2. What is the value of firstvariable when it is initialized? (undefined)
3. Is the value of firstvariable a "truthy" value? Why? (no it is not, because it is undefined)
4. Is the value of secondvariable a "truthy" value? Why? (no it is not, because it is an empty string)
5. Is the value of thirdvariable a "truthy" value? Why? (yes it is. because it is defined as a number that is not 0)

/* === Part III ===
1. Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
=== Solution ===
let randomNumber = Math.random();
if (randomNumber > 0.5) {
  console.log("Over O.5");
} else if (randomNumber < 0.5) {
  console.log("Under 0.5");
} else {
  console.log("exactly 0.5")
}

2. What is a falsey value? List all the falsey values in JavaScript. (a falsey value is a value in JavaScript that will always return a boolean of false. They  are null, undefined, "", 0, NaN, false)
*/
