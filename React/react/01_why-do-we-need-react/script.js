const firstBasket = document.querySelector('.basket-1 span')
const secondBasket = document.querySelector('.basket-2 span')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const totalApples = 10

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArrow.addEventListener('click', () => {
    if(firstBasketAppleCount > 0) {
        firstBasketAppleCount--
        firstBasket.innerText = firstBasketAppleCount
        secondBasketAppleCount++
        secondBasket.innerText = secondBasketAppleCount
    }
})

leftArrow.addEventListener('click', () => {
    if(secondBasketAppleCount > 0) {
        firstBasketAppleCount++
        firstBasket.innerText = firstBasketAppleCount
        secondBasketAppleCount--
        secondBasket.innerText = secondBasketAppleCount
    }
})

// This is Vanilla JavaScript code to manage the state of two baskets of apples. It allows the user to move apples between the two baskets using left and right arrow buttons. The total number of apples is fixed at 10, and the code updates the count of apples in each basket accordingly when the buttons are clicked.
//  However, as the application grows in complexity, managing state and updating the UI can become cumbersome. This is where React comes in, providing a more efficient way to handle state and UI updates through its component-based architecture and virtual DOM.
// In React, you would typically create a component to manage the state of the baskets and render the UI based on that state. This allows for a more declarative approach to building user interfaces, making it easier to reason about and maintain your code as your application grows.
// In summary, while the above code works for a simple application, using React can provide a more scalable and maintainable solution as your application becomes more complex. React's component-based architecture and efficient state management can help you build more robust and interactive user interfaces with less effort.
// 3 benefits of using React:
// 1. Component-Based Architecture: React allows you to build encapsulated components that manage their own state, making it easier to reuse and maintain code.
// 2. Virtual DOM: React uses a virtual DOM to efficiently update and render components, improving performance and providing a smoother user experience.
// 3. Unidirectional Data Flow: React's unidirectional data flow makes it easier to understand how data changes in your application, leading to better debugging and more predictable code.
