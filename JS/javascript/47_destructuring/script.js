// Destructuring in javascript


const colors = ['red', 'green', 'yellow', 'pink', 'black']
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

// Destructuring this array
 const [color1, color2, color3, i, e] = colors
// creating variables and accessing values at certain indexes

//const [,,color3] = colors // this will skip first 2 values of array and give 3rd value
// you can give any name to these variables
//array can also be destructured as an object:
// const { 3: color4 } = colors 
// so this is saying access value on 3rd index of array and store it in color4 variable


const user = {
  name: 'Jaisal',
  age: 29,
  address: {
    city: 'Vancouver',
    province: 'BC',
  },
}

// const name = user.name
// const age = user.age

// Destructuring this object
 const { name, age } = user
//in case of object destructuring you need to give the name of a key for it to access
// but you can create a new variable to store that value:
// const { name: username, age: userAge} = user

//multi-level destructuring
// const { address: {city} } = user // this is used to access object within an object


// function intro(userObj) {
//     console.log(userObj)
// }


function intro(name, age) {
    console.log(name, age)
}
intro(user)

function printColor([a, b,,g]) {
    console.log([a, b, g])
}

// function printColor({3: color4}) {
//     console.log(color4)
// }

printColor(colors)