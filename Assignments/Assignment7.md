ASSIGNMENT 7

1. What are various ways of adding images into your app. Explain with examples.

A:
  - By using a CDN URL :
     Using the full URL of the image for the web (CDN) or any public images.
     Ex:
    ```
     <img className="Logo" src="https://reactjs.org/logo-og.png" />
    ```
     The proper way is to create a constant for the URL in constant file of the the project folder and then importing it.
    
    ```
    export const CDN_URL = "https://reactjs.org/logo-og.png" (in constants.jsx file)

    import { CDN_URL } from "../utils/constants";(in the file where we use it)
    
    <img className="Logo" src={CDN_URL} />    
    ```
  
 - By using dowmloading the image to your project and then importing it in the file you need.
   Ex:
   ```
   import imgLogo from "../foodDeliveryLogo.jpeg";
   
   <img className="Logo" src={imgLogo} />
   ```
     The proper way is to download the image to an images folder in the project and then using. 
     Ex:
     ```
     import imgLogo from "../../images/foodDeliveryLogo.jpeg";
     
     <img className="Logo" src={imgLogo} />
     ```

2.  What will happen if we do console.log(useState()) ?

A: 

useState by default simply does one thing and one thing only, set the new state and cause a re-render of the function. 
It is asynchronous in nature so by default, methods running after it usually run.

From your example, on a fresh load of the page, typing 's' causes useState to change the state, but because it is asynchronous, console.log will 
be called with the old state value, i.e. undefined. 
So it prints undefined and function to set it .

Imp Link : https://jsramblings.com/are-you-logging-the-state-immediately-after-updating-it-heres-why-that-doesnt-work/
            https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
            https://medium.com/@jlangkammer/how-to-properly-log-state-change-in-react-588931f708f3

3. How will the useEffect behave if we donot use a dependency array?

A:
If we donot use a dependency array array while using useEffect, the call back function inside it will be called on every render cycle.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

If we give an empty dependency array array while using useEffect, the call back function inside it will be called only on the initial render.

```
useEffect(() => {
	console.log("I am called only on initial render")
},[]);
```

If we give an variable in the dependency array array while using useEffect, the call back function inside it will be called 
whenever the variable updates.

```
useEffect(() => {
	console.log("I am called only "conditionalVar" changes/updates")
},[conditionalVar]);
```

4. What is SPA?

A: SPA is Single Page Application, which followed by react applications. It doesnt render multiple pages, instead it simply maintains a single page
on the web and just renders the components whenever needed and whenever a path is changed. 
All necessary code, such as HTML, JavaScript, and CSS, is retrieved with a single page load in a SPA. The appropriate resources are dynamically loaded
and added to the page as necessary while allowing navigation via link clicks or other interactive elements without requiring full reloads of content.

Imp Links: https://www.bairesdev.com/blog/react-spa-single-page-application/

5. What is the difference between client side routing and server side routing?

A: 
Client side routing: In client side routing, no network calls are made to the server to load the app again and again. Instead the client already
stores the data required to load different routes of the application, like that in react applications. It stores all the data on the start, during the 
first network call itself. This is the mechanism of how SPA work and makes our app very fast and responsive. 

Server side routing: In server side routing, network calls are made to the server everytime there is a request to fetch data or to change the route
in the application. The server sends the necessary data in response for every request. This creates a delay in our applications.

Imp Links : https://enonic.com/blog/what-is-the-difference-between-server-side-and-client-side#:~:text=In%20summary%2C%20server%2Dside%20and,executed%20on%20the%20user's%20device.
            https://stackoverflow.com/questions/23975199/when-to-use-client-side-routing-or-server-side-routing
            https://vite-plugin-ssr.com/server-routing-vs-client-routing
            https://www.telerik.com/blogs/what-is-react-router-what-is-react-location#:~:text=Unlike%20server%2Dside%20routing%2C%20client,even%20when%20the%20URL%20changes.
