const myName = "Alice";

const username1 = ''
const username2 = ``
// empty strings have the same memory reference address but empty objects do not

const user1 = {
  firstName: "John",
//   lastName: "Doe",
     age: 30,
//   education: "Bachelor's Degree",
//   occupation: "Software Developer",
//   location: "New York",
}

  const user2 = {
  firstName: "Jane",
  lastName: "Doe"
//   "last-Name": "Doe", can also have special characters
//   age: 30,
//   education: "Bachelor's Degree",
//   occupation: "Software Developer",
//   location: "New York",
}

console.log(user1 === user2); // false
console.log(username1 === username2); // true


// console.log(user1.firstName); // Accessing property using dot notation
// console.log(user2['firstName']); // Accessing property using bracket notation
// console.log(user2['last-Name']); // Accessing property with special character using bracket notation and not dot notation

// Modifying properties
user1.age = 31; // Updating existing property
user2.location = "San Francisco"; // Adding new property

//objects can also be nested
const user3 = {
    firstName: "Emily",
    lastName: "Smith",
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA",
        ContactInfo: {
            email: "abc@example.com",
            phone: "123-456-7890"
        }   
    }
}

// Accessing nested object properties
console.log(user3.address.city); // Los Angeles

// Modifying nested object properties
user3.address.zipCode = "90001"; // Adding new property to nested object

console.log(user3);

//Nested objects can go as deep as needed and are stored by memory reference at a different location/address than the parent object