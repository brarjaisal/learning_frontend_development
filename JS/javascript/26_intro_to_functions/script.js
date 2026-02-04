// Introduction to JavaScript Functions

// A function is a reusable block of code that performs a specific task.
// Functions help to organize code, make it more readable, and avoid repetition.

// console.log("Welcome to the JavaScript Functions tutorial!");
// console.log("My name is Jaisal Brar.");
// console.log("I'm a web developer.");


// Function Declaration
function introduceMyself() {
    console.log("Hello! My name is Jaisal Brar.");
    console.log("I am a web developer.");
}

// Calling the function
introduceMyself()

const returnValue = introduceMyself();
console.log("The return value of the function is:", returnValue); // undefined since the function does not return anything

// Function with Parameters
function introduceMyself(username, occupation = "Visitor", age = 0) {
    console.log(`Hello, Myself ${username || "Guest"}! I am a ${occupation}.`); // Using template literals for string interpolation and default value for username
    console.log(`I am ${age} years old.`);
    // console.log("Hello, Myself " + username + "! I am a " + occupation +".");
}

// Calling the function with arguments
introduceMyself("Jaisal", 'Software Engineer', 29); // Passing argument to the function
introduceMyself(); // Calling without argument, will use default value

 