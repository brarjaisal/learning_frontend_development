const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    // newCard.addEventListener('click', () => {
    //     newCard.remove()
    // })
    
    container.append(newCard)
})

container.addEventListener('click', (e) => {
    if (e.target !== container) {
       e.target.remove()
    }
})

// Event delegation: when we optimize our code by assigning an event listener on the parent instead of doing it over multiple children to get the same result