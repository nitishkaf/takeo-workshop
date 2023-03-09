# JS - interview prep

1. How do you handle browser compatibility issues while developing a web application?
    
    When handling browser compatibility issues, I typically use feature detection to determine which features are available in the user's browser and then provide fallback solutions for those that aren't supported. I also use polyfills for new features that are not yet supported by older browsers. Additionally, I test my code on multiple browsers to ensure that it works correctly.
    
2. Can you explain the difference between synchronous and asynchronous code execution in JavaScript?
    
    Synchronous code execution is when each line of code is executed one at a time, and the next line of code cannot be executed until the previous one has finished. Asynchronous code execution, on the other hand, allows multiple tasks to be executed simultaneously. This is achieved using callbacks, promises, or async/await.
    
    ```jsx
    // Synchronous 
    function synchronousFunction() {
      console.log('Step 1');
      console.log('Step 2');
      console.log('Step 3');
    }
    
    synchronousFunction();
    ```
    
    ```jsx
    // Asynchronous using promise
    function asynchronousFunction() {
      console.log('Step 1');
    
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('Step 2');
          resolve();
        }, 2000);
      });
    }
    
    asynchronousFunction().then(() => {
      console.log('Done');
    });
    
    console.log('Step 3');
    ```
    
3. How would you optimize the loading time of a web page? Can you provide some examples?
    
    To optimize the loading time of a web page, I would use techniques such as minification, compression, and caching. I would also optimize the images and videos on the page by reducing their size and compressing them. Additionally, I would defer the loading of non-critical resources and scripts, such as analytics or social media widgets, until after the page has fully loaded.
    
4. How do you debug a JavaScript code that is not working as expected? Can you walk me through your process?
    
    When debugging a JavaScript code, I first identify the error message and line number in the console. I then use console.log statements to isolate the problem and determine the cause of the error. If necessary, I also use a debugger tool to step through the code line by line and identify the issue.
    
5. How would you implement responsive design for a website?
    
    To implement responsive design, I use media queries to adjust the layout and styling of the website based on the screen size and device type. I also use flexible units, such as percentages and ems, to ensure that the design is fluid and adaptable to different screen sizes.
    
6. Can you explain how the event loop works in JavaScript and how it affects the performance of a web application?
    
    The event loop is a mechanism in JavaScript that handles the execution of asynchronous code. It continuously checks the call stack and the event queue, and when the call stack is empty, it picks the next function from the event queue and adds it to the call stack. This process repeats indefinitely, allowing multiple tasks to be executed simultaneously without blocking the main thread.
    
7. How would you implement lazy loading of images on a web page? Can you provide some examples?
    
    To implement lazy loading of images, I use the Intersection Observer API to detect when an image is about to become visible on the screen. I then load the image using JavaScript and replace the placeholder image with the actual image once it has finished loading.
    
8. Can you explain the concept of closures in JavaScript? Provide an example where you have used closures in your code.
    
    Closures are functions that have access to variables in their parent scope, even after the parent function has returned. They are created when a function is defined inside another function and returned as a value. An example of using closures would be in creating private variables or functions in JavaScript.
    
    ```jsx
    function outerFunction() {
      let outerVariable = "Hello, ";
    
      function innerFunction(name) {
        console.log(outerVariable + name);
      }
    
      return innerFunction;
    }
    
    let greet = outerFunction();
    greet("John"); // Output: "Hello, John"
    greet("Sarah"); // Output: "Hello, Sarah"
    ```
    
    When we call **`greet`** with a name parameter, it still has access to the **`outerVariable`** defined in the parent scope of **`outerFunction`**. This is an example of a closure, where the inner function **`innerFunction`** has access to the variables of the outer function **`outerFunction`** even after the outer function has returned.
    
9. How would you handle security vulnerabilities in a web application? Can you provide some examples of security measures you have taken in your previous projects?
    
    To handle security vulnerabilities in a web application, I use secure coding practices, such as validating input, escaping output, and using HTTPS to encrypt data in transit. I also use third-party libraries and frameworks that are regularly updated to address security issues. Additionally, I use tools such as web application firewalls and penetration testing to identify and mitigate potential security threats.
    
10. Can you describe the main difference between the `Array.forEach()` loop and `Array.map()` methods and why you would pick one versus the other?
    
    
 | Method | Description |
| --- | --- |
| `Array.forEach()` | The `Array.forEach()` method is used to loop through each element of an array and execute a provided function once for each element. The `forEach()` method does not return anything, but it can be used to modify the original array. |
| `Array.map()` | The `Array.map()` method is also used to loop through each element of an array and execute a provided function once for each element. However, unlike `forEach()`, the `map()` method returns a new array with the results of calling the provided function on each element. |
| Use Case | `forEach()` is used for executing a function on each element of an array. `map()` is used for transforming the array into a new array based on the function provided. |
| When to Use | If you simply need to iterate over an array and perform some operation on each element, then you should use `forEach()`. If you want to transform an array into a new array based on the values in the original array, then `map()` is the method you should use. |

Array.forEach()

    ```jsx
    
    // Define an array of numbers
    const numbers = [1, 2, 3, 4, 5];
    
    // Use forEach to loop through each number and log it to the console
    numbers.forEach(function(number) {
      console.log(number);
    });
    
    // In this example, forEach() is used to loop through each number 
    // in the numbers array and log it to the console.
    
    ```
    
  Array.map()
    
    ```jsx
    // Define an array of numbers
    const numbers = [1, 2, 3, 4, 5];
    
    // Use map to create a new array with each number squared
    const squaredNumbers = numbers.map(function(number) {
      return number * number;
    });
    
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
    
    // In this example, map() is used to create a new array called squaredNumbers
    // with each number in the numbers array squared. 
    // The function provided to map() returns a new value for each element, 
    // which is then used to build the new array. The original numbers array 
    // is not modified.
    ```
    
