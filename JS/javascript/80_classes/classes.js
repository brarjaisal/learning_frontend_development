// Classes in JS
// Classes are a template for creating objects
// They encapsulate data with code to work on that data
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics

// Class Declaration
// class CreateUser {}

// old way using prototype
// CreateUser.prototype.getBirthYear = function() {
//   return new Date().getFullYear() - this.age
// }


// Object Creation
// const user1 = new CreateUser()
// const user2 = new CreateUser()

// Using  class constructor to initialize object properties
class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

console.log(user1.getBirthYear())
console.log(user2.getFullName())
   