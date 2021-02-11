// === Exercise 1 ===
/*1
Declare a function fullName and it print out your full name.

=== Solution ===
*/ function fullName() {
  return "Divine Philip";
}
// console.log(fullName());

/*2
Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

=== Solution ===
*/ function newFullName(
  firstName,
  lastName
) {
  return `${firstName} ${lastName}`;
}
// console.log(newFullName("John", "Doe"));

/*3
Declare a function addNumbers and it takes two two parameters and it returns sum.

=== Solution ===
*/ const addNumbers = (
  a,
  b
) => {
  return a + b;
};
// console.log(addNumbers(3, 5));

/*4
An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

=== Solution ===
*/ const areaOfRectangle = (
  l,
  w
) => {
  let area = l * w;
  return area;
};
// console.log(areaOfRectangle(4, 6));

/*5
A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

=== Solution ===
*/ const perimeterOfRectangle = (
  l,
  w
) => {
  let perimeter = 2 * (l + w);
  return perimeter;
};
// console.log(perimeterOfRectangle(6, 3));

/*6
A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

=== Solution ===
*/ const volumeOfRectPrism = (
  l,
  w,
  h
) => {
  let volume = l * w * h;
  return volume;
};
// console.log(volumeOfRectPrism(3, 6, 5));

/*7
Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

=== Solution ===
*/ const areaOfCircle = (
  r
) => {
  let area = Math.floor(Math.PI * r * r);
  return area;
};
// console.log(areaOfCircle(4));

/*8
Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

=== Solution ===
*/ const circumOfCircle = (
  r
) => {
  let circumference = Math.floor(2 * Math.PI * r);
  return circumference;
};
console.log(circumOfCircle(6));
