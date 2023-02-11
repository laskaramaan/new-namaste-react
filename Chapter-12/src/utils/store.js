import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  //Remember what the cartSlice was exporting by default -> it was the reducers
  //So here in store we will add all the reducers
  reducer: {
    cart: cartSlice,
  },
});

export default store;
