// Hoisting in Javascript: being able to use a variable, function or class in its scope before the line it is declared in is initialized or in other words prior to execution of the code
// It appears thr variables are moving up in javascript but that's not actually the case

// Temporal dead zone: the period in JavaScript between the start of a block scope and a variable's declaration, during which the variable is inaccessible. It applies to variables declared with let and const, which are hoisted but not initialized.
// Attempting to access a variable in the TDZ results in a ReferenceError

debugger

console.log(a)

var a = "Jaisal"

hi()

// Function Declaration:
function hi() {
  console.log("Hello")
}

// function can also be created using variable const let var but it cant be accessed before it's declaration
// Function Expression:
const sayHi = function() {  // anonymous function- when no name is given to a function
    console.log("Hi")
}

sayHi()

// Both Function declaration and function expression are type of function definition, function expression is called an expression because it has = sign

// IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION:
// function() {               // anonymous function
//   console.log('Hi')}