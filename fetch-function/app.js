// fetch(`https://api.github.com/users/${username}`)
//   .then(res => res.json())
//   .then(data => console.log({
//     name: data.name,
//     followers: followers,
//     following: following,
//     location: location
//   }))
//   .catch(err => console.log(`Error: ${err}`))


// Simple Promise Function
function doSomething() {
  return new Promise((resolve, reject) => {
    // We can any asynchronous task
    // Network Req
    // File handling, etc.
    let error = false;
    if (!error) {
      resolve('Success')
    } else {
      reject('Failed')
    }
  })
}

// Our own fetch Web API
// take a url
// return : resolve -> data it gets from the webpage
// return : reject -> return us error state
// catch -> catch that error

function myFetchFunction(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    // document -> properties, attributes, methods --> DOCUMENT (HTML)
    // XMLHttpRequest --> making a network request


    request.open('GET', url); // GET, POST, PUT ???

    request.onload = function () { //loading -> my work is done fetching
      resolve(request.responseText)
    }

    request.onerror = function () {
      reject(request.responseText) // 404 page not found
    }

    request.send() // GET
  })
}

// our promise that will take url and return a response as a text
myFetchFunction('https://api.github.com/users/nitishkaf')
  .then(res => console.log('My fetch response', res))
  .catch(err => console.log(err))


// provided by the browser
fetch(`https://api.github.com/users/nitishkaf`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(`Error: ${err}`))

// js library that does network req, more advance than fetch
axios.get('https://api.github.com/users/nitishkaf')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
