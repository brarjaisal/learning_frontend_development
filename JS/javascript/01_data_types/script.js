console.log('Hello')
// Data typles in JavaScript: 
//string,  number, boolean, null, undefined, object, symbol, bigint
// String
let name = "John Doe";
console.log("Name:", name);

// Number
let age = 30;
console.log("Age:", age);

// Boolean
let isStudent = false;
console.log("Is Student:", isStudent);

// Null means no value but it is classified as an object type which is a bit of a quirk in JavaScript
let address = null;
console.log("Address:", address);

// Undefined
let phoneNumber;
console.log("Phone Number:", phoneNumber);

// Object
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
};
console.log("Person:", person);

// Symbol
let uniqueId = Symbol('id');
console.log("Unique ID:", uniqueId);

// BigInt
let bigNumber = BigInt(9007199254740991);
console.log("Big Number:", bigNumber);  