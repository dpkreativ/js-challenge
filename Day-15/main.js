// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const person = new Person("Joseph", "Price");
// console.log(person.firstName);

// Exercise 1
/*
Create an Animal class. The class will have name, age, color, legs properties and create different methods

=== Solution ===
*/
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getAnimalInfo() {
    return `${this.name} is ${this.age} years old, ${this.color}, and has ${this.legs} legs.`;
  }
}

/*
Create a Dog and Cat child class from the Animal Class.

=== Solution ===
*/
const dog = new Animal("Bruno", 2, "brown", 4);
console.log(dog.getAnimalInfo());
