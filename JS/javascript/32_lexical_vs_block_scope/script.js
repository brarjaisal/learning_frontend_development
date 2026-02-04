// Lexical vs Block Scope in javascript
// 'use strict' - this is used to prevent creating variable without specifying let, var, const

const username = 'Jaisal'
let userAge = 29
var a = 50

// function add() {
//   const username = 'Jane'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username) // this will use local scope username ie Jane
// }

//debugger
function subtract() {
  const x = 15
  const y = 18
  const z = 28
  console.log(x - y)
  console.log(username) // this will use global scope username ie Jaisal because username is not defined in local scope of function

  function child() {
    const childName = 'Dave'
    console.log(childName)
    console.log(x, z)

    {
        let num1 = 78               // this is a block of code created with let variable inside a function and has block scope which means variables here can only be accessed inside this block
        var num2 = 34
        console.log(num1)
        console.log(num2)
    } // if we created a variable using const or var that  would be accessible within the function subtract()
    console.log(num2) // this will work
    // console.log(num1)  // this will give error
    function grandChild() {
        const grandChildName = 'Johnny'
        console.log(grandChildName)
    }
    grandChild()
}
 child()  // this will create another local scope within the subtract() function local scope and can access local parent variable as well as variables outside from global scope this whole chain is called lexical scope 
}

//Inner functions have access of outer functions but outer functions do not
// lexical scope of grandChild() would be formed including scope of child() + subtract() + global scope ie anonymous 
// and grandChild() can access information from all of it's lexical scope but it's parent or grandparent ie the outer functions cannot access inner ie grandChild()

// add()
subtract()

console.log('Program Ended')

// scope shows you all variables that can be accessed at a particular line