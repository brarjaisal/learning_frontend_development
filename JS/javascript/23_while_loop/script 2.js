// Using while loop
console.log('Program Started')
// debugger

// let i = 0

// while(i <= 100) {
//     console.log(i)
//     i++
// }

const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

let i = 0

// while(i < 5) {
//     console.log(friends[i])
//     i++
// }

// while(i < friends.length) {
//     console.log(friends[i])
//     i++
// }

while(i < friends.length) {
    console.log(`${i + 1}. ${friends[i]}`)
    friends[i] = friends[i] + ' Doe'
    i++
}

console.log('Program Ended')