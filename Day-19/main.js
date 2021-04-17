// Exercise 1
/*Create a closure which has one inner function

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
