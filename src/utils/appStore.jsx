//This file is the redux store of our application

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//This step is to create and configure the redux store for our application.
const appStore = configureStore({
  //This reducer is used to modify the whole app store and not a particular slice. It contains all the reducers for all the slices.
  reducer: {
    //We configure the cart slice with the corresponding cart reducers we imported
    cart: cartReducer,
  },
});

export default appStore;
