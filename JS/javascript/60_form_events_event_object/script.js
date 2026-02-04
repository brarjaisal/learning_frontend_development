const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

// usernameInput.addEventListener('click', () => {
//     console.log("Input clicked")
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log("Input double clicked")
// })

let inputValue

// usernameInput.addEventListener('input', (e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = inputValue
//     // console.log("Input event fired")
// })

// usernameInput.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = inputValue
// })

// usernameInput.addEventListener('focus', (e) => {
//     console.log(e.type)
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = inputValue
// })

// usernameInput.addEventListener('blur', (e) => {
//     console.log(e.type)
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = inputValue
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const myFormData = new FormData(form)
//     console.log(myFormData)

//     for (const p of myFormData.entries()) {
//         console.log(p)
//     }
// })

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Form Submitted")
})

form.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.currentTarget)
    console.log("Form clicked")
})