//Arrow Functions

// // Function Declaration
// function square(num) {
//     return num * num
// }

// // Function Expression
// const square = function(num) {
//     return num * num
// }

// Arrow Function Expression
// const square = (num) => {
//     return num * num
// }

const square = num =>  num * num   // another way of arrow function expression, this is implicit return (num * num) without using return keyword

const add = (a, b) => a + b   // for more than 1 argument/parameter () has to be used

const random = () => Math.random() // this has 0 parameter

console.log(add(3, 6))

setTimeout(() => {
   console.log("HI")
}, 3000)
