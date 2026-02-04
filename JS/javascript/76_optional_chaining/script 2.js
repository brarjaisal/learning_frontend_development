const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        city: "New York"
    },
    getFullName: function() {
        return (user.firstName + " " + user.lastName);
    }
}

const a = "city"


// Traditional Way
// if (user.address) {
//     console.log(user.address.city)
// }

// console.log(user.address && user.address.city)

// Optional Chaining
// console.log(user.address?.city)
console.log(user.address?.[a])

console.log(user.getFullName?.()) 
