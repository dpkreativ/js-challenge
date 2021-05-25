// Exercise 1
/*1
Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

=== Solution ===
*/
// const firstParagraph = document.querySelector("p");
// console.log(firstParagraph);

/*2
Get get each of the the paragraph using document.querySelector('#id') and by their id

=== Solution ===
*/
// const firstParagraph = document.querySelector("#p1");
// const secondParagraph = document.querySelector("#p2");
// const thirdParagraph = document.querySelector("#p3");
// const fourthParagraph = document.querySelector("#p4");

// console.log(firstParagraph);
// console.log(secondParagraph);
// console.log(thirdParagraph);
// console.log(fourthParagraph);

/*3
Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

=== Solution ===
*/
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

/*4
Loop through the nodeList and get the text content of each paragraph

=== Solution ===
*/
const pText = allParagraphs.forEach((arr) => (arr.textContent = "a paragraph"));

/*5
Set a text content to paragraph the fourth paragraph,Fourth Paragraph

=== Solution ===
*/

/*6
Set id and class attribute for all the paragraphs using different attribute setting methods

=== Solution ===
*/
