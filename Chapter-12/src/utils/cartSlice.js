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
