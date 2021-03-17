//Call Back Hell
function add(num1, num2, callback) {
  let err = false;
  if (num1 === 0) {
    err = true;
  }
  callback(num1 + num2, err);
}
function multiply(num1, num2, callback) {
  callback(num1 * num2);
}
function div(num1, num2, callback) {
  callback(num1 / num2);
}

const { reject, resolve } = require("promise");
// add(10, 20, (sum, err) => {
//   if (err) {
//     console.log("First No. is zero");
//   } else {
//     console.log(sum);
//     multiply(sum, sum, (product) => {
//       console.log(product);
//       div(product,10,(result)=>{
//           console.log(result)
//       })
//     });
//   }
// });

//Resolving Call Back Hell using Promise
const Promise = require("promise");

function add(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("Error");
    }
    resolve(num1 + num2);
  });
}
function multiply(num1, num2) {
  return new Promise((resolve, reject) => {
    resolve(num1 * num2);
  });
}
function div(num1, num2) {
  return new Promise((resolve, reject) => {
    resolve(num1 / num2);
  });
}


//This is Called Chaining
add(20, 10).then((sum) => {
    console.log(sum);
    return multiply(sum, sum);
  }).then((product) => {
    console.log(product);
    return div(product, 10);
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
