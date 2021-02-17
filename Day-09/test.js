// const numbers = [1, 2, 3, 4, 5];

// const sumArray = (arr) => {
//   sum = 0;
//   const callBackFn = function (element) {
//     sum += element;
//   };
//   arr.forEach(callBackFn);
//   return sum;
// };
// console.log(sumArray(numbers));

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((arr) => ((sum += arr), console.log(arr)));

// console.log(sum);

const naijaMusicians = [
  "Olamide",
  "Wizkid",
  "Burna Boy",
  "Niniola",
  "Davido",
  "Mayorkun",
  "Lil Kesh",
  "Cheque",
  "Phyno",
  "Naira Marley",
];

const sortNaijaMusicians = naijaMusicians.sort();
// console.log(sortNaijaMusicians);
// console.log(naijaMusicians);

const randomNumbers = [12, 4.5, 7, 2, 29, 73, 199, 7, 8, 11];
randomNumbers.sort(function (a, b) {
  return a - b;
});
console.log(randomNumbers);
