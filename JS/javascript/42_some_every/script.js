const evenNumbers = [0, 2, 10, 4, 61, 8]

// Using .some() array method
// const result = evenNumbers.some((num, i, array) => {
//     if(num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })
// .some() checks all conditions of the loop and looks if any value is true and returns true, if after checking all values are false then it will return false
// if first value is true, it wont loop further and return true right away and exit the loop

// Using .every()
const result = evenNumbers.every((num) => {
    // debugger
    return num % 2 === 0
})

// .every() checks all conditions of the loop and looks if any value is false and returns false, if after checking all values are true then it will return true
// if first value is false, it wont loop further and return false right away and exit the loop
// so it is basically opposite of .some()