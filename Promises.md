## Promises

Primise is an object which represents eventual completion or failure of an asynchronous operation

    **Pending**, **Fulfilled**, **Rejected**

```
const promise =new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve("Welcome to uncommon geeks")
},2000)
})

promise.then(data=>{
console.log("promise success"+ data)
}).catch(err=>{
console.log("Error is" + err)
})
```

To tackle with the problem of promise chaining we can use async await

```
async function testPromise1() {
  return Promise.resolve(1);
}
async function testPromise2() {
  return Promise.resolve(2);
}
async function testPromise3() {
  return Promise.resolve(3);
}


async function test() {
  console.log('Before async await'); // 2

  const num1 = await testPromise1();
  const num2 = await testPromise2();
  const num3 = await testPromise3();
  console.log(num1 + num2 + num3);
  console.log('After async await');//4
}
console.log('Before calling test'); // 1
test()
console.log('After calling test'); // 3
```

Example of async function with try, catch, finally block

```
async function fetchData() {
  try {
    // Simulate an asynchronous operation that may throw an error
    const response = await fetch('https://example.com/data');
    const data = await response.json();

    // Process the data
    console.log('Data:', data);
  } catch (error) {
    // Handle errors that occurred in the try block
    console.error('An error occurred:', error.message);
  } finally {
    // Code in the finally block will always run, whether there was an error or not
    console.log('Fetching operation completed, regardless of errors.');
  }
}

// Call the async function
fetchData();
```

```
Promise.all([]) <-- it will call the promises parallelly instead of sequentially

Promise.allSettled([])
```

### Q. Difference between async/await and promises

Async/await provides several benefits over Promises. It simplifies the syntax of handling asynchronous operations by removing the need for chaining .then() and .catch() methods. Async/await also provides better error handling, as errors can be caught using try/catch blocks, which provides a more familiar syntax to developers.
