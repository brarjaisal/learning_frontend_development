// Understanding Call Stack in Javascript

// call stack follows last in first out rule

debugger

// sayHi()

// const username = 'Jaisal'
// const userAge = 29

// function sayHi() {
//     const a = 14
//     const b = 12
//     add(7, 9)
// }

// function add(x, y) {
//     something()
//     return x + y
// }

// function something() {
//     console.log('Something');
// }

function introduceMe() {
    console.log("Hi myself Jaisal.")
   // introduceMe() // this causes stack overflow and will give error of maximum call stack exceeded 
} 

introduceMe()

console.log('Program Ended');