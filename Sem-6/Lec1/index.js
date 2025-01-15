const {add, sub} = require('./mathFeatures.js').default;//using same variables for multiple exports

console.log("Hello World");
console.log(add(40, 60));
console.log(sub(40, 60));