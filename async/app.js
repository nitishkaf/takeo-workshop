// Synchronous --> its syncing, one after another, in order
// JS handle one task at one time..
// Single Threaded

// console.log('Hello 1')

// console.log('Hello 2')
// // Network Request
// // Printing that network requested data here
// console.log('Hello 3')

// ES6 (current standard) // 2015 JS

// const start = () => {
//   console.log('Start')
// }

// const end = () => {
//   console.log('Hello from End Function')
//   start()
//   console.log('End of end function')
// }

// end()


// function add() {
//   console.log('before setTimeout')
//   setTimeout(function () {
//     console.log('inside setTimeout')
//   }, 2000)
// }

// function data() {
//   return console.log('Nothing here')
// }

// High Order Function / HOC
// function result(data) {
//   data()
// }

// setTimeout(function () {
//   console.log('ouside function')
// }, 5000)

function add(a, b, callback, callback2) {

  setTimeout(function () {
    return callback(a + b, callback2)
  }, 2000)
}

function result(data) {
  console.log('result ' + data)
}

function result2(a) {
  console.log('a: ', a)
}
// console.log('1')
// console.log('2')
// add(1, 2, result, result2)
// console.log('3')
// console.log('4')

// CALLBACK HELL

// ASYNCHRONOUS JAVASCRIPT
// PROMISE ==> ES6 (2015)
// Technique to perform asynchronous operations.
// 2 different state: Resolved, Reject
// Resolved -> Fulfilled, done the work
// Reject -> Not fulfilled
// Pending -> Reject | Resolved | In progress

function doSomething() {
  return new Promise((resolve, reject) => {
    // We can any asynchronous task
    // Network Req
    // File handling, etc.
    let error = true;
    if (!error) {
      resolve('Success')
    } else {
      reject('Failed')
    }
  })
}

// Error Handling -> Catch -> Promise
console.log('hello 1')
doSomething()
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((response) => console.log(response))
console.log('hello 2')

// promiseFunction().then((a)=>{}).then(()=>{}).then(()=>{}).catch(()=>{})


// async await --> Promise --> asychronous

