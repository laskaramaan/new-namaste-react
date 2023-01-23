### Nested routes

e.g. /about/profile

children of children

```
const appRouter = createBrowserRouter([
  //this is the place where i will define what will happen when i load my /path
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, //404 error page is shown
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
children:[
  {
    path:"relativepath" // without any "/"
    element:
  }
]
      },

    ],
  },
]);
```

## Important for Interview

### Class based components

### Q. What is class-based component?

A. At the end of the day, a class based component is a JS class only

```
class Profile extends React.Component {}
//React.Component specifies that it is a class based component and not a normal class
```

```
import React from 'react'
```

React.Componennt comes from the React

**Notes:** The most important part of a class based component is your render method

```
class Profile extends React.Component {
  render(){
    return()
  }
}
```

**Remember that you cannot create a class-based component without a render method**
This render method returns JSX

And then we will export it just like we normally do.

### Q. How do we pass props in class based compoennts?

A. With the help of "this"

### Q. How do we create state in class components?

A. A class has constructor, wheever we need to make a state variable in class components we have to make constructor(props) and super(props)

```
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // create state here
  }

  render() {
    return (
      <div>
        <h1>This is a class compoent</h1>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Profile;

```

### (DO RESEARCH) why do we need to use super(props)?

### Q. Why am I creating a constructor?

A. Constructor is a place which is used for initialisation that's why we will create state here with the help of this.state

### this.state

### this.setState

### React life cycle

fist of all the constrctor is called and then it is rendered

### componentDidMount method

```
componentDidMount()
//This function will be called after render
```

fist of all the constrctor is called and then it is rendered then componentDIdMount is called

**Note:** We make API calls in componentDidMount (Reason?)

### Q. where do you initialize state?

A. Inside constructor . Reason-> when the class is initialized for the first , constrtuctor is called by default on the intialization

**React lifecycle diagram** https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

When react is rendering things up-> there are two phases

1. Render phase[It includes-> constructor and render()]
2. Commit phase[It includes-> componentDidMount]
   Commit phase is the place where react is actually modifying the DOM

**Note:** We can make componentDidMount as Async

### ComponentDidUpdate()

It will be called after every next render other than first render

### ComponnentWillUnmount()

->To remove the mounted components.
Unount will be called just before removing the component from the DOM[Basically when we go to some other page]

**Disclaimer:**Never compare react life cycle methods with functional components

### in useEffect what we need to do to unMount?

```
useEffect(() => {

  return () => {
   //this function is called to unMount
  }
}, )
```
