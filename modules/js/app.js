// utility function
import { result2 } from './results.js'

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

// export a function that will take a timestamp and return what day it is

console.log('from app.js ', result2())

export { add, sub }

// this is going to be your first-choice of import

// module --> a function or a group of similar functions,
