// Arguments keyword
// its a array like structure that keeps record of all values of parameters passed eg a, b below
// function add(a, b) {
//     console.log(arguments)
//   return a + b
// }

function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
     return sum
}

// const add = function() {
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i]
//     }
//      return sum
// }

// arguments keyword does not work with arrow functions but it does work with anonymous functions
// for arrow functions rest parameter is used, which we'll look into in future
