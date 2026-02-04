// const user = {
//     name: 'Alice',
//     age: 30     
// }

// try {
//     console.log(user.address.city)
// } catch (err) {
//     console.log(err.message)
//   } finally {          // finally block runs regardless of try/catch outcome
//     console.log('Finished attempting to access user address')
//   }

//   console.log(3 + 4)
//   console.log('end')


async function makeAsyncRequest() {
  try {
    const url =
      'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

makeAsyncRequest()