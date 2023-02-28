// Concatenation

// initialize it
let x;

const name = 'John'
const age = 30

x = 'Hello my name is ' + name + ' and i am ' + age + ' years old'

// template literals (ES6)
x = `Hello my name is ${name} and i am ${age} years old`

const s = new String('Hello world')
// const s = 'Hello World'

x = typeof s
x = s.length

x = s[1]

x = s.__proto__

x = s[0].toLowerCase()

x = s.toUpperCase()

x = s.charAt(1) // value from an index
x = s[1] // value from an index

x = s.indexOf(' ')

x = s.substring(0, 10)

x = s.slice(0, 4)

x = s.slice(-10, -5)

x = '   Hello World    '
x = x.trim()

x = s.replace('world', 'Nitish')

x = s.includes('Hell')

x = s.valueOf()

x = s.split('')

// console.log(x)

// NUMBERS

let y;

const num = 5

// const num = new Number(5)
y = num

// y = num.toString()

y = num.toFixed(3)

y = num.toFixed(2)

y = num.toPrecision(2)

y = num.toExponential(4)

y = num.toLocaleString('en-US')
y = num.toLocaleString('ar-EG')
y = num.toLocaleString('default')

y = Number.MAX_VALUE
y = Number.MIN_VALUE

console.log(y)





