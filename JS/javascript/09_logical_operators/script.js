//Logical Operators in JavaScript

// AND Operator (&&)
(5 < 7) && (8 > 4); // true, both conditions are true
(5 < 7) && (8 < 4); // false, one condition is false

const userAge = 25;
userAge >= 18 && userAge <= 24; // false, age is not in the range
const isCollegeStudent = true;
userAge >= 18 && isCollegeStudent; // true, both conditions are true

const isSchoolStudent =  userAge < 18;
userAge >= 18 && !isSchoolStudent; // true, first condition is true and second is negated to true   

// OR Operator (||) 
const isStudent = isCollegeStudent || isSchoolStudent; // true, one condition is true   
(5 < 7) || (8 < 4); // true, one condition is true
(5 > 7) || (8 < 4); // false, both conditions are false

1 && 2 // 2
0 && 2 // 0
1 || 2 // 1
0 || 2 // 2 
// These operators return the actual value of the operands, not just true or false because of JavaScript's type coercion and short-circuit evaluation.
// This behavior is often used in practical scenarios, such as setting default values or checking for null/undefined values.
// The AND operator returns the first falsy value or the last value if all are truthy.
// The OR operator returns the first truthy value or the last value if all are falsy.
// AND operator stops evaluating as soon as it finds a falsy value (short-circuiting).
// OR operator stops evaluating as soon as it finds a truthy value (short-circuiting).
// Boolean conversion: Boolean(1 && 2) // true
// Boolean conversion: Boolean(0 && 2) // false
// Boolean conversion: Boolean(1 || 2) // true
// Boolean conversion: Boolean(0 || 2) // true

// falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN
// 'Hello' && console.log('hello1')
// hello1 :undefined
// undefined || console.log('hello2')
// hello2 : undefined

// NOT Operator (!)
!true; // false
!false; // true
!(5 < 7); // false
!(5 > 7); // true

const isLoggedIn = false;
!isLoggedIn; // true, negates the boolean value

const hasAccess = isLoggedIn || (userAge >= 18 && isCollegeStudent); // true, evaluates to true because userAge and isCollegeStudent are true
const canEnterClub = isLoggedIn && (userAge >= 18); // false, evaluates to false because isLoggedIn is false    
const cannotEnterClub = !canEnterClub; // true, negates the canEnterClub value

// Combining Logical Operators
const isAdultStudent = (userAge >= 18) && isCollegeStudent; // true
const isMinorOrStudent = (userAge < 18) || isCollegeStudent; // true
const hasPrivileges = isLoggedIn && (userAge >= 18 || isCollegeStudent); // false
const isRestricted = !isLoggedIn || (userAge < 18 && !isCollegeStudent); // true

// Practical Example
const username = "user123";
const password = "pass123";

const isAuthenticated = (username === "user123") && (password === "pass123"); // true
const canAccessDashboard = isAuthenticated || isLoggedIn; // true
const cannotAccessSettings = !isAuthenticated && !isLoggedIn; // false

// Summary
// Logical operators are essential for controlling the flow of logic in JavaScript.
// They help in making decisions based on multiple conditions and are widely used in conditional statements, loops, and function calls. 

