class CreateUser {
  #age  // private property
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.#age = age // private field for dynamic value
  }

 #city = 'Delhi' // private property with default value

  getBirthYear() {
    return new Date().getFullYear() - this.#age
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
    getCity() {
    return this.#city
  }
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

