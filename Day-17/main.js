// Exercise 1
/*1
Store you first name, last name, age, country, city in your browser localStorage.

=== Solution ===
*/
localStorage.setItem("firstName", "Divine");
localStorage.setItem("lastName", "Philip");
localStorage.setItem("age", 24);
localStorage.setItem("country", "Nigeria");
localStorage.setItem("city", "Abia");

// Exercise 2
/*1
Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

=== Solution ===
*/
const student = {
  firstName: "Woli",
  lastName: "Arole",
  age: 17,
  skills: ["Basketball", "Tennis", "Singing", "Drawing"],
  country: "Ghana",
  enrolled: 2012,
};

const studentJSON = JSON.stringify(student);

const studentStored = localStorage.setItem("student", studentJSON);

console.log(localStorage);
