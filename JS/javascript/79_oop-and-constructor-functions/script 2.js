// polymorphic function to get birth year: means it can be used with different user objects
// here 'this' will refer to the object that calls the function
// so we define it outside and use it in multiple objects
// this is more memory efficient than defining the function inside each object
// but this breaks encapsulation and is not a good practice in OOP
function getBirthYear() {
      return new Date().getFullYear() - this.age
    }

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
   // getBirthYear,
   // getBirthYear: createUser.commonMethods.getBirthYear,
  }
  return user
}

// attaching common methods to the function object itself makes it more organized and easier to maintain
// but still not a good practice in OOP
createUser.commonMethods =  {
    getBirthYear() {
        return new Date().getFullYear() - this.age
      },
} 

const user1 = createUser('Aman', 'Mishra', 32)
const user2 = createUser('Anurag', 'Singh', 72)

// new keyword creates a new object and sets 'this' to that object inside the constructor function
// this is the preferred way to create objects in OOP
// constructor functions should be named with a capital letter
function User(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

// adding methods to the prototype makes them shared across all instances
// this is memory efficient and maintains encapsulation
User.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const user3 = new User('John', 'Doe', 28)
const user4 = new User('Jane', 'Smith', 34)

// Testing the functions
console.log(user1.firstName, user1.lastName, user1.age, createUser.commonMethods.getBirthYear.call(user1))
console.log(user2.firstName, user2.lastName, user2.age, createUser.commonMethods.getBirthYear.call(user2))

console.log(user3.firstName, user3.lastName, user3.age, user3.getBirthYear())
console.log(user4.firstName, user4.lastName, user4.age, user4.getBirthYear())
