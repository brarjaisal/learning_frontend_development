// GET request using fetch API
// fetch('https://dummyjson.com/products')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error (err));

// POST request using fetch API
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category: 'stationery',
//   })
// })
// .then(response => response.json())
// .then(console.log)
// .catch(err => console.error(err));


// Using XMLHttpRequest with Promises
// function makeHttpRequest(method, url) {
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'

//   const promise = new Promise((resolve, reject) => {
//     xhr.addEventListener('load', () => {
//       resolve(xhr.response)
//     })
//     xhr.addEventListener('error', () => {
//       reject('request failed')
//     })
//   })

//   xhr.open(method, url)
//   xhr.send()

//   return promise
// }

// callback hell example
// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })

// Using Promises to avoid callback hell
// makeHttpRequest('GET', 'https://dummyjson.com/users')
//   .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
//   .then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
//   .then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
//   .then((userData) => console.log(userData))
//   .catch((err) => console.log(err))

// using fetch API to make HTTP requests
fetch('https://dummyjson.com/users')
  .then((response) => response.json())
  .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
  .then((response) => response.json())
  .then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
  .then((response) => response.json())
  .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
  .then((response) => response.json())
  .then((userData) => console.log(userData))
  .catch((err) => console.log(err))  