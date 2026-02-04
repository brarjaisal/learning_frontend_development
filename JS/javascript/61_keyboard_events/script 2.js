// keyboard events
// keyUp, keyDown, keyPress

const h1 = document.querySelector('h1')

// h1.addEventListener('keypress', (e) => {
//     console.log("Key Code:", e.code)
//     console.log("Value:", e.key)
// })  


// h1.addEventListener('keyup', (e) => {
//     console.log("Code:", e.code)
//     console.log("Value:", e.key)
// }) 

h1.addEventListener('keydown', (e) => {
    console.log("Code:", e.code)
    console.log("Value:", e.key)
}) 