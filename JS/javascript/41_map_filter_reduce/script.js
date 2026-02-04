// nondestructive methods - that do not destroy the original value

const months = ['January', 'February', 'March', 'April', 'May', 'December']

// using .forEach()
// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month)
//     return month.toUpperCase()
//   })

// using .map()
const capitalMonths = months.map((month, index, array) => {
    // console.log(index + 1, month)
    // console.log(array);
    return month.toUpperCase()
  })

// .filter()
// const filteredMonths = months.filter((month, index, array) => {
//     console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return month.toLocaleLowerCase().includes('m')
//   })

const filteredMonths = months.filter((month, index, array) => {
    // console.log(month.toLocaleLowerCase().includes('m'))
    // console.log(array);
    return false
  })

// const filteredMonths = months.filter((month, index, array) => {
//     return month.length >= 5
//   })  

const students = [
    {
        name: 'Ash',
        age: 21,
    },
    {
        name: 'John',
        age: 17,
    },
    {
        name: 'Jane',
        age: 18,
    },
    {
        name: 'Rob',
        age: 23,
    },
    {
        name: 'Nancy',
        age: 16,
    },
]

const adultStudents = students.filter((student) => {
    return student.age >= 18
}).map((student) => {
    return student.name
}).filter((student) => {
    return student.includes('A')
})          // chaining of array methods
