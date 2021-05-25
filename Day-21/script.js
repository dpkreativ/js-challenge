/*
Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.
*/

// const anagram = (s) => {
//   let ascii = /^[ -~]+$/;
//   if (
//     s.length % 2 !== 0 ||
//     typeof s !== "string" ||
//     s > 10 * Math.pow(4) ||
//     !ascii.test(s) === true
//   ) {
//     return -1;
//   }
//   let sToArray = s.split("");
//   let firstHalf = sToArray.slice(0, sToArray.length / 2).sort();
//   let secondHalf = sToArray.slice(sToArray.length / 2, sToArray.length).sort();
//   let count = [],
//     i;
//   for (i = 0; i <= firstHalf.length; i++) {
//     if (firstHalf[i] !== secondHalf[i]) {
//       count.push(firstHalf[i]);
//     }
//   }
//   return count.length;
// };

// console.log(anagram("aaabbb")); // 3
// console.log(anagram("ab")); // 1
// console.log(anagram("abc")); // -1
// console.log(anagram("mnop")); // 2
// console.log(anagram("xyyx")); // 0
// console.log(anagram("xaxbbbxx")); // 1
// console.log(anagram("asdfjoieufoa")); // 3
// console.log(anagram("fdhlvosfpafhalll")); // 5
// console.log(anagram("mvdalvkiopaufl")); // 5

const getSecondLargest = (nums) => {
  let sorted = nums.sort((a, b) => a - b),
    i,
    result = [];
  for (i = 0; i <= sorted.length - 1; i++) {
    if (sorted[i + 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }
  return result[result.length - 2];
};

console.log(getSecondLargest([2, 3, 6, 6, 5]));
console.log(getSecondLargest([2, 3, 6, 6, 10]));
