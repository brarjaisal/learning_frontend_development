// Function vs Method
// Every method is a function but every function is not a method
// if we put a method inside an object it becomes function

const maths = {
    // E: 2.718281828459045,
    add: function (a, b) {  // add is a method here
        return a + b
    }
}

console.log(maths.add(4, 7))   // accessing a method using . becomes a function

const sub = {
    subtract: function(x, y) {
        return x - y
    },
    squared: function(p){
        return p * p //p ** 2
    },
    cube(q) {
        return q ** 3
    }
}

console.log(sub.subtract(12, 3))
console.log(sub.squared(4))
console.log(sub.cube(3))

const times =  {
    multiply: function(c, d) {
        return c * d
    }
}

console.log(times.multiply(3, 6))

