// const user1 = {
//   firstName: "Alice",
//   lastName: "Smith",
//   age: 30,
//   getBirthYear () {
//     return new Date().getFullYear() - user1.age;
//   }
// }

// function getBirthYear(age) {
//     return new Date().getFullYear() - age;
// }
// console.log(getBirthYear(user.age)) 

// Factory Function using object 
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear () {
    return new Date().getFullYear() - user.age;
  }
  }
  return user
}

const user1 = createUser("Alice", "Smith", 30);
const user2 = createUser("Bob", "Johnson", 25);

console.log(user1.getBirthYear()); // Outputs: Birth year of Alice
console.log(user2.getBirthYear()); // Outputs: Birth year of Bob    

// explaining oop concepts
// Encapsulation: Bundling data (firstName, lastName, age) and methods (getBirthYear) together in an object.
// Abstraction: Hiding the complexity of calculating the birth year behind the getBirthYear method.
// Factory Function: A function that creates and returns new user objects.
// DRY Principle: Avoiding repetition by using a factory function to create multiple user objects.
// Code Reusability: The createUser function can be reused to create multiple user objects without duplicating code.
// Modularity: Each user object is self-contained with its own data and methods.
