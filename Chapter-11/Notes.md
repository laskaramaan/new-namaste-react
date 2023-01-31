### Q. What is the difference between state and props

A. State is a local state variable written inside a componen.
Props is the value passed from one component to its child component

### Props drilling:

When you pass-in data from parent->child->child

### Q. what is the Con of props drilling

A. re-renders a lot of components which does not even use that props, unnecessary code.

### Q.What if you want to pass data from child to parent?

A. Note that there are very less cases where you would need data from child to parent

But one way to achieve that is with the help of custom hook but its not a viable way

### Modifying state os siblings

A. We cannot change states of siblings
We need to give the control to parent component

### Lifting the sate up

### What is React Context:

If we need some data accessible anywhere in the app then we need a central place to keep those data.One of such system is React context,redux etc

### Q . Can't we create global javascript variables?

A. Problem-> react does not track those

**We will now create CONTEXT in utils folder**
(assume context as a big peice of object )
-> COntext is like a central store

```
import {createContext} from "react"
```

-> createContext is a function and it takes-in some data that you will need all across your application

```
import {useContext} from "react"
```

-> This useContext is hook-> function-> which is used in the component where need to use the context

### Q.If we have something like context then do we even need props?

A. Yes, we need both context and state/props, they have different use cases

Context-> we use context where we need data all across the app.(assume that context is the useState for the whole application)

### Context in class component

we use the context as a component

```
<UserContext.consumer>
```

### How we modify your Context

A. With the help of something called "provider"
