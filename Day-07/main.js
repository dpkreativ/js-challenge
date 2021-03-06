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
// console.log(circumOfCircle(6));

/*9
Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

=== Solution ===
*/ const density = (
  mass,
  volume
) => {
  return mass / volume;
};
// console.log(density(60, 12));

/*10
Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

=== Solution ===
*/ const speed = (
  distance,
  time
) => {
  return distance / time;
};
// console.log(speed(500, 30));

/*11
Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

=== Solution ===
*/ const weight = (
  mass,
  gravity
) => {
  return mass * gravity;
};
// console.log(weight(400, 9.8));

/*12
Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

=== Solution ===
*/ const convertCelciusToFahrenheit = (
  oC
) => {
  let oF = oC * (9 / 5) + 32;
  return oF;
};
// console.log(convertCelciusToFahrenheit(100));

/*13
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

=== Solution ===
*/ const calcBMI = (
  weight,
  height
) => {
  let bmi = weight / (height * height);
  bmi = Math.round(bmi * 100) / 100;
  console.log(bmi);
  if (bmi < 18.5) {
    return `Your BMI is ${bmi}. You're underweight. Eat more!`;
  } else if (bmi >= 18.5 && bmi < 25) {
    return `Your BMI is ${bmi}. Your weight is normal. Maintain it!`;
  } else if (bmi >= 25 && bmi < 30) {
    return `Your BMI is ${bmi}. You're overweight. Uh oh! Time to hit the gym.`;
  } else {
    `Your BMI is ${bmi}. You're obese. A gym membership is highly recommended!`;
  }
};
// console.log(calcBMI(76, 1.86));

/*14
Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/ const checkSeason = (
  month
) => {
  let season;
  switch (month) {
    case "December":
    case "January":
    case "February":
      season = `It's Winter! Grab a sweater or two.`;
      break;
    case "March":
    case "April":
    case "May":
      season = `It's Spring! Feel its freshness.`;
      break;
    case "June":
    case "July":
    case "August":
      season = `It's Summer! Hot hot everywhere.`;
      break;
    case "September":
    case "October":
    case "November":
      season = `It's Autumn! Watch the leaves fall.`;

    default:
      break;
  }
  return season;
};
// console.log(checkSeason("August"));

/*15
Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/ const findMax = (
  a,
  b,
  c
) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};
console.log(findMax(0, 10, 5));
