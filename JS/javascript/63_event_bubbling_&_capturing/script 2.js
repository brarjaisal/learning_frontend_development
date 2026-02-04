const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// Event Bubbling: event is performed starting from child> parent> grandparent> all the way to window
window.addEventListener('click', () => {
  console.log('Window event listener')
})

document.addEventListener('click', () => {
  console.log('Document event listener')
})

document.body.addEventListener('click', () => {
  console.log('Body event listener')
})

green.addEventListener('click', () => {
  console.log('Green event listener')
})

pink.addEventListener('click', () => {
  console.log('Pink event listener')
}, {once: true}) // this means event will fire only once

blue.addEventListener('click', (e) => {
    e.stopPropagation()              // this is used to stop event bubbling
    console.log('Blue event listener')
}, true) // {capture: true}) // this works backwards compared to bubbling ie outward to inward

// 