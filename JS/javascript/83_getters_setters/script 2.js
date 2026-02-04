class CreateUser {
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

  set fullName(name) {
    const [firstName, lastName] = name.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  } 
}

const user1 = new CreateUser('Aman', 'Mishra', 32)
const user2 = new CreateUser('Anurag', 'Singh', 72)

// getters and setters
// they are used to access and set the properties of an object
// const user = {
//     firstName: 'Aman',
//     lastName: 'Mishra',  
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(name) {
//         const [firstName, lastName] = name.split(' ')
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// // to access the fullName property
// // console.log(user.fullName)

// // to set the fullName property
// user.fullName = "Anurag Singh"
// console.log(user.firstName)
// console.log(user.lastName)

// if we try to call fullName as a function
// console.log(user.fullName())
// it will give an error

// user.fullName = "Anurag Singh"
