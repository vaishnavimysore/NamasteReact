// This file is to create separate slice for our cart component in the redux store.

import { createSlice } from "@reduxjs/toolkit";

//We are creating a slice in the redux store using createSlice func from redux toolkit, This takes an object as input
const cartSlice = createSlice({
  //We give a name to the slice
  name: "cart",
  //We give an initial state/value to our slice, ie an object.
  initialState: {
    //We give an empty array as state to items
    items: [],
  },
  //We write our reducer function here for every corresponding action, ie an object as well
  reducers: {
    //Here addItms is a reducer function for adding items into cart action. This function gets state and action as argumnets
    addItems: (state, action) => {
      //We use the current state of the items variable and then push the payload sent while adding action is triggered
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //We use the current state of the items variable and then pop the last item
      //Splice func of JS is used to remove data of an array, where we mention the index to be removed(action.payload) and also how many
      // items to be removed (ie 1 which is mentioned)
      state.items.splice(action.payload, 1);
    },
    clearCart: (state, action) => {
      //We set the length of the items to 0
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer; //Here we export the reducers of the cart slice
export const { addItems, removeItem, clearCart } = cartSlice.actions; //Here we export the actions of the cart slice as named exports
