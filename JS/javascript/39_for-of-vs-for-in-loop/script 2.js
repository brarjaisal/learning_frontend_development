//'for ... of' vs 'for ... in' loop

const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(let i= 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

for(const fruit of fruits) {             // for of loop used to loop an array
    console.log(fruit)
}

const user = "Jaisal"                 //  for of loop used to loop a string
for(const letter of user) {
    console.log(letter)
}

const person = {                   // this is an object
    firstName: "Jaisal",
    lastName: "Brar",
    age: 29,
    city: "Vancouver"
}

for(const key in person) {                // for in loop used to loop an object
    console.log(key, ":", person[key])
}

// another way that's mostly used to loop object using 'for of' loop
const personKeys = Object.keys(person)
const personValues = Object.values(person)
const personEntries = Object.entries(person)

for(const key of personKeys) {
    console.log(person[key])
}

for(const value of personValues) {
    console.log(value)
}


for(const entry of personEntries) {
    console.log(entry)
}