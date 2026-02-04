// Scope in javascript

debugger
const username = 'Jaisal'
let userAge = 29
var a = 50
// variable defined outside the function can be accessed inside the function too as well as outside; this is called global scope

function add() {
  const username = 'Jane'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username) // this will use local scope username ie Jane
}
// console.log(username) : Output Jaisal in console
// console.log(x); this will give Reference error 
// because variable defined inside a function cannot be accessed outside that function: this is called local scope

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username) // this will use global scope username ie Jaisal because username is not defined in local scope of function
}

add()
subtract()

console.log('Program Ended')

// Global scope has 2 types: Window object & Script scope
// variables defined using let and const are located in script scope
// variables define with var will be located in window object