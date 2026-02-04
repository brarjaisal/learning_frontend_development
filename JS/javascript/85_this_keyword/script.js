// this keyword
console.log(this); // In a browser, this will log the Window object

function showThis() {
    console.log(this); // In non-strict mode, this will log the Window object
}

showThis();

const obj = {
    name: 'My Object',
    showThis: function() {
        console.log(this); // This will log the obj object
    }
};

obj.showThis();

const arrowFunc = () => {
    console.log(this); // In arrow functions, this is lexically bound, so it will log the Window object
};


// Using 'this' inside a constructor function
// function Hi() {
//   this.hello = 'world'    // this will refer to the instance of Hi
//   console.log(this);      // this will refer to the instance of Hi
// }

// new Hi() 


// Using 'this' inside an object method
// const user = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   tags: ['a', 'b', 'c'],
//   printTags: () => {      // arrow function does not have its own this
//     console.log(this);   // this will refer to the Window object
//   }
// }


// Using event listeners
// const body  = document.querySelector('body')

// body.addEventListener('click', (e) => {
//   console.log(e.target);     // target refers to the element that triggered the event
//   console.log(e.currentTarget);  // currentTarget always refers to the element to which the event handler has been attached
//   console.log(this);    // this will refer to the Window object
// })


// Using 'this' in a class
class User {
  constructor () {
    this.firstName = 'Anurag'
    console.log(this);   // this will refer to the instance of User
  }

  getUser() {
    console.log(this);   // this will refer to the instance of User
  }
}