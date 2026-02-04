// creating element

const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// const firstImage = document.querySelector('img')
// for (let i = 2; i <=100; i++) {
//     const newImg = firstImage.cloneNode()
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

const paragraph = document.createElement('p')
// paragraph.innerText = "Hello"
// paragraph.classList.add('my-paragraph')
// paragraph.id = 'my-para'

// container.append(paragraph)

for (let i = 1; i <=900; i++) {
const image = document.createElement('img')
 image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
 container.append(image)
}