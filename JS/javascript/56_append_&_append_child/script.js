// append & appendChild

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

// container.appendChild(h1.cloneNode(true))
// container.appendChild(h1)

// container.appendChild(card.cloneNode(true))


// for (let i =2; i <= 100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)
// }

const newTextNode = document.createTextNode('Hello World')
container.appendChild(newTextNode) // direct string cant be appended using appendChild so we use append

container.append(" Thai food")
container.append(' ','is spicy', ' ', 100)
// append can add multiple things at once but appendChild cannot