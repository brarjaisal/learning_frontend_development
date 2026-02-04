const user1Age = '18';
const user2Age = 25;

// Comparing with loose equality (==)
console.log(user1Age == user2Age); // false
console.log(user1Age == user1Age); // true

// Output:
// user1Age == user2Age
// false
// user1Age == user1Age
// true


const user3Age = 18;

// Comparing with strict equality (===)
console.log(user1Age === user3Age); // false
console.log(user2Age === user3Age); // false

// Output:
// user1Age === user3Age
// false
// user2Age === user3Age
// false    
// Explanation:
// In the first comparison, user1Age is a string and user3Age is a number, so they are not strictly equal.
// In the second comparison, user2Age is 25 and user3Age is 18, so they are also not strictly equal.        
console.log('user1Age == user2Age');
console.log(user1Age == user2Age);

console.log('user1Age == user1Age');
console.log(user1Age == user1Age);

console.log('user1Age === user3Age');
console.log(user1Age === user3Age);

console.log('user2Age === user3Age');
console.log(user2Age === user3Age); 
// The output statements are included to clearly indicate which comparison is being logged.

parseInt(user1Age) === user3Age; // true
// Explanation:
// Here, we convert user1Age from a string to a number using parseInt.
// After conversion, both values are 18 (number), so they are strictly equal.
console.log(parseInt(user1Age) === user3Age); // true
// Output:
// true

// Additional comparison after type conversion
console.log('parseInt(user1Age) === user3Age');
console.log(parseInt(user1Age) === user3Age);   
// Output:
// parseInt(user1Age) === user3Age
// true

// The output statements are included to clearly indicate which comparison is being logged.

// Comparing with not equal operator (!=)
console.log(user1Age != user2Age); // true
// Explanation:
// Here, user1Age (string '18') is not equal to user2Age (number 25) when using loose inequality.
// Therefore, the result is true.
console.log('user1Age != user2Age');
console.log(user1Age != user2Age); 
// Output:
// user1Age != user2Age
// true

// Comparing with strict not equal operator (!==)
console.log(user1Age !== user3Age); // true
// Explanation:
// Here, user1Age (string '18') is not strictly equal to user3Age (number 18).
// Therefore, the result is true.
console.log('user1Age !== user3Age');
console.log(user1Age !== user3Age); 
// Output:
// user1Age !== user3Age
// true
console.log('parseInt(user1Age) === user3Age');
console.log(parseInt(user1Age) === user3Age);
console.log(parseInt(user1Age) === user3Age); // true
console.log('user1Age != user2Age');
console.log(user1Age != user2Age);
console.log('user1Age !== user3Age');
console.log(user1Age !== user3Age);

// Output:
// parseInt(user1Age) === user3Age
// true
// user1Age != user2Age
// true
// user1Age !== user3Age
// true 

// The output statements are included to clearly indicate which comparison is being logged.

// Comparing with greater than operator (>)
console.log(user2Age > user3Age); // true
// Explanation:
// Here, user2Age (25) is greater than user3Age (18), so the result is true.
console.log('user2Age > user3Age');
console.log(user2Age > user3Age); 
// Output:
// user2Age > user3Age
// true

// Comparing with less than operator (<)
console.log(user3Age < user2Age); // true
// Explanation:
// Here, user3Age (18) is less than user2Age (25), so the result is true.
console.log('user3Age < user2Age');
console.log(user3Age < user2Age); 
// Output:
// user3Age < user2Age
// true

// The output statements are included to clearly indicate which comparison is being logged.
console.log('user2Age > user3Age');
console.log(user2Age > user3Age);
console.log('user3Age < user2Age');
console.log(user3Age < user2Age);

// Output:
// user2Age > user3Age
// true
// user3Age < user2Age
// true
console.log(user2Age > user3Age); // true
console.log(user3Age < user2Age); // true
// Comparing with greater than operator (>)
// Comparing with less than operator (<)
console.log('user2Age > user3Age');
console.log(user2Age > user3Age);
console.log('user3Age < user2Age');
console.log(user3Age < user2Age);

// Output:
// user2Age > user3Age
// true
// user3Age < user2Age
// true
console.log(user2Age > user3Age); // true
console.log(user3Age < user2Age); // true   

// The output statements are included to clearly indicate which comparison is being logged.
console.log('user2Age > user3Age');
console.log(user2Age > user3Age);
console.log('user3Age < user2Age');
console.log(user3Age < user2Age);   
// Output:
// user2Age > user3Age
// true
// user3Age < user2Age
// true
console.log(user2Age > user3Age); // true
console.log(user3Age < user2Age); // true
console.log('user2Age > user3Age');
console.log(user2Age > user3Age);
console.log('user3Age < user2Age');
console.log(user3Age < user2Age);

// Output:
// user2Age > user3Age
// true
// user3Age < user2Age
// true
console.log(user2Age > user3Age); // true
console.log(user3Age < user2Age); // true
// Comparing with greater than operator (>)

// Comparing with greater than equal to operator (>=)
console.log(user2Age >= user3Age); // true
// Explanation:
// Here, user2Age (25) is greater than user3Age (18), so the result is true.
console.log('user2Age >= user3Age');
console.log(user2Age >= user3Age); 
// Output:
// user2Age >= user3Age
// true

// Comparing with less than equal to operator (<=)
console.log(user3Age <= user2Age); // true
// Explanation:
// Here, user3Age (18) is less than user2Age (25), so the result is true.
console.log('user3Age <= user2Age');
console.log(user3Age <= user2Age); 
// Output:
// user3Age <= user2Age
// true

// The output statements are included to clearly indicate which comparison is being logged.

