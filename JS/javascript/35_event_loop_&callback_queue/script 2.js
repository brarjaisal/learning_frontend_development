console.log("Hi-1")

function hello() {
    console.log('Hello World')
}

for(let i = 0; i <= 4; i++){
    console.log(i)
}

debugger
hello()

setTimeout(function(){
    console.log('Hi-3')
}, 0)

console.log("Hi-2")


// callback queue: It is a waiting list for functions (callbacks) that are ready to execute after an asynchronous operation, like a timer or network request, has completed. 
// When an async task finishes, its callback is sent to this queue, which operates on a first-in, first-out (FIFO) basis. 
// The event loop then moves a callback from the queue to the call stack for execution only when the call stack is empty. 
// checkout http://latentflip.com/loupe/
