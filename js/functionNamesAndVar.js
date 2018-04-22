
var a = function b (d) { console.log(d) }

function c (d) { console.log(d) }

a('Call by the var name')

//b('Call by the function name when a var name exists, too') // ReferenceError: b is not defined

c('Call by the function name when no var name exists.')  // Works

var test = function t(n) {

  if (n < 0) { t(-n) }
  if (n > 0) { t(n-1) }
  if (n === 0) { console.log("No t!") }
}

test(42)
test(0)


var teatest = function tea(n) {

  if (n < 0) { tea(-n) }
  if (n > 0) { tea(n-1) }
  if (n === 0) { console.log("No t!") }
}

teatest(42)
//tea(0)  // ReferenceError: tea is not defined


var tee = function tt(n) {

  if (n < 0) { tee(-n) }
  if (n > 0) { tee(n-1) }
  if (n === 0) { console.log("No t!") }
}

tee(42)
//tt(0)  //ReferenceError: tt is not defined
