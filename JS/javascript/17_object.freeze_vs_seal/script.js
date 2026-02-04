const user = {
  firstName: 'Jane',
  lastName: 'Doe',
  address: {
    city: 'Los Angeles',
    zipCode: `90001`,
    state: 'California',
    contactInfo: {
      phone: 1234567890,
      email: 'abc@example.com',
    },
  },
  age: 15,
  isGraduate: false,
}

let username = "Alice"

// Deleting a property from the object
delete user.age; 
console.log(user);

// Adding a new property to the object
user.middleName = "Marie";
console.log(user);

// Updating an existing property in the object
user.isGraduate = true;
console.log(user);

// Accessing nested properties
console.log(user.address.contactInfo.email);

// if variables are declared using let or const, they cannot be redeclared in the same scope meaning the following line would throw an error
// let username = "Bob";
// but we can update the value of username
username = "Bob";
console.log(username);

//this means username is now updated to Bob and not redeclared Alice, so no error occurs.
// behind the scenes, JavaScript engine keeps track of variable declarations and ensures that redeclarations do not happen in the same scope for let and const.
// which means when we update a variable value,  it simply changes the value associated with the memory address of that variable without trying to create a new declaration.


Object.seal(user); // Sealing the object to prevent adding or deleting properties but allowing updates to existing properties

// Trying to add a new property after sealing the object (will not work)
user.nickname = "JD";
console.log(user); // nickname will not be added

// Trying to delete an existing property after sealing the object (will not work)
delete user.lastName;
console.log(user); // lastName will still exist

// Updating an existing property after sealing the object (will work)
user.firstName = "Janet";
console.log(user); // firstName will be updated to Janet

Object.freeze(user); // Freezing the object to prevent any modifications

// Trying to update an existing property after freezing the object (will not work)
user.firstName = "Alice"; 
console.log(user); // firstName will still be Janet

// Trying to delete an existing property after freezing the object (will not work)
delete user.address;
console.log(user); // address will still exist

// Trying to add a new property after freezing the object (will not work)

// using in keyword to check property existence
if ('age' in user) {
  console.log("Age property exists in user object.");
} else {
  console.log("Age property does not exist in user object.");
}

if ('firstName' in user) {
  console.log("firstName property exists in user object.");
} else {
  console.log("firstName property does not exist in user object.");
}
user.hobby = "painting";
console.log(user); // hobby will not be added
user.country = "USA";
console.log(user); // country will not be added
user.firstName = "Bob";
console.log(user); // firstName will still be Janet
user.age = 20;
console.log(user); // age will not be added
user = "Charlie"; // This will throw an error because username is declared with let and cannot be redeclared
console.log(username);
user.newProp = "newValue";
console.log(user); // newProp will not be added
user.isGraduate = false;
console.log(user); // isGraduate will still be true
user = { firstName: "New", lastName: "User" }; // This will throw an error because user is declared with const and cannot be reassigned
console.log(user);  

