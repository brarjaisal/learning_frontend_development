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