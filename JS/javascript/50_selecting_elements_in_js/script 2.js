// Selecting Elements - Document Object Model

// function sayHi() {
//   document.body.children[4].src =
//     'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
// }

//const allImages = document.images
//const allImages = document.getElementsByTagName('img')
//const cssImage = document.getElementsByClassName('css-img')[0]
// const cssImage = document.getElementById('css-img')

//const cssImage = document.querySelectorAll('.css-img') // for all elements with that class or id
// const cssImage = document.querySelector('#css-img') // for 1 element
//const jsImage = document.querySelector('[alt="javascript roadmap"]')
const ul = document.querySelector('ul li')

const imageInsideUl = ul.querySelector('.css-img') // this will look for css-img class in ul instead of whole document
// similarly we can use querySelector on all elements

const allImages = document.querySelectorAll('img') // this will select all images in document

const imagesUrl = [
  'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg',
  'https://media.istockphoto.com/id/1223379706/photo/peyto-lake-in-banff-national-park-canada.jpg?s=170667a&w=0&k=20&c=7OTKz60Y_agsFEinuebauyMrMIffm0W1B-QR6BA7sdQ=',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]


// we can also update using loop
// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, i) => {
  image.src = imagesUrl[i]
})