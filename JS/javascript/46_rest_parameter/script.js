// (...rest) parameters

const num1 = [1, 2, 3, 4]

// function add(a, b, c, ...nums) {     // rest parameter has to be the last parameter
//     console.log(a, b, c, ...nums)
//     console.log('nums:', nums);
//     let sum = 0
//     for(let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//     return sum
// }

// //another way
// function add() {
//    return [...arguments].reduce((acc, curr) => acc + curr)
// }
// //another way
// function add() {
//    return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

// using (...rest) param
function add(...nums) {     // ...nums is rest params
   return nums.reduce((acc, curr) => acc + curr)
}


// rest parameter collects all values and turns it into an array put together
// whereas spread operator will spread out all values of an array 

const result = add(...num1, 5, 7, 34)  // ...num1 is spread operator