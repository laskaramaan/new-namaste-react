# We will build cart today

## Revision of previous lecture

### Two layers in a webapp

1. UI layer

2. Data layer

### What is context

-> context is a central place -> The context can be accessed by any component in the app and any component can modify the context

<hr/>

Instead of creating different contexts we can create a redux store

## redux

When your app grows a lot then libraries like redux comes into picture.

### When to use redux and when to use context?

-> See, when your app is small then we can use context but when the app grows and it becomes too big then it's wiser to use redux because redux makes it more easier to manange data inside the app.

[for small apps use context, for big apps use redux]

**Advantages of redux:**

1. It Manages our data layer

2. To avoid prop drilling

**Disadvantages of redux**

1. It is complex to setup

2. It has a huge learning curve

3. Lot of boiler plate code is needed

To make developer's life a bit easier, redux came up with **redux toolkit**

### What is the difference betwenn redux and redux-toolkit

Redux-toolkit solves the following problems of redux:

1. "configuring a reduxstore is too complicated"

2. "I have to add a lot of packages to get redux to do anything useful"

3. "Redux required too much boiler plate code"

### Architecture of redux

### We will study redux toolkit

### At the end of the day,What is redux store ?

-> Redux store is like a big global object which have different sections

-> It is a separate entity (which means It is not tied to any perticular component)

### Should we have multiple stores in our app?

-> No, we will maintain a single redux store for holding everything

-> We will have logical separation i.e.(slices) in that store. [user slice, authentication slice, cart slice etc]

-> We can say that slice is a small portion of store

**Note:** Our components cannot directly modify the store

-> I will have to **dispatch** an action to modify the store

let's say the action is "add items" which will add items in the cart => it will call a function -> this function will modify our cart slice in the redux store

-> That function is called **reducer**

Now, we have updated the slice inside the redux store but how do we read it and show in the compnent now?

-> We do this with the help of **selector**

-> When we use selector we say "subscribing to the store"

https://webwhiteboard.com/board/lAqUvzalmyDarVtz1UpTUK5cZ8NyrSIL/

**FLow:->**When we click on the "+" button , it dispatch an action which calls a reducer function that updates the slice in the redux store . Then we read that from redux store using selector which will update my cart

### What is selector at the end of the day?

-> Selector is a hook

### Why we cannot directly modify the store?

-> When there is a large application you don't want to random component to randomly modify our store. We need to keep track of the change in state

```
$ npm i @reduxjs/toolkit
$ npm i react-redux
```

### Why two libraries?

-> The **@reactjs/toolkit** is the core library of redux and **react-redux** is the bridge betwen react and redux

### Lets start building our store

Create store.js inside utils folder

store.js file

```
import { configueStore } from "@reduxjs/toolkit";

const store = configueStore({

});

export default store;

```

Now we need to **provide** this redux store to our app

App.js

```
import { Provider } from "react-redux";
import store from "./utils/store";

<Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          {/* Outlet */}
          <Outlet />
          <Footer />
        </UserContext.Provider>
</Provider>
```

Now, let's create slices

Create cartSlice.js inside utils folder

cartSlice.js

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
});
```

Now lets add reducers

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers:{
    addItem:(state,action)=>{

    }
  }
});

```

Now after writing the actions and reducers we need to export them as well

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //The below state is the initial state
    //The below action is the data which is coming in
    addItem: (state, action) => {
      //when we will be dispatching an action then the data will come like this
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    //Below we don't need action.payload
    clearCart: (state) => {
      state.items = [];
    },
  },
});
//exporting the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//exporting the reducer
export default cartSlice.reducer;

```

So by now we have created the slice, now we need to put this slice inside the redux store

store.js

```
import { configueStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configueStore({
  //Remember what the cartSlice was exporting by default -> it was the reducers
  //So here in store we will add all the reducers

  reducer: {
    cart: cartSlice,
  },
});

export default store;

```

### All the steps:

```
/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my stor to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */

```

Now, we need to **subscribe** to our store

-> we will have to use useSelector in that particular component

Header.js

```
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  const cartItems = useSelector();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">

          <li className="px-2">Cart- 4 items</li>

        </ul>
      </div>

    </div>
  );
};

export default Header;
```
