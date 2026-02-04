// Arrays in JavaScript

const fruitsCollection = ["Apple", "Banana", "Cherry", "Dates", "Grapes"];
console.log(fruitsCollection);

// This is a sample JavaScript file that defines an array of fruits and logs it to the console.
// we can add or modify the array as needed.

// Example: Adding a new fruit to the collection
fruitsCollection[5] = "Orange";
// console.log(fruitsCollection)   will log the updated array with 'Orange' added
// ['Apple', 'Banana', 'Cherry', 'Dates', 'Grapes', 'Orange']
fruitsCollection.push("Pineapple");
// console.log(fruitsCollection)   will log the updated array with 'Pineapple' added at the end
// ['Apple', 'Banana', 'Cherry', 'Dates', 'Grapes', 'Orange', 'Pineapple']  

// Example: Modifying an existing fruit in the collection
fruitsCollection[3] = "Mango";
// console.log(fruitsCollection)   will log the updated array with 'Mango' replacing 'Dates'
// ['Apple', 'Banana', 'Cherry', 'Mango', 'Grapes', 'Orange', 'Pineapple']

// we can nest arrays as well
const nestedFruitsCollection = [
  ["Apple", "Banana"],
  ["Cherry", "Dates"],
  ["Grapes", "Orange"],
];
console.log(nestedFruitsCollection);
// This will log the nested array structure to the console.

// we can nest different data types in an array
const mixedCollection = [
  "Apple",
  42,
  true,
  ["Cherry", "Dates"],
  { name: "Grapes", color: "Purple" },
];
console.log(mixedCollection);
// This will log the mixed array structure to the console. Nesting different data types is allowed but should be done thoughtfully to maintain code readability and integrity.

const rainbowColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
];
console.log(rainbowColors);

// Array Methods
rainbowColors.push("Pink");
console.log(rainbowColors); // Logs the array with 'Pink' added at the end

rainbowColors.pop();
console.log(rainbowColors); // Logs the array with the last element removed