# Let's get hooked

we made a new called "scr", in this folder we keep all the files related to our app

**There are two ways of exporting**
e.g. export default Title [if we are using "default" that means we can export only one thing]
But suppose you want to export mutliple things from the same file then we can use named import,
and while importing we have to use {}.

**We also create a config file indide the src folder.**
Q.What we put inside the config file?
I will put all the hardcoded things into the config file

**Note:** While importing any file "../" means?

**Build searchbar**

**State variable**
Whenever you have to change any variable inside react we cannot use the normal variable , we would have to use state varaiable

**useState hook**

The state variable are created using useState()

### Q. What is a hook?

A. At the end of the day hook is just a normal function, these hooks gives us different functionalities, there are different types of hooks that we will use

We import usestate from react library

```
import {useState} from "react";

const [searchText,setSearchtext]=useState(); // returns [variable name, function to update the variable]



//useState() function returns an array,the first element of this array is the varaiable name
//and the second element in this array is the function with the help of which we will update the variable
//SearchText is a local state varaible
//useState() is imported  as named import from react library

```

### Q. What is the use of useState()

A. useState() is used to craete local state variables

**Note:** "e.target.value => whatever you write in the input

### Q. Why do we need state variable?

Bcz react has no idea what is happening to the normal variables, react doesn't keep track of the normal variables.
React keeps track of the state variables
