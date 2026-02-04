const fruits = ['Mango', 'Apple', 'Orange']

const myFruits = fruits

myFruits.push('Pineapple')
myFruits.push('Banana')

console.log('My Fruits:', myFruits)
console.log('Fruits:', fruits) 
// Output:
// My Fruits: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]
// Fruits: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]

// Explanation:
// In JavaScript, arrays are reference types. When we assign 'fruits' to 'myFruits',
// both variables point to the same array in memory. Therefore, any modifications
// made to 'myFruits' will also affect 'fruits'.

// To create a separate copy of the array, we can use the spread operator, the slice method, Object.assign, or other methods.

// using Object.assign
const myFruitsAssign = Object.assign([], fruits)
myFruitsAssign.push('Strawberry')

console.log('My Fruits Assign:', myFruitsAssign)
console.log('Fruits after assign modification:', fruits) 
// Output:
// My Fruits Assign: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana', 'Strawberry' ]
// Fruits after assign modification: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]

// Using the spread operator // creates a shallow copy of the array 
const myFruitsCopy = [...fruits]
myFruitsCopy.push('Grapes')

console.log('My Fruits Copy:', myFruitsCopy)
console.log('Fruits after copy modification:', fruits) 
// Output:
// My Fruits Copy: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana', 'Grapes' ]
// Fruits after copy modification: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]

// Using the slice method
const myFruitsSliceCopy = fruits.slice() //slice() creates a shallow copy of the array
myFruitsSliceCopy.push('Kiwi')

console.log('My Fruits Slice Copy:', myFruitsSliceCopy)
console.log('Fruits after slice copy modification:', fruits) 
// Output:
// My Fruits Slice Copy: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana', 'Kiwi' ]
// Fruits after slice copy modification: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]

// Using concat
const myFruitsConcatCopy = fruits.concat()
myFruitsConcatCopy.push('Watermelon')

console.log('My Fruits Concat Copy:', myFruitsConcatCopy)
console.log('Fruits after concat copy modification:', fruits) 
// Output:
// My Fruits Concat Copy: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana', 'Watermelon' ]
// Fruits after concat copy modification: [ 'Mango', 'Apple', 'Orange', 'Pineapple', 'Banana' ]



//same thing happens with objects
const person = {
    name: 'Alice',
    age: 30
}

const myPerson = person

myPerson.age = 31

console.log('My Person:', myPerson)
console.log('Person:', person) 
// Output:
// My Person: { name: 'Alice', age: 31 }
// Person: { name: 'Alice', age: 31 }

// To create a separate copy of the object, we can use Object.assign or the spread operator.

// Using Object.assign
const myPersonCopy = Object.assign({}, person)
myPersonCopy.age = 32

console.log('My Person Copy:', myPersonCopy)
console.log('Person after copy modification:', person) 
// Output:
// My Person Copy: { name: 'Alice', age: 32 }
// Person after copy modification: { name: 'Alice', age: 31 }

// Using the spread operator
const myPersonSpreadCopy = { ...person }
myPersonSpreadCopy.age = 33

console.log('My Person Spread Copy:', myPersonSpreadCopy)
console.log('Person after spread copy modification:', person) 
// Output:
// My Person Spread Copy: { name: 'Alice', age: 33 }
// Person after spread copy modification: { name: 'Alice', age: 31 }


// Note: These methods create shallow copies. For nested objects or arrays, a deep copy method is required to avoid reference issues.
