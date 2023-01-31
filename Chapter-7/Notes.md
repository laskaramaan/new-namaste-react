### Q. Use of useEffect hook

A. useEffect is a hook which react gives us which is called after the component has rendered.
It takes two args -> a callback function and a dependency array

**Note:** If we dont pass the second arg then the useEffect is called after every render

**Notes:** useState is a hook that react gives so that you create local state variable inside a functional component. Never create usestate variable outside functional component

### Q. Can use more than one useEffect?

A. Yes, you can

## React-router-dom library

```
$ npm i react-router-dom
```

Configuire react-router-dom in App.js

```
import { createBrowserRouter } from "react-router-dom";
```

"createBrowserRouter" is function which we get from react-router-dom, it will help us create routing

```
const appRouter = createBrowserRouter([
  //this is the place where i will define what will happen when i load my /path
]);
```

Now, we need to provide this appRouter to the App with the help of RouterProvided

```
import {RouterProvider} from 'react-router-dom'

root.render(<RouterProvider router={appRouter}>);
```

```
import { useRouteError } from "react-router-dom";
```

### useRouteError ->// this is a hook that react-router-dom gives us, it returns any routing error

### Problem with anchor tag-> it refreshes the whole page

### SPA-> Single Page Application

The app does not refreshes .It doesn't make any network call on routing to different page

### Two types of routing are there:

1.  Client side routing
2.  Server side routing

In server side routing is the way that all our page come from server,
Suppose you are going to another route(going to about page) now this about page will come from server.

In older days the server side routing used to happen where on chaning the routing it used to make a network call and get the html,js ,css and then loading the page

But nowadays, we have something called as client side routing where network call doesn't happen

```
import { Link } from "react-router-dom";
```

react-router-dom gives us something known as "Link" which helps us to change route without reloading the page

```
e.g.
 <Link to="/about">
            <li>About</li>
 </Link>

```

**Imp Note:** Behind the scenes the Link tag also uses anchor tag only. But the difference that react-router-dom is keeping track of the things which helps us to achieve SPA

### Nested Routing

It is acheived with the help of something known as "children" in the router config section in App.js file

React-router-dom gives us access to something known as "outlet"
Outlet will be filled by the children configuration

### Dynamic routing

```
{
    path:"/restaurant/:id",
}
```

### useParams

```
import { useParams } from "react-router-dom";

```

at the end of the day useParams is a hook, it is used for dynamic routing

**Notes:**

```
Object.values() //-> it converts the objects into arrays

```
