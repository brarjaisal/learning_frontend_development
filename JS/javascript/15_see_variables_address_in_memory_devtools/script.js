const firstName = "Jaisal"
const userAge = 29
const birthYear = 1996
const isGraduated = true
const hasJob = false
const myNullValue = null
const myUndefinedValue = undefined
const userSkills = ''

// You can inspect the variables above in the browser's developer tools to see their memory addresses in memory tab.
// address of primitive data types will be different as they are stored directly in the stack memory.
// Note: Memory addresses may vary each time you run the code.
//Address of false, null, undefined and empty string will also be different but the addresses don't change for different variables having same value.
//For example, if you create another variable with value false, it will have the same memory address as hasJob variable.
//This is because these values are stored in a common location in memory for optimization.
// Memory addresses for true, false, null, undefined, and empty string are consistent across different variables with the same value.
// This is an optimization technique used by JavaScript engines to save memory.
// For other primitive data types like string, number, and boolean (true), each variable will have its own unique memory address even if they have the same value.
// This is because these values are stored directly in the stack memory.
// For example, if you create another variable with value "Jaisal", it will have a different memory address than firstName variable.
// This is because strings are stored directly in the stack memory and each variable gets its own copy of the value.
// Similarly, if you create another variable with value 29, it will have a different memory address than userAge variable.
// This is because numbers are also stored directly in the stack memory and each variable gets its own copy of the value.