// Function Declaration
// function introduceMyself() {
//     console.log("Hello! My name is Jaisal Brar.");
//     console.log("I am a web developer.");
// }

// Calling the function
// introduceMyself()

// Function with Parameters
// function introduceMyself(username, occupation = "Visitor", age = 0) {
//     console.log(`Hello, Myself ${username || "Guest"}! I am a ${occupation}.`); // Using template literals for string interpolation and default value for username
//     console.log(`I am ${age} years old.`);
//     // console.log("Hello, Myself " + username + "! I am a " + occupation +".");
// }

// Calling the function with arguments
// introduceMyself("Jaisal", 'Software Engineer', 29); // Passing argument to the function
// introduceMyself(); // Calling without argument, will use default value


// Function Declaration without Return Statement
// const returnValue = introduceMyself();
// console.log("The return value of the function is:", returnValue); // undefined since the function does not return anything
// The function does not have a return statement, so it returns undefined by default


// Function with Return Statement
function calculateSum() {
    return 5 + 6 // Returning the sum of 5 and 6
}

// Calling the function and storing the return value
const sum = calculateSum()
console.log("The sum is:", sum) // Output: The sum is: 11 
// Now the function returns the sum, which can be used later in the code

// Function with Parameters and Return Statement
function addNumbers(num1, num2) {
    return num1 + num2 // Returning the sum of num1 and num2
}

// Calling the function with arguments and storing the return value
const total = addNumbers(10, 15)
console.log("The total is:", total) // Output: The total is: 25
// The function takes two parameters, adds them, and returns the result


function subtractNumbers(a, b) {
    return a - b; // Returning the difference of a and b
}

// Calling the function with arguments and storing the return value
const difference = subtractNumbers(20, 5);
console.log("The difference is:", difference); // Output: The difference is: 15
// The function takes two parameters, subtracts b from a, and returns the result    