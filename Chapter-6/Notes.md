### Q.What is config driven UI?

A. Config driven UI is a very powerful way of building webapps.Config driven UI means that the config(configuration) or a big JSON object is sent from the backend.
[See we need a config to generate a UI, It can come from backend or you can keep it hardcoded in the frontend as well]

### Q. What is hook?

A.At the end of the day hook is a normal JS function,whenever there is something which is changing in the UI we need local state variable to handle that.

### Q. Why we use state Variables in react?

A. Bcz it cannot track the normal variables, it can only track the state variables.
We create state variable using useState hook

### Q. What makes react so fast?

A. It is bcz of it can do fast DOM maniulation.[the DOM manipulation is an expensive process]
It has something known as virtual DOM, Reconcilliation, Diff algorithm.

**Note:** When the state is changed ,react quickly re-render the whole component and it triggers the reconcilliation process which will update just the changes.

### Q. Micro-services

A. When You have build a big project like swiggy, uber etc. DO you think there will only a single react project? -> No.
In older days there used be a single big application inside which all the feature used to reside.-> This architecture is known as **monolith**
Nowadays, instead of having a single project we have small small different projects [UI,API,notification,logs etc]

### Q. Advantages of microservice architecture

A. Easy to maintain,
Separation of concern.

**Note:**The food ordering app that we are building is a UI microservice that we are building.

### Q. How these small porjects are connected in microservices?

A. generally,They have same domain name with different ports, thet can also have different domain.
e.g.->
Swiggy.com:3000 ->/
:4000 ->/dapi
:5000 ->/notification

### Q. How do we makle an API call in JS?

A. We can call the fetch function and pass-in an Api and it calls the API

```
fetch("")
```

### Q. ways to call API

A. There are 2 ways
First way->Suppose user laods the website -> make an API call(300ms)-> render the page(500ms)
Second way->Suppose user loads the website -> render inital things of the page -> make API call -> update the UI

**Second way** is the good way bcs of better user experience

React gives us the functionality to perform the second way,with the help of another hook i.e. useEffect hook

**useEffect hook**

useEffect is a function,you call this function by passing another function to it i.e. a callback function

```
useEffect(()=>{

})
```

### Q. What do you mean by callback function?

A. the callback function will not be called immediately, it will be called whenever useEffect want it to call.

### Q. When the component re-renders?

A. There are 2 times when component re-renders

1.  Either my state changes
2.  Or, my props changes

So, after every re-render the useEffect is called.But That's a bad way to call it ,We don't want to call it after every re-render.
So if you don't want to call it after every re-render then pass-in a dependency array into it

Therefore we can say that useEffect is a hook and we know that hook is a function, we call the useEffect function using two args-> the callback function and the dependency array

**Note:**
With empty dependeny array-> useffect will be called once after render
With some element inside dependency array -> useEffect is called once after initial render+ re-renders on change in dependency elemnt in array

### Q. Where should I make my API call?

```
useEffect(()=>{
// API call
},[])
```

### Q. How do we call API (good practice)

```

useEffect(()=>{
    getRestaurants();
},[])

async function getRestaurants () {
    const data= await fetch("api link") //It will return a readable stream

    const json= data.json() //that readable is converted to JSON data

    console.log(json)
}

And then we will call this getRestaurants function in the useEffect
```

plugin: CORS chrome -> it bypassed the CORS error

### Q. How to handle error inside useEffect

### Shimmer UI

A. User UX thing...shimmer UI resembles actual UI

### Conditional rendering

ShimmerUI and Api Ui

If restaurant is empty->shimmer UI
If restaurant has data->ctual API UI

### JS expression and statement
