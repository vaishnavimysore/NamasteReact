Assignmnet 8:

1. How do you create nested routes, react-router-dom configuration?

A:
Nested routes: We add the nested routes under the "children" element in the router configuration created using "createBrowserRouter"
```
const appRouter = createBrowserRouter([ 
  {
    path: "/", (this is the home route and the parent element)
    element: <App />, (this is the component that will be rendered for the home route)
    errorElement: <Error/>, (this componenr will be rendered in case of an error)
    children: [         (This the child element where all the paths to be nested are added with path and the component to be rendered)
      {
        path: "/",      (Child element's route)
        element: <Body />, (Child element'c component to be rendered on the specified route)
        children: [        (subchild)
          {
            path:"/about"     (Subchild route)
            element: <About/>, (Subchild component)
          }]
  }])
```
Imp Links: https://reactrouter.com/en/main/routers/create-browser-router

2. Write about createHashRouter, createMemoryRouter from react-router-dom from documents:

 A:
 createHashRouter:It uses the hash portion of the URL to route to our page accordingly. It works by updating the URL in the address bar with a hash symbol (#) followed by a route, also known as a hash fragment.
When the route changes, the SPA can use JavaScript to update the content displayed on the page without performing a full page refresh. 
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
Apart from this everything else is same as createBrowserRouter().

Imp Links:
 https://www.w3schools.com/jsref/obj_location.asp
 https://www.w3schools.com/jsref/prop_loc_hash.asp
 https://upmostly.com/tutorials/what-is-hash-routing
 https://reactrouter.com/en/main/routers/create-hash-router
 https://www.geeksforgeeks.org/reactjs-types-of-routers/

createMemoryRouter: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook,
                    but can also be used for running React Router in any non-browser environment.

 3.What is the order of the lifecycle method calls in class based compoennts?

 A:
 Mounting cycle:
  1. Constructor() -(render phase) - Called when the component is instantiated 
  2. Render()      -(render phase) - Initial render of our app happens here.
  3. DOM updation/manipulation -(commit phase) - DOM is manipulated with the data from the constructor
  4. componentDidMount()       -(commit phase) - API calls are made here and then state variables ie, the setState variables are updated.

Updating cycle:
  1. render() -(render phase) - Rendered now with the data from the API call
  2. DOM updation/manipulation -(render phase) - DOM manipulation is done with the data from the API call
  3. componentDidUpdate() -(commit phase) - This is called after every re-render and also re-renders based on a condition.

UnMounting cycle:
  1. componentWillUnmount() -(commit phase) - This is called right before the change of page happens, to clear the data called in componentDidMount
                                               before moving to another page.
     
Lifecycle diagram link:   https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
imp links: https://www.freecodecamp.org/news/react-component-lifecycle-methods/


4. Why do we use componentDidMount()?

A:
The componentDidMount() method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, 
perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.

5. Why do we use componentWillUnmount? Show with an example.

A:
This method is called just before the component is removed from the DOM. It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, 
or clearing any data structures that were set up during the mounting phase. After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed.

For Example:

```
componentDidMount() {
    this.timer = setInterval(() => {console.log("hey")},1000)
  }

```
Here a timer is created to print "hey" after every 1000ms. When this component is rendered and compoenntDidMount() is called, this timer starts. This
timer will keep running even if we leave the page and when different component is loaded. If we render the component with this time again, the timer doubles,
and this keeps on running and eventually creates a load on the browser and this is inefficient in performance.

So we call the componentWillUnmount() before the change of the page, to clear such intervals, timers and data as follows.

```
componentWillUnmount(){
  clearInterval(this.timer)
}
```

6. Why do we use super(props) in our constructors?

A:
When we use super(props) in our constructors , it calls the constructor of parent's class, ie the React.Component Class and we can access the parent properties.
It allows us to use "this.props" as When you pass props to super, the props get assigned to this.

imp links: https://overreacted.io/why-do-we-write-super-props/
            https://dev.to/voralagas/super-props-in-react-5h7i
            https://dev.to/voralagas/super-props-in-react-5h7i

7. Why cant we have the callback function in useEffect as async?

A:
We can not directly make the callback function in useEffect hook async because of two reasons:

async functions implicitly returns a promise.

useEffect expects its callback to either return nothing or a cleanup function.

So, basically React.js useEffect hook expects a cleanup function returned from it which is called when the component unmounts.





 
