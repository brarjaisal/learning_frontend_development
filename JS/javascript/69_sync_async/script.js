// Sync code definition: Synchronous code executes in a linear fashion, one line at a time, blocking execution until each operation completes.
// Async code definition: Asynchronous code allows other operations to run while waiting for an operation to complete, enabling non-blocking execution.
// Example of synchronous code
// console.log('Start')
// for (let i = 0; i < 1e9; i++) {} // Blocking operation
// console.log('End')

// Example of asynchronous code
// console.log('Start')
// setTimeout(() => {
//   console.log('This runs after 2 seconds')
// }, 2000)
// console.log('End')

// AJAX - Asynchronous JavaScript and XML
// Used to communicate with servers without refreshing the page
// Commonly used to fetch data from APIs

// Using Fetch API (modern way)
const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  // fetch('https://dog.ceo/api/breeds/image/random')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     image.src = json.message
  //   })

  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    console.log(xhr.response)
    image.src = xhr.response.message
  })

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})

// setTimeout(() => {
//   console.log('Hii');
// }, 4000);

// const blockingBtn = document.querySelector('.blockingBtn')

// blockingBtn.addEventListener('click', () => {
//   const startTime = Date.now()
//   let currentTime = startTime

//   while(startTime + 4000 > currentTime) {
//     currentTime = Date.now()
//   }
// })

// console.log('4 seconds have passed - blocking operation complete')