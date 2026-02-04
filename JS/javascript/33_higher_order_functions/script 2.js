// Higher oder functions

function a(b) {
    console.dir(b)
    // console.log(typeof b)

    b()
}

// a('Hey')
// a({username: 'Jaisal', userAge: 29})
// a([1, 7, 8, 9])

// console.dir(a)  //used to console function in object form, output f a(b)

// function sayHi() {
//    console.log('Hiiiiiii')
// }

//a(sayHi) // a function becomes a higher order function if a function is passed within a function

//function inside a function can also be written as follows and it's called callback function:
a(function() {
    console.log("Supp")
})

// so 'a' is a higher order function and function() {console.log("Supp")} is a callback function