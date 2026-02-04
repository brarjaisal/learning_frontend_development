const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

// one way to update localStorage:
// nameElement.innerText = localStorage.myName

// nameInput.addEventListener('input', (e) => {
//     localStorage.myName = e.target.value
//     nameElement.innerText = localStorage.myName
// })

// more efficient way:
// nameElement.innerText = localStorage.getItem('myName')

// nameInput.addEventListener('input', (e) => {
//     localStorage.setItem('myName', e.target.value)
//     nameElement.innerText = localStorage.getItem('myName')
// })

// ageElement.innerText = localStorage.getItem('myAge')

// ageInput.addEventListener('input', (e) => {
//     localStorage.setItem('myAge', e.target.value)
//     ageElement.innerText = localStorage.getItem('myAge')
// })

// we can also store values as objects:
// JSON.stringify(myData) to turn object into string
// JSON.parse('{"name":"","age":""}') to turn string into object

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
nameElement.innerText = myData.name
}

if (myData.age) {
ageElement.innerText = myData.age
}

nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    ageElement.innerText = e.target.value
})

// to clear data from localStorage:
// localStorage.removeItem('myData') if need to clear single item
// localStorage.clear this will clear all data 

// data stored using localStorage will only be stored on that particular url