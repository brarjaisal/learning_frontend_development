const container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

const myImg = document.querySelector("body > div > div:nth-child(5)")

// removing using remove()
myImg.remove()
// after removing the element it also has to set to null so it's not stored in memory using space


// old way 
// removing using removeChild()
// myImg.parentElement.removeChild(myImg)