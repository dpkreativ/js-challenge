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

1. 2 == "2";
2. 2 === 2;
3. 10 % 3;
4. 10 % 3 === 1;
5. true && false;
6. false || true;
7. true || false;

/* === Part II ===
Answer the following questions about this code block:

let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}

1. What should the above code console.log?

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

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
1. What should the above code console.log? Why?
2. What is the value of firstvariable when it is initialized?
3. Is the value of firstvariable a "truthy" value? Why?
4. Is the value of secondvariable a "truthy" value? Why?
5. Is the value of thirdvariable a "truthy" value? Why?

/* === Part III ===
1. Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".

2. What is a falsey value? List all the falsey values in JavaScript.
*/
