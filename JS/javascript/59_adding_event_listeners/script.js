// Adding event listeners

const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')


function sayHi() {
    console.log("Hiii")
}

// h1.onclick = sayHi

// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', function() {
//     console.log('Second Hi')
// }) 
// multiple event listeners can be added using this 

let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card')
    // const newCard = card.cloneNode()
    // newCard.classList.remove('add-card')
    newCard.innerText = count++
    // console.log(newCard)
    container.append(newCard)
})

// for (let i = 1; i <= 100; i++) {
//     card.addEventListener('click', () => {
//      const newCard = document.createElement('div')
//   })
// }