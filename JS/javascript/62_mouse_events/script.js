const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// click & dblclick are also mouse events

// card.addEventListener('mousedown', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseup', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseenter', (e) => {  // similarly there's mouseover, that works even if we enter the child
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseleave', (e) => { // mouseout works the same way
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mousemove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// document.addEventListener('scroll', (e) => {   // this works if page has a scroll bar
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// h1.addEventListener('drag', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// events for mobile devices:
// card.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('touchend', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('touchmove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// Events that work for both mobile & desktop are pointer events:

// card.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

card.addEventListener('pointerleave', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})