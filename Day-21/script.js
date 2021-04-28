/*
Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.
*/

const anagram = (s) => {
  if (s.length % 2 !== 0) {
    return -1;
  }
  let sToArray = s.split("");
  let firstHalf = sToArray.slice(0, sToArray.length / 2);
  let secondHalf = sToArray.slice(sToArray.length / 2, sToArray.length);
  let count = [];
  firstHalf.forEach((arr) => (secondHalf.includes(arr) ? "" : count.push(arr)));
  return count.length;
};

console.log(anagram("aaabbb"));
console.log(anagram("ab"));
console.log(anagram("abc"));
console.log(anagram("mnop"));
console.log(anagram("xyyx"));
console.log(anagram("xaxbbbxx"));
