"use strict";

// function showFirstMessage(text) {
//     console.log(text);

// }

// showFirstMessage("Hello World");
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  //let num = 10;
  console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(4, 3));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("hello");
};
logger();

//const calc = (a, b) => a + b;
const calc =(a,b) => {
    console.log('1');
    return a+b;
};