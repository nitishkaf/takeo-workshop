// useEFFECT HOOKS:


// Side effects
// performed with the outside world. --> for the DOM
// Performing a side effect, sometimes, it will not give us a predictable result.

// Common side effects include:
// 1. Making a request to an API //fetch, axios
// 2. To interact with the browser API
// 3. using timing functions such as setTimeout and setInterval

// window.document.title

/**
 * Correct way to perform the side effect
 * 1. We import useEffect from 'react'
 * 2. We call it above the return statement
 * 3. We pass two argument: a) function b) array (dependency array)
 */


// already created class component based app
// functional component
// simple todo app --> functional component




// Create a Component
// API: https://jsonplaceholder.typicode.com/users
// 1. Fetch the data from that api
// 2. Render only 5 data in the DOM
// 3. Id & name
// Hint: To display 5 data, use a js function/method called splice
// Output:
/**
 * 1. Leanne Graham
 * 2. Ervin Howell
 * ....
 */
