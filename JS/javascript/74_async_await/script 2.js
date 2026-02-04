// async function makeRequest() {

// }

// function hi() {
//   console.log("hi");
//   throw new Error("Something went wrong");

//   console.log("This will not be logged");
// }

// async function makeRequest() {
//     throw new Error("Request failed");
// }

async function makeAsyncRequest() {
    const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

makeAsyncRequest().then((data) => {
    console.log(data);
})


// Explaining async/await
// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }
// fetchData().then(data => console.log(data));

// non-async function fetchData() {
//     return fetch('https://api.example.com/data')
//         .then(response => response.json());
// }
// fetchData().then(data => console.log(data));

// makeRequest()
//   .then(() => {
//     hi();
//   })

// why use async/await?
// 1. Cleaner syntax
// 2. Easier to read and maintain
// 3. Better error handling with try/catch

