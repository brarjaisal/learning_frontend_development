// Falsy values in JavaScript
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// Function to check if a value is falsy
function isFalsy(value) {
    return !value;
}

// Testing the function with falsy values
falsyValues.forEach(value => {
    console.log(`Is ${String(value)} falsy?`, isFalsy(value));
});

// Testing the function with truthy values
const truthyValues = [true, 1, -1, 1n, "hello", {}, [], function() {}];

truthyValues.forEach(value => {
    console.log(`Is ${String(value)} falsy?`, isFalsy(value));
});
