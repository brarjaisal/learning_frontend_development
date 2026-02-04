// Multidimensional Arrays - A multidimensional array is an array that contains other arrays as its elements.

// Example of a 2D array (array of arrays)
let myArray = [
    ['Jane', 30],
    ['Alice', 46],
    ['Janet', 59]
];

// Accessing elements in a 2D array
console.log(myArray[0][0]); // Output: Jane
console.log(myArray[1][1]); // Output: 46

// Another Example of a 2D array (array of arrays)
const ticTacToe = [
        ['X', null, null],
        [null, null, 'O'],
        ['O', null, 'X']
    ]

// Accessing elements in the ticTacToe array
console.log(ticTacToe[0][0]); // Output: X
console.log(ticTacToe[1][2]); // Output: O
console.log(ticTacToe[2][2]); // Output: X
