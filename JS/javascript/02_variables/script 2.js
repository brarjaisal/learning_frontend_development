let firstName = `Jaisal`; // let variable can be reassigned and it's a block-scoped variable
let lastName = `Brar`;
let age = 29;
let isHappy = true;

let userIntro = `Hi, my name is ` + firstName + ` ` + lastName + `. I am ` + age + ` years old. It is ` + isHappy + ` that I am happy today.`;

console.log(userIntro);

const hoursInDay = 24; // Constant variable remains unchanged and cant be reassigned and it's block-scoped

var a = 10; // var variable has function scope but is generally avoided in modern JavaScript due to its quirks