## Machine coding Interview

### Build Youtube application

- **Requirements clearificaton**

  - What features that we need to build
  - Tech-stack that we will use
    - Tailwind css
    - redux
    - React-router-dom for routing
    - what bundler we will be using

- **Now plan**

  - ![Planning](Planning.png)

- **Now execution**

Step-1: Create a react app

```
$ npx create-react-app //We are executing create-react-app package
```

Step-2: Install tailwind and configure it

Step-3: Start writing code

-> Code Structure:

- Head
- Body
  - Sidebar
    - MenuItems
  - MainContainer
    - ButtonsList
    - VideoContainer
      - VideoCard

-> Now build redux-store:

- install redux-toolkit

```
$npm i @reduxjs/toolkit

$npm i react-redux
```

- create store.js inside utils folder

store.js

```
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({

});

export default store;
```

- create appSlice inside utils folder

```
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

});
```

- provide my redux-store to the app

App.js

```
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
}
```

- go to head.js component for implementing toggle menu
  use dispatch
- go to sidebar.js
  use selector

- Let's build buttonList now

- Let's build videoContainer now

  - We will use api to show videos
    https://developers.google.com/youtube/v3/docs/videos/list

    - Put the api endpoint in constants.js file

    - Now render the api info in videoContainer

- Lets configue react-router-dom now

```
$ npm i react-router-dom
```

- let's build watch page(on clicking on any video thumbnail it should redirect to the video playing page) now
