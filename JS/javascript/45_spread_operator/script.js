//Spread Operator

const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9, 10]
const myName = 'Jaisal'

// using .concat() method to join the array
// const joinedArray = num1.concat(num2)
// console.log(joinedArray)

// another way to join is spread operator 
const joinedArray = [...num1, ...num2]

const user = {
    name: "Jaisal",
    age: 29,
    city: "Vancouver"
}

// const updatedUser = {...user, job: 'Web developer'}

function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i]
    }
    return sum
}

// add(...joinedArray)
// this will give sum of joinedArray

