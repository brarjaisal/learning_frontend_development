// Array Methods:
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

evenNumbers.pop() ; // Removes the last element (10)
evenNumbers.push(12); // Adds 12 to the end
evenNumbers.shift(); // Removes the first element (2)
evenNumbers.unshift(0); // Adds 0 to the beginning

console.log(evenNumbers); // Output: [0, 4, 6, 8, 12]

//.concat(oddNumbers); // Merges evenNumbers and oddNumbers
console.log(evenNumbers.concat(oddNumbers)); // Output: [0, 4, 6, 8, 12, 1, 3, 5, 7, 9]

// indexOf() gives the index of the first occurrence of a specified value
console.log(oddNumbers.indexOf(5)); // Output: 2

// includes() checks if an array contains a specified value
console.log(oddNumbers.includes(7)); // Output: true

// reverse() reverses the order of the elements in an array
console.log(oddNumbers.reverse()); // Output: [9, 7, 5, 3, 1]

// sort() sorts the elements of an array but is case-sensitive for strings 
const animals = ['dog', 'cat', 'elephant', 'bee'];
console.log(animals.sort()); // Output: ['bee', 'cat', 'dog', 'elephant']

// Sorting numbers requires a compare function
console.log(oddNumbers.sort((a, b) => a - b)); // Output: [1, 3, 5, 7, 9]

//.slice() returns a shallow copy of a portion of an array into a new array object
const someEvenNumbers = evenNumbers.slice(1, 4); // From index 1 to 3
console.log(someEvenNumbers); // Output: [4, 6, 8]

//.splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements
evenNumbers.splice(2, 1, 5); // At index 2, remove 1 element and add 5
console.log(evenNumbers); // Output: [0, 4, 5, 8, 12]