const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// click event simulator eg:
// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId)
//   }
//   addCardBtn.click()
// }, 5)

setTimeout(() => {
    input.focus()
    console.log('Input Focused')
}, 1000)

// setTimeout(() => {
//     // input.blur()
//     form.submit()
//   //  form.reset()
//    // console.log('Input Blurred')
//     console.log('Input Submitted')
// }, 3000)

