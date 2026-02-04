// Methods of the Math object in JavaScript:
Math.floor(4.3454)
// This will round down the number 4.3454 to the nearest integer, resulting in 4.
Math.floor(-2.987)
// This will round down the number -2.987 to the nearest integer, resulting in -3.
Math.ceil(0.9999)
// This will round up the number 0.9999 to the nearest integer, resulting in 1.
Math.ceil(-1.0001)
// This will round up the number -1.0001 to the nearest integer, resulting in -1.
Math.round(5.5)
// This will round the number 5.5 to the nearest integer, resulting in 6.
Math.round(5.4)
// This will round the number 5.4 to the nearest integer, resulting in 5.
Math.round(-3.5)
// This will round the number -3.5 to the nearest integer, resulting in -3.
Math.round(-3.6)
// This will round the number -3.6 to the nearest integer, resulting in -4.
Math.random()
// This will generate a random floating-point number between 0 (inclusive) and 1 (exclusive).
Math.random() * 10
// This will generate a random floating-point number between 0 (inclusive) and 10 (exclusive).
Math.floor(Math.random() * 10)
// This will generate a random integer between 0 (inclusive) and 9 (inclusive).
Math.max(3, 7, 2, 9, 4)
// This will return the maximum value among the given numbers, resulting in 9.
Math.min(3, 7, 2, 9, 4)
// This will return the minimum value among the given numbers, resulting in 2.
Math.pow(2, 3)
// This will calculate 2 raised to the power of 3, resulting in 8.
Math.sqrt(16)
// This will calculate the square root of 16, resulting in 4.       
Math.abs(-42)
// This will return the absolute value of -42, resulting in 42.
Math.log(1)
// This will return the natural logarithm (base e) of 1, resulting in 0.
Math.exp(2)
// This will return e raised to the power of 2, resulting in approximately 7.3890560989306495.

// Constant values in the Math object:
Math.E
Math.PI 
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
// These constants represent mathematical values such as Euler's number (e), Pi, square root of 2, etc.

// Example usage of constants:
let circumference = 2 * Math.PI * 5; // Circumference of a circle with radius 5
let area = Math.PI * Math.pow(5, 2); // Area of a circle with radius 5  
console.log("Circumference:", circumference);
console.log("Area:", area);
// This will log the circumference and area of a circle with radius 5 using the Math.PI constant.

Mathematical Operators in JavaScript:
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Modulus (%)
Exponentiation (**)
// These operators are used to perform basic arithmetic operations in JavaScript.

// Example usage of mathematical operators:
let a = 10;
let b = 3;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let power = a ** b; // Exponentiation

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Power:", power);
// This will log the results of various arithmetic operations between a and b.  

8 / 0 // This will result in Infinity, as division by zero is not defined in mathematics.
-8 / 0 // This will result in -Infinity, as division of a negative number by zero is also not defined.
0 / 0 // This will result in NaN (Not-a-Number), as zero divided by zero is indeterminate.

// Example usage of division by zero:
let positiveInfinity = 8 / 0;
let negativeInfinity = -8 / 0;
let notANumber = 0 / 0;

console.log("Positive Infinity:", positiveInfinity);
console.log("Negative Infinity:", negativeInfinity);
console.log("Not-a-Number (NaN):", notANumber);
// This will log the results of division by zero scenarios.     