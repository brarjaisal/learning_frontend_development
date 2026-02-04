class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  static hi = 'Hello World' 
  // Static Property: Accessible without creating an instance and will only be available on the class itself ie CreateUser.hi

  // Static Method: Accessible without creating an instance and will only be available on the class itself ie CreateUser.city()
  static {
    this.hello = 'Hello Everyone'
    this.city = function() {
      return 'New York'
    }
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
