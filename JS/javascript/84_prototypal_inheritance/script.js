class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

// const user1 = new User('Aman', 'Mishra', 32)
// const user2 = new User('Anurag', 'Singh', 72)

class Student {
    constructor(firstName, lastName, age, grade) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.grade = grade
    }

    getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

// Student class can also be created by extending User class
// This way we can avoid code duplication
// as shown below
class Employee extends User {
    constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age)
    this.company = company
    }
   position() {
    console.log('Developer')
   }
}

const student1 = new Student('Aman', 'Mishra', 32, 'BCA')
const employee1 = new Employee('Anurag', 'Singh', 42, 'Google')