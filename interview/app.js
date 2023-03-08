// Frontend Developer

// HTML

// 1. What does a DOCTYPE do ? --> informing the browser about what our document is.
// 2. <script src="">, <script src="" async> and <script src="" defer>

// JavaScript

// 1. How would you optimize the loading time of a web page ?
// --> writing less js (minifying), optimizing our images, reducing the size (compression), defering js

// 2. Event Loop..
// --> mechanism in JS, handles execution of async code, it checks the call stack and the event queuem and when call stack is empty, it picks next code to execute

// 3. Array.forEach() and Array.map()

// it executes a function on each element
const numbers = [1, 2, 3, 4, 5];
// iterate over an array, and perform some operation on each element
numbers.forEach(function (number) {
  console.log(number)
})


// map can transform the array into a new array
const square = numbers.map(function (number) {
  return number * number
})

console.log(square)

  // 4. Immediately Invoked Function Expression (IIFE)
  // --> a function that is execute immediately after it is defined
  (function (name) {
    var message = 'hello'
    console.log(message + name)
  })('Jyoti')

// 5. duplicate([1, 2, 3, 4, 5])
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// spread operator
function duplicate(arr) {
  return [...arr, ...arr]
}
