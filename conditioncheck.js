var r = require("readline-sync");
num1 = r.question("Enter 2 Numbers");
num2 = r.question();

if (num1 > num2) {
  console.log("Larger number is :", num1);
} else if (num1 === num2) {
  //strict equality operator (===)
  console.log("Numbers are equal");
} else {
  console.log("Larger number is :", num2);
}
