const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "MongoDB",
            "Express",
            "Python",
            "Kubernetes",
            "Django",
            "Google Cloud",
            "AWS",
            "Perl",
            "PHP"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// Exercise 1
/*1
Change skills array to JSON using JSON.stringify()

=== Solution ===
*/
const skillsJSON = JSON.stringify(skills);
// console.log(skillsJSON);

/*2
Stringify the age variable

=== Solution ===
*/
const ageJSON = JSON.stringify(age);
// console.log(ageJSON);

/*3
Stringify the isMarried variable

=== Solution ===
*/
const isMarriedJSON = JSON.stringify(isMarried);
// console.log(isMarriedJSON);

/*4
Stringify the student object

=== Solution ===
*/
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

// Exercise 2
/*1
Stringify the students object with only firstName, lastName and skills properties

=== Solution ===
*/
const newStudentJSON = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  4
);
// console.log(newStudentJSON);

// Exercise 3
/*1
Parse the txt JSON to object.

=== Solution ===
*/
const txtObj = JSON.parse(txt);
// console.log(txtObj);

/*2
Find the the user who has many skills from the variable stored in txt.

=== Solution ===
*/
const displayUserWithMostSkills = () => {
  const newTxtObj = JSON.parse(txt, (key, value) => {
    let skillsToNumber = key == "skills" ? value.length : value;
    return skillsToNumber;
  });

  const objArray = Object.entries(newTxtObj);

  const getSkills = objArray.map((arr) => arr[1].skills);

  const maxSkillIndex = getSkills.indexOf(Math.max(...getSkills));

  const findUser = objArray[maxSkillIndex][0];

  return findUser;
};
console.log(displayUserWithMostSkills());
