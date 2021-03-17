const { resolve, reject } = require("promise");
const Promise = require("promise");

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hai");
    }, 3000);
  });
}

function getMobile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("9946173471");
    }, 2000);
  });
}

//To call both functions together
// Promise.all([getName(), getMobile()]).then((result) => {
//   console.log(result);
// });

//Promise has 3 states:
//Pending,Success,Rejected

//Async function .. await keyword makes getname wait
async function getUser() {
  let name = await getName();
  console.log(name);
  let mobile = await getMobile();
  console.log(mobile);
}
getUser();
