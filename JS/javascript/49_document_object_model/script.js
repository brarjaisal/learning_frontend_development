// Document Object Model
// when we write a html document, the browser has an object called html parser which converts html elements into object format
// and creates a document object inside a window object that represents browser viewport
// we can change/modify these objects using javascript and this is called DOM manipulation.

function sayHi() {
  document.body.children[4].src =
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
}