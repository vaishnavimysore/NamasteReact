
1. What is a Microservice?
   
A: Microservices are light weight, self contained components that perform respective tasks. It is an architectural approach that involves dividing large applications into smaller, functional units capable of functioning and communicating independently depending upon their use case. Developers can now achieve the scalability, simplicity, and flexibility needed to create highly sophisticated software applications. 

-Each service can be written in different languages and still communicate with each other unlike monolith architecture.
-Separation of concerns is followed/achieved.
-Single responsibility principle is followed. This principle states that each service follows and does only a single job/task.
-With microservices architecture, all teams work independently on their own respective service, they have their own build and deploy cycle unlike the monolith architecture.

For ex, our UI is deployed on a port(:1234), the same way all other services are deployed on different ports of their own. At the end for any request or a service , all the ports are mapped to a single domain name 

Imp links : https://middleware.io/blog/microservices-architecture/
            https://www.embitel.com/blog/ecommerce-blog/how-microservices-communicate-with-each-other
            https://www.ibm.com/docs/en/cics-ts/5.1?topic=concepts-components-url   (How a URL is split)
            https://www.geeksforgeeks.org/components-of-a-url/   (How a URL is split)

2. What is Monolith Architecture?
   
A: Monolithic Architecture is like a big container, wherein all the software components of an app are assembled and tightly coupled, i.e., each component fully depends on each other. All the code, build and deployment is single and dependent. One failure will cause a failure in the whole application. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

https://www.geeksforgeeks.org/monolithic-architecture/
https://scaleyourapp.com/monolithic-architecture/


3. What is IaaS, PaaS, SaaS?
   
https://www.redhat.com/en/topics/cloud-computing/iaas-vs-paas-vs-saas

4. What is the difference between Monolith and Microservices architecture?
   
A: 
Monolith : A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions. All the software components in a monolithic system are interdependent due to the data exchange mechanisms within the system. It’s restrictive and time-consuming to modify monolithic architecture as small changes impact large areas of the code base.

Microservices : In contrast, microservices are an architectural approach that composes software into small independent components or services. Each service performs a single function and communicates with other services through a well-defined interface. Because they run independently, you can update, modify, deploy, or scale each service as required.

More differences in https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/
Containers in microservices architecture : https://aws.amazon.com/what-is/containerization/

5. Why do we need useEffect Hook?
   
A: Side effects are not predictable because they are actions which are performed with the "outside world." We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

Common side effects include:
-Making a request to an API for data from a backend server
-To interact with browser APIs (that is, to use document or window directly)
-Using unpredictable timing functions like setTimeout or setInterval

This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components.
Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.
This is what useEffect gives us. In short, useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.

```
// 1. import useEffect
import { useEffect } from 'react';

function MyComponent() {
  // 2. call it above the returned JSX  
  // 3. pass two arguments to it: a function and an array
  useEffect(() => {}, []);    
  
  // return ...
}

 The [] is an empty dependency array. If no dependency array is given, then the page keeps on rendering causing an infinite loop.
  If an empty dependency array is given, then page is rendered only once during the start
  If dependency array is given a value, then the page is rendered whenever the value in the array changes/updates.

```

https://blog.logrocket.com/useeffect-hook-complete-guide/
https://www.w3schools.com/react/react_useeffect.asp
Important explanation : https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/

6. What is optional chaining?

A: 
The ``` ?. ``` operator is like the ``` . ``` chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist. This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

```
let user = {}; // a user without "address" property

alert(user.address.street); // Error!

alert(user.address ? user.address.street : undefined); - OPTIONAL CHAINING!!
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

7. What is Shimmer UI?

A: A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

A shimmer UI has many benefits over traditional loading indicators:

It improves the perceived performance of the app by making it seem faster and more responsive.
It reduces the cognitive load on the user by providing visual cues about the type and structure of the content that is being loaded.
It eliminates surprises and confusion by showing a consistent and predictable UI before and after loading.
It enhances the aesthetic appeal and user satisfaction by creating a smooth and elegant transition from loading to loaded.

8. What is the difference between JS expression and JS statement?

A: At its simplest terms, expressions are evaluated to produce a value. On the other hand, statements are executed to make something happen.
Expression: a unit of code that resolves to a value, as instance, literals & operators. Examples for expressions:
Statement: a unit of code representing one instruction or more, usually starts with a language reserved keyword and ends, explicitly or implicitly, with a statement terminator. 

Important Link : https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74

9. What is conditional rendering? Explain with an example.

A: Conditional rendering in simple terms is rendering a component or a page(group of components) depending upon a condition. We can use 'if', '&&'
or ternary operator '?' for doing conditional rendering of components. 

For example: 
```
if(ListOfRestaurants === null) return <ShimmerUI/>

ListOfRestaurants.length > 0 && <ShimmerUI/>

ListofRestaurants === 0 ? <ShimmerUI/> : <Body/>

```
10. What is CORS?

A: CORS is Cross Origin Resource Sharing. Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It is for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. This is useful because complex applications often reference third-party APIs and resources in their client-side code. For example, your application may use your browser to pull videos from a video platform API, use fonts from a public font library, or display weather data from a national weather database. CORS allows the client browser to check with the third-party servers if the request is authorized before any data transfers.

Remember, the same-origin policy tells the browser to block cross-origin requests. When you want to get a public resource from a different origin, the resource-providing server needs to tell the browser "This origin where the request is coming from can access my resource". The browser remembers that and allows cross-origin resource sharing.

Important Links : https://web.dev/cross-origin-resource-sharing/
                  https://reflectoring.io/complete-guide-to-cors/
                  

11. What is async and await? - "Running concurrently but waits for result"
     
A: Asynchronous functions are those functions which are going to take a certain amount of time to complete or respond and are not going to block the flow of execution as they are run concurrently without waiting for this task to complete.

Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously.

Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it. Each task requires an answer before moving on to the next iteration.

The differences between asynchronous and synchronous include:

Async is multi-thread, which means operations or programs can run in parallel.
Sync is single-thread, so only one operation or program will run at a time.
Async is non-blocking, which means it will send multiple requests to a server.
Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.
Async increases throughput because multiple operations can run at the same time.
Sync is slower and more methodical.

Programmers can write asynchronous code more synchronously using JavaScript’s async/await syntax feature. It is based on Promise and offers a cleaner, more legible approach to construct asynchronous programmes.

When a function is marked with the “async” prefix, it means that it will always return a Promise. The “await” keyword is used to halt the execution of the programme inside an async function until the Promise is fulfilled.

Example:
```
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json()}
```
Here the  anonymous function is given the keyword "async" to mark the function as asynchronous(running concurrently) and also that it'll be returning a promise. We use the "await" keyword for fetch operation so that it can halt the further operation until the promise is resolved and fulfilled(Note: fetch() and json() return a promise).

Important Links: https://blog.bitsrc.io/async-await-in-javascript-simplifying-asynchronous-code-39075ea4cd03
                  https://blog.bitsrc.io/what-is-javascript-promise-and-why-it-is-important-4b6676d3016a

12. What is the use of const jsonData = await data.json() in fetchData() ?

```
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json()}
```
Here We use the "await" keyword for json() so that it can halt the further operation until the whole data is converted into json(This is asynchronous) . (Note: json() returns a promise).
