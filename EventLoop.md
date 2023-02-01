## Event Loop

### How JS Engine Executes the Code using Call Stack

A. JS is synchronous, single threaded language, It has one **callstack** and it can do only one thing at a time.
This Callstack is present inside the JS engine. And all the code of JS is executed inside this callstack

Suppose we need to execute the below piece of code:

```
function a(){
    console.log("a");
}
a()
console.log("End");
```

Whenever any JS code runs a global execution context is created and this global execution context is then pushed inside the call stack.
Now inside that global execution context the above code will run line by line

So the o/p of the above code would be:

```
a
End
```

### Main Job of the Call Stack

A. So we can say that the main job of the call stack is to execute whatever goes inside it.
It does not wait for anything, if you give it any thing it quickly executes that

### How does JavaScript perform async tasks

A. By nature JS cannot perform async tasks.
It needs super power for that which is given by the browser.
JS engine is inside the browser and inside the JS Engine we have the call stack

### Web APIs in JS

A. To access all those super powers we need web APIs
examples:

1. setTimeout()
2. DOM APIs
3. fetch()
4. local storage
5. console

### How setTimeout Works behind the scenes in Browsers

A.
Let's understand that with the help of below code snippet

```
console.log("start");

setTimeout(function cd(){
    console.log("callback")
},5000)

console.log("End")

```

Whenever you try to execute any JS code, it creates a global execution context and pushed inside the callstack, now the whole above code will run line by line

1.

```
console.log("start");
```

So when we write console.log() in the program it calls the console web api which ultimately logs something inside the console.

**Console**

```
start
```

2.

```
setTimeout(function cd(){
    console.log("callback")
},5000)

```

->This setTimeout will call the setTimeout() web api which give us access to browser's timer feature

-> The setTimeout takes-in a callback function and a delay

So when yo send the callback function to setTimout api it registers a callback (lets name it "cb") and since it has a delay so it will start the timer as well

3.

```
console.log("End")
```

JS code will move to the above line and it will log the console.

**Console**

```
start
End
```

Now we are done with executing our code, so the global execution context will pop of the stack. But meanwhile that timer was still running, now once the timer is expired that callback function(cb) needs to be executed and we know that all the JS code is executed inside the callstack, we somehow need that "cb" inside the callstack

### Event Loop & CallBack Queue in JS

So when that timer expired the "cb" is put inside the **callback queue**.
The job of **Event loop** is to check the callback queue and put items present isnide the callback queue insie the callstack [So we can say that the event loop acts like a gate keeper who checks whether there is anything insdie the callback queue and if we have something then it will push that to callstack]

The **Callback** queue operates on the **FIFO** principle.

Now the callstack will quickly execute "cb"

**Console**

```
start
End

//After 5000ms
callback
```

### More on Event Loop:

Event loop has just one job that is to continuously monitor the callstack and callback queue.
If the callstack is empty and the event sees that there's a function inside the callback queue waiting to be executed, event loop takes that function and push it inside the callstack.

### How fetch() function works:

A. fetch basically requests a api call, the fetch function returns a promise and we have to pass a callback function which will be executed once this promis is resolved

```
console.log("start")
setTimeout(function cbT(){
    console.log("cb setTimeout")
},5000)

fetch("API call")
.then(cbF(){
    console.log("cb Netflix")
})

console.log("end")
```

There is something known as **microtask queue**
-> It has higher priority than callback queue
-> All the callback functions that come through promises and mutation observer will go inside this microtask queue

**Console**

```
start
End

cb setTimeout //comes from microtask queue

cb Netflix  // comes from callback queue

```
