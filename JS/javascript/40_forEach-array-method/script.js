// forEach array method
// The forEach() method in JavaScript is an iterative method primarily used to execute a provided callback function once for each element in an array or a Set object. 
// It is a convenient way to iterate over collections and perform actions on each item.


const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']


// for(const fruit of fruits) {
//     console.log(fruit);
// }


fruits.forEach(function(fruit) {      // forEach is a method not defined by us used for looping
    console.log(fruit);
})

fruits.forEach((fruit) => {       // this is quite common using the arrow function
    console.log(fruit);
})

function abc(el) {          //el is short for element
    console.log(el);
}

fruits.forEach(abc)