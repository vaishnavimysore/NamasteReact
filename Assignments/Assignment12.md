Assignment 12

1. useContext vs Redux?
   A:
   UseContext is the hook from React for state management. We can pass down data to other components without passing down to every component manually or prop drilling. This hook allows to use the context variables defined at higher scope and provide it to other components in smaller applications. While Redux is a library for state management, which provides a sophisticated way to manage state in large applications with multiple data sources and multiple data exchanges between many components. Also the use of Redux can improve the predictability and testability of your application, as all state updates are managed through a single store.

2. Advantages of Redux tool kit over Redux.
   A:
   Redux is a single store for global state. Redux Toolkit is a set of tools that helps simplify Redux development.
   Configuring the global store in RTK can be easy than doing the same in plain Redux.
   In Redux, you need to configure the dev tools separately, while RTK has it all configured for testing, logging or analyzing.
   In Redux for asynchronous programming you need to add Redux Thunk separately, but RTK has it already built in.
   Redux requires alot of boiler plate , while RTK doesnt need as it has configureSTore, reducer, action functions.
   Redux Toolkit uses the Immer library under the hood, making it easier to write immutable updates to the state.

3. Explain Dispatcher.
   A:

   Dispatcher is used when we need to update some data to the Redux store by an action related to it. Dispatcher is a hook in React-redux for dispatching actions to the reducers. Dispatch has access to currentState and reducer.
   When dispatch is called, it receives an action object as an argument.
   A reducer function, when invoked, is passed two arguments - state (meaning the current state) and action.
   Dispatch is a function provided by the store that allows you to send an action to update the state of your application.When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

4. Explain Reducer.
   A:
   A reducer is a function that takes in the current state of an application and an action as arguments (if needed, we can pass action), and returns a new state based on the action. The reducers are the pure functions that contain the logic and calculation that needed to be performed on the state.
   Pure function: A function is said to be pure if the return value is determined by its input values only and the return value is always the same for the same input values or arguments. A pure function has no side effects

5. Explain Slice.
   A:
   A Slice is like a partition of the redux store for a particular component or a feature. It contains all the related reducers and actions for this feature. The name comes from splitting up the root Redux state object into multiple "slices" of state.

6. Explain Selector.
   A:
   A selector in redux is a way to select the slice from the redux store and also the particular global variable/object needed in our implementation. By selecting the required variable using hook, it means that we are subscribing to that store/event. So whenever that variable/object changes in the store, this will automatically update the latest value in the component it is subscribed too.

7. Explain createSlice and its configurations.
   A: Redux Toolkit has a function called createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, initial state, write an object that has some reducer functions in it, and it generates the corresponding action code automatically. createSlice needs us to pass in the initial state value for the reducers, so that there is a state the first time it gets called. We need to give reducer functions, and that corresponds to the different action types that were dispatched by updates in the app.

   ```
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

   ```
