// === Exercise 01 ===
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

/*1
Declare an empty array

=== Solution ===
*/ const emptyArray = [];

/*2
Declare an array with more than 5 number of elements

=== Solution ===
*/ const overFiveElements = [
  "egg",
  "milk",
  "butter",
  "oil",
  "cream",
  "sugar",
  "flour",
  "baking powder",
  "nutmeg",
];

/*3
Find the length of your array

=== Solution ===
*/ console.log(
  overFiveElements.length
);

/*4
Get the first item, the middle item, and the last item of the array

=== Solution ===
*/ let firstArrayItem =
  overFiveElements[0];
let middleArrayItem = overFiveElements[Math.floor(overFiveElements.length / 2)];
let lastArrayItem = overFiveElements[overFiveElements.length - 1];
console.log(
  `first item: ${firstArrayItem}; middle item: ${middleArrayItem}; last item: ${lastArrayItem};`
);

/*5
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

=== Solution ===
*/ const mixedDataTypes = [
  "Divine",
  23,
  "Nigeria",
  true,
  null,
  undefined,
  false,
  1997,
  "September",
];
console.log(mixedDataTypes.length);

/*6
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

=== Solution ===
*/ const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "PayStack",
];

/*7
Print the array using console.log()

=== Solution ===
*/ console.log(
  itCompanies
);

/*8
Print the number of companies in the array

=== Solution ===
*/ console.log(
  itCompanies.length
);

/*9
Print the first company, middle and last company

=== Solution ===
*/ firstArrayItem =
  itCompanies[0];
middleArrayItem = itCompanies[Math.floor(itCompanies.length / 2)];
lastArrayItem = itCompanies[itCompanies.length - 1];
console.log(
  `first company: ${firstArrayItem}; middle company: ${middleArrayItem}; last company: ${lastArrayItem};`
);

/*10
Print out each company

=== Solution ===
*/ function printEachCompany() {
  for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
  }
}
// printEachCompany();

/*11
Change each company name to uppercase one by one and print them out

=== Solution ===
*/ function printEachCompanyInUppercase() {
  for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
  }
}
// printEachCompanyInUppercase();

/*12
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

=== Solution ===
*/ function printArrayAsSentence() {
  let firstHalfOfArray = itCompanies.slice(0, itCompanies.length - 1);
  let secondHalfOfArray = itCompanies[itCompanies.length - 1];
  let firstHalfOfSentence = firstHalfOfArray.join(", ");
  let secondHalfOfSentence = `and ${secondHalfOfArray} are big IT companies`;

  console.log(`${firstHalfOfSentence} ${secondHalfOfSentence}.`);
}
printArrayAsSentence();

/*13
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

=== Solution ===
*/ function checkCompany(
  companyName
) {
  if (itCompanies.includes(companyName)) {
    return companyName;
  } else {
    return "company is not found";
  }
}

console.log(checkCompany("Facebook"));
console.log(checkCompany("PiggyVest"));

/*14
Filter out companies which have more than one 'o' without the filter method

=== Solution ===
*/ function filterCompaniesWithMoreThanOneO() {
  let companiesWithMoreThanOneO = [];

  for (i = 0; i < itCompanies.length; i++) {
    let rearrange = itCompanies[i].split("").sort().join("");
    if (rearrange.match(/o{2,}/)) {
      companiesWithMoreThanOneO.push(itCompanies[i]);
    }
  }

  console.log(companiesWithMoreThanOneO);
}

filterCompaniesWithMoreThanOneO();

/*15
Sort the array using sort() method

=== Solution ===
*/ let sortCompanies = itCompanies.sort();
console.log(sortCompanies);

/*16
Reverse the array using reverse() method

=== Solution ===
*/ let reverseSortCompanies = sortCompanies.reverse();
console.log(reverseSortCompanies);

/*17
Slice out the first 3 companies from the array

=== Solution ===
*/ let firstThreeCompanies = itCompanies.slice(
  0,
  3
);
console.log(firstThreeCompanies);

/*18
Slice out the last 3 companies from the array

=== Soluion ===
*/ let lastThreeCompanies = itCompanies.slice(
  itCompanies.length - 3,
  itCompanies.length
);
console.log(lastThreeCompanies);

/*19
Slice out the middle IT company or companies from the array

=== Solution ===
*/ let middleCompany = () => {
  if (itCompanies.length % 2 == 0) {
    return itCompanies.slice(
      itCompanies.length / 2 - 1,
      itCompanies.length / 2 + 1
    );
  } else {
    return itCompanies.slice(
      Math.floor(itCompanies.length / 2),
      Math.ceil(itCompanies.length / 2)
    );
  }
};
console.log(middleCompany());

/*20
Remove the first IT company from the array

=== Solution ===
*/ let removeFirstCompany = () => {
  itCompanies.shift();
  return itCompanies;
};
console.log(removeFirstCompany());

/*21
Remove the middle IT company or companies from the array

=== Solution ===
*/ let removeMiddleCompany = () => {
  if (itCompanies.length % 2 == 0) {
    itCompanies.splice(itCompanies.length / 2 - 1, 2);
  } else {
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
  }
  return itCompanies;
};
console.log(removeMiddleCompany());

/*22
Remove the last IT company from the array

=== Solution ===
*/ let removeLastCompany = () => {
  itCompanies.pop();
  return itCompanies;
};
console.log(removeLastCompany());

/*23
Remove all IT companies

=== Solution ===
*/ let removeAllCompanies = () => {
  return itCompanies.splice();
  // return itCompanies;
};
console.log(removeAllCompanies());

// === Exercise 2 ===
