// === Exercise 1 ===
/*1
Create an empty object called dog

=== Solution ===
*/ const dog = {};

/*2
Print the the dog object on the console

=== Solution ===
*/ console.log(dog);

/*3
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

=== Solution ===
*/ dog.name =
  "Bingo";
dog.legs = "4";
dog.color = "brown";
dog.age = 4;
dog.bark = function () {
  return "woof woof";
};

/*4
Get name, legs, color, age and bark value from the dog object

=== Solution ===
*/ console.log(
  `${dog.name} is a dog. He has ${dog.legs} legs. It's body color is ${
    dog.color
  }. He is ${dog.age} years old. When he sees a squirrel, he goes ${dog.bark()}`
);
