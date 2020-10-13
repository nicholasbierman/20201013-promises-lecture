/*
Higher order functions warm-up

Run with: node e0-prepare-and-execute.js

Write a function `createExecutionChain` that will work like this:
*/

const prepareExecutionChain = createExecutionChain();
prepareExecutionChain(n => n + 1);
prepareExecutionChain(n => n * 5);
prepareExecutionChain(n => n / 2);
console.log(prepareExecutionChain(5)); // console.log is 15. 5+1->6*5->30/2->15