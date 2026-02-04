// Compound (Combined Assignment) Operators

let num = 5

num = num + 2

// Using the += operator to achieve the same result
num += 2  // Now num is 9

console.log(num)  // Output: 9

// -= operator
num -= 3  // Now num is 6

console.log(num)  // Output: 6

// *= operator
num *= 4  // Now num is 24

console.log(num)  // Output: 24

// /= operator
num /= 6  // Now num is 4

console.log(num)  // Output: 4

// %= operator
num %= 3  // Now num is 1

console.log(num)  // Output: 1

// **= operator
num **= 3  // Now num is 1 (1 to any power is 1)

console.log(num)  // Output: 1  
// Using compound operators makes the code more concise and easier to read.

// Increment and Decrement Operators

let count = 10

// Incrementing the value by 1
count++  // Now count is 11

console.log(count)  // Output: 11

// Decrementing the value by 1
count--  // Now count is 10

console.log(count)  // Output: 10

// If we add operators before the variable, it will increment/decrement first and then return the value
let newCount = ++count  // count is incremented to 11, then assigned to newCount

console.log(newCount)  // Output: 11
console.log(count)     // Output: 11

let anotherCount = --count  // count is decremented to 10, then assigned to anotherCount

console.log(anotherCount)  // Output: 10
console.log(count)         // Output: 10

// If we add operators after the variable, it will return the value first and then increment/decrement
let postIncrementCount = count++  // anotherCount is assigned 10, then count is incremented to 11

console.log(postIncrementCount)  // Output: 10
console.log(count)                // Output: 11

let postDecrementCount = count--  // anotherCount is assigned 11, then count is decremented to 10

console.log(postDecrementCount)  // Output: 11
console.log(count)                // Output: 10
// Increment and decrement operators are commonly used in loops and iterative processes.

// They provide a shorthand way to increase or decrease a variable's value by one.

   