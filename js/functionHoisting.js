
// Exploring different combinations of ordering, anonymous, and named
// functions, with respect to hoisting.

console.log(callAdd(38, 4))   // 42 

console.log(callSubtract(89, 47)) // 42, too.
// So, order in which the hoisted functions appear in the file does
// not matter.

//console.log(callMultiply(21, 2))  // TypeError: callMultiply is not a function

//console.log(callMul(21, 2))  // ReferenceError: callMul is not defined

//console.log(callDivide(84, 2))  // TypeError: callDivide is not a function

//console.log(callDiv(84, 2))  // TypeError: callDiv is not a function

// Trying to call via the name of the var'd function
//console.log(callMyDivide(84, 2))  // ReferenceError: callMyDivide is not defined


// Works
function add(a, b) { return a + b }

function callAdd(a, b) { return add(a, b) }

// Works
function callSubtract(a, b) { return subtract(a, b) }

function subtract(a, b) { return a - b } 


// var with anonymous functions; doesn't work
var multiply = function(x, y) { return x * y }

var callMultiply = function(x, y) { return multiply(x, y) }



// let with anonymous functions; doesn't work
let mul = function(x, y) { return x * y }

let callMul = function(x, y) { return mul(x, y) }


// var with same-named functions; doesn't work
var divide = function divide(x, y) { return x/y }

var callDivide = function callDivide(x, y) { return divide(x,y) }

// var with differently-named functions
var div = function mydivide(x, y) { return x/y }

var callDiv = function callMyDivide(x, y) { return mydivide(x,y) }
