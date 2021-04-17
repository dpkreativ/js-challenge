// Exercise 1
/*1
Create a closure which has one inner function

=== Solution ===
*/
const createFamily = () => {
  const firstName = "Drake";

  const appendFamilyName = () => {
    return firstName + " Aubrey Graham";
  };
  return appendFamilyName();
};

console.log(createFamily());

// Exercise 2
/*1
Create a closure with three inner functions

=== Solution ===
*/
const newFamily = () => {
  const firstName = "Josh";

  const appendFamilyName = () => {
    return firstName + " Burns";
  };

  const turnToArray = () => {
    return appendFamilyName().split(" ");
  };

  const removeFirstName = () => {
    return turnToArray().pop();
  };

  return removeFirstName();
};

console.log(newFamily());
