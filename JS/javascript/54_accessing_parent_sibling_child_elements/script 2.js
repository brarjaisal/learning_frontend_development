const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

document.querySelector('h1').getAttribute('class')

document.querySelector('h1').setAttribute('title', 'Hello World!!!')

h1.style.color = 'hotpink'

const allLinks = document.querySelectorAll('a')

// for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
//     link.style.color = 'teal'
//     link.style.textDecoration = 'none'
//     link.style.fontWeight = '700'
//     link.style.fontFamily = 'cursive'
//     link.style.fontSize = '18px'

// link.style.cssText = `
//         color: teal;
//         text-decoration-line: none;
//         font-weight: 700;
//         font-family: cursive;
//         font-size: 18px;
//         `

// link.className = 'green-link'
link.setAttribute('class', 'green-link')

link.classList.add('green-link') 
link.classList.remove('my-list')
// link.classList.toggle('my-link')
}       

const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
console.log(firstLink.parentElement) // this will log parent element of first anchor tag link
console.log(firstLink.nextSibling) // this is logging next sibling text node of first anchor tag link
console.log(firstLink.previousSibling) // this is logging previous sibling text node of first anchor tag link
console.log(firstLink.nextElementSibling) // // this will log next sibling element of first anchor tag link
console.log(firstLink.previousElementSibling)
console.log(firstLink.children) // this will give children elements
console.log(firstLink.childNodes) // this will give any child text nodes

// All elements are nodes but all nodes are not elements