11. What is the difference between `==` and `===`?
    
    The **`==`**operator checks for equality between two values, using type coercion to convert one or both values to a common type if necessary.
    
    ```jsx
    console.log(1 == '1'); // Output: true
    ```
    
    The **`===`**operator, on the other hand, checks for strict equality between two values, without any type coercion.
    
    ```jsx
    console.log(1 === '1'); // Output: false
    ```
    

1.  What is a promise? Where and how would you use promise?
    
    A Promise is an object in JavaScript that represents a value that may not be available yet but will be resolved at some point in the future. It is commonly used for asynchronous operations such as fetching data from an API, reading files, or performing long-running computations.
    
    A Promise has three states:
    
    - Pending: The initial state. The promise is neither fulfilled nor rejected yet.
    - Fulfilled: The operation completed successfully, and the promise has a resulting value.
    - Rejected: The operation failed, and the promise has a reason for the failure.
    
    They can be used in many areas of web development, including:
    
    - Fetching data from APIs
    - Reading and writing files
    - Waiting for user input
    - Animations and transitions
    - Loading and processing images and videos
    
    Promises are a powerful tool in JavaScript for handling asynchronous operations.
    
    ```jsx
    // create a new Promise that resolves after a delay of 2 seconds.
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved successfully!");
      }, 2000);
    });
    
    myPromise.then((result) => {
      console.log(result); // Output: "Promise resolved successfully!"
    }).catch((error) => {
      console.error(error);
    });
    ```
    
2. Write an immediately invoked function expression (IIFE)
    
    An immediately invoked function expression (IIFE) is a function that is executed immediately after it is defined.
    
    ```jsx
    (function() {
      var message = "Hello, world!";
      console.log(message);
    })();
    ```
    
    ```jsx
    // passing an argument to IIFE
    (function(name) {
      console.log("Hello, " + name + "!");
    })("Alice");
    ```
    
3. Given an array `duplicate([1, 2, 3, 4,5])` can you duplicate this array into one and make it `[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]`
    
    ```jsx
    function duplicate(arr) {
      return [...arr, ...arr];
    }
    
    console.log(duplicate([1,2,3,4,5])); // Output: [1,2,3,4,5,1,2,3,4,5]
    ```
    

1. Can you give an example for destructuring an object or an array?
    
    ```jsx
    // Object Destructuring 
    
    const person = {
      name: "Alice",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
      }
    };
    
    // Destructure the `person` object
    const { name, age, address: { city } } = person;
    
    console.log(name); // Output: "Alice"
    console.log(age); // Output: 30
    console.log(city); // Output: "Anytown"
    ```
    
    ```jsx
    // Array Destructuring
    const myArray = [1, 2, 3];
    
    // Destructure the `myArray` array
    const [a, b, c] = myArray;
    
    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    ```
    

# HTML Interview Prep

1. Describe the difference between `<script>`, `<script async>` and `<script defer>`.
    
    If you include a **`<script>`**element in your HTML without any attributes, the browser will block parsing of the HTML until the script has been downloaded and executed. This means that if the script takes a long time to download or execute, it can slow down the rendering of the page.
    
    ```jsx
    <script src="myscript.js"></script>
    ```
    
    If you include the **`async`** attribute in your **`<script>`**element, the browser will download the script in the background while it continues parsing the HTML. 
    
    The script may be executed out of order relative to other scripts or HTML elements on the page.
    
    ```jsx
    <script async src="myscript.js"></script>
    ```
    
    If you include the **`defer`** attribute in your **`<script>`**element, the browser will download the script in the background while it continues parsing the HTML.
    
    The script will not block the rendering of the page and will be executed in the correct order relative to other scripts and HTML elements on the page.
    
    ```jsx
    <script defer src="myscript.js"></script>
    ```
    
2.  What does a `doctype` do?
    - It ensures that the browser renders the document in standards mode, which means that it follows the official specifications of the HTML version being used.
    - It helps the browser parse the HTML document correctly by telling it which version of HTML is being used.

# Others

1. What is a CDN and what is the benefit of using one?
2. What are HTTP methods? List all HTTP methods that you know, and explain them.
    
    HTTP methods (also called HTTP verbs) are used to indicate the desired action to be performed on a resource identified by a URL. There are several HTTP methods available, but the most common ones are:
    
    - GET: retrieve information from the server
    - POST: submit data to the server
    - PUT: update existing resource on the server
    - DELETE: delete an existing resource on the server
    
3. What is the output of the following code:
    
    ```jsx
    console.log('one');
    setTimeout(function() {
      console.log('two');
    }, 0);
    Promise.resolve().then(function() {
      console.log('three');
    })
    console.log('four');
    
    // one four three two
    
    // Promise.resolve().then(function() { console.log('three') }) is 
    // also an asynchronous function, but it is resolved immediately
    ```
    

1. Consider the two functions below. Will they both return the same thing? Why or why not?
    
    ```jsx
    function foo1()
    {
      return {
          bar: "hello"
      };
    }
    
    function foo2()
    {
      return
      {
          bar: "hello"
      };
    }
    ```
    
    No, the two functions will not return the same thing.
    
    The reason is that in **`foo2()`**, the **`return`**statement and the object literal **`{ bar: "hello" }`** are separated by a line break, which is interpreted by JavaScript as a semicolon. This means that **`foo2()`** will return **`undefined`** instead of the object literal.
