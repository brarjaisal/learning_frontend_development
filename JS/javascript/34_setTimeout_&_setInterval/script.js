const timer1 = setTimeout(`console.log("Hi-1")`, 1000) // this means our code will be run 2s later, we can delay printing our code in console using this function
const timer2 = setTimeout(`console.log("Hi-2")`, 0)
const timer3 = setTimeout(a, 3000) // this has become a higher order function because a function is stored in another function
//const timer3 = setTimeout(a, 3000, 'jai', 23, 56, 'dfg', [4, 7]) here 'jai', 23, 56, 'dfg', [4, 7] are arguments

clearTimeout(timer2) // this will stop timer2 from running
// clearInterval(timer1) // this does the same thing

function a() {
    //console.log(arguments[0])
    console.log("Hello World!")
}

console.log("Supppp") // this will run before any other code in setTimeout because this is synchronous and timeout is asynchronous 

const timer4 = setInterval('console.log(45)', 4000) // this will run the code every 4sec and can be turned into higher order function
 
clearInterval(timer4) // this stops timer4 from running

setTimeout(function() {          // this is a higher order async function
    console.log("New function")
}, 5000)