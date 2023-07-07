1.Is JSX mandatory for React?

A: No, JSX is not mandatory for React but use of it simplifies and eases the use of lengthy code.
  JSX is an Extension syntax which is written as mix of both HTML and JS to create React elements. So anything that is done in JSX can also be done in 
  JS but with alittle more effort. If you dont want to do compilation in your build environment(ie, conversion of jsx into JS code), skip jsx.

2.Is ES6 mandatory for React?

A: Using es6 is not mandatory but enchances the code with ease in reading and maintaining.. The latest projects created on React rely a lot on ES6. 
  React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). 
  ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015

3.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

* ``` {TitleComponent} ``` - TitleComponet is a JS varaible within the {}'s.
* ``` {<TitleComponent/>} ``` - <TitleComponent/> is a JSX functional component that returns a JSX element. 
* ``` {<TitleComponent></TitleComponent>} ```- It is exactly same a the JSX functional compnent which returna JSX element excpet that it has no child
components. The opening and closing tags are used to add child components.

4.How can I write comments in JSX?

A: Wrap the data in { /* */ } to write comments in JSX 
  ```
{ /* This is a comment in JSX */ }

```
5.What is <React.Fragment> </React.Fragment> and <> </> ?

A: <React.Fragment> </React.Fragment> when you want to add a parent element to fulfill the JSX syntax, but without introducing an extra node to the DOM. After compilation, the fragment component does not make it to the DOM—only the children element do.

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

<> is the shorthand tag for React.Fragment which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the key attribute.
Example:

```
return (
        <React.Fragment key={index}>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```
https://www.memberstack.com/blog/react-fragment#:~:text=When%20should%20you%20use%20React,only%20the%20children%20element%20do.

6.What is Virtual DOM?

A:

React creates a tree of custom objects representing a part of the DOM. For example, instead of creating an actual DIV element containing a UL element, it creates a React.div object that contains a React.ul object. It can manipulate these objects very quickly without actually touching the real DOM or going through the DOM API. Then, when it renders a component, it uses this virtual DOM to figure out what it needs to do with the real DOM to get the two trees to match.

You can think of the virtual DOM like a blueprint. It contains all the details needed to construct the DOM, but because it doesn't require all the heavyweight parts that go into a real DOM, it can be created and changed much more easily.

For example, consider adding a node in DOM; react keep a copy of VDOM in memory
```
Create a VDOM with a new state
Compare it with older VDOM using diffing.
Update only different nodes in real DOM.
Assign new VDOM as an older VDOM.
```
https://stackoverflow.com/questions/21965738/what-is-virtual-dom

https://www.geeksforgeeks.org/reactjs-virtual-dom/

7. What is Reconcilation in React?

A:
In React, when the state of a component changes, the component needs to update its UI to reflect the new state. This process of updating the UI is called reconciliation.

The reconciliation algorithm is the process React uses to update the DOM in response to changes in the component state. When a component’s state changes, React will re-render the component and its children. The reconciliation algorithm is responsible for determining what has changed in the component tree and updating the DOM accordingly.

https://dev.to/ridhamz/the-reconciliation-algorithm-5bab

React uses a Virtual DOM (VDOM) to perform reconciliation, which is used to compare a component’s current and previous states.

8. What is React Fiber?
   
A:

React Fiber is a completely backward-compatible rewrite of the old reconciler. This new reconciliation algorithm from React is called Fiber Reconciler. The name comes from fiber, which it uses to represent the node of the DOM tree. We will go through fiber in detail in later sections.

The main goals of the Fiber reconciler are incremental rendering, better or smoother rendering of UI animations and gestures, and responsiveness of the user interactions. The reconciler also allows you to divide the work into multiple chunks and divide the rendering work over multiple frames. It also adds the ability to define the priority for each unit of work and pause, reuse, and abort the work.

9. Why we need keys in React? When do we need keys in React?
    
A :
  “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists. The next thing that comes to mind is what should be good to be chosen as the key for the items in the lists. It is recommended to use a string as a key that uniquely identifies the items in the list.

Keys play a great significance in React, and they help us to know what are the items in the given list of elements that have changed or are updated or removed. In simple words, the keys help in providing the identity to the elements in the Lists. Keys help to uniquely identify the elements in the Lists.

10. Can we use index as keys in React?   
A:
   React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour.
   
  Imp link:  https://articles.wesionary.team/using-index-as-a-key-is-an-anti-pattern-in-react-8e5db3aea3a9
   
11. What is props in react?    
A:
-Props are arguments passed into React components.
-Props are passed to components via HTML attributes.
-Props are also how you pass data from one component to another, as parameters.
-“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)

Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

Passing as HTML attributes to a functional component Car:
```
const myElement = <Car brand="Ford" />;
```
The functional component recieving it:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```
https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0

14. What is config driven UI?

A:
When we want our web application to be flexible to changes in different locations, styles etc, then we control our front end in a configuration file, This is known as config driven UI, because we can make the changes related to the styles etc in the config file without touching the code base and have the desired front end results.

In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.
The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic

Imp Link : https://desicoder.hashnode.dev/config-driven-ui

15. .map(), .reduce() and .filter()?

A:
map() method: It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop. The map is used like the following code:
```
function triple(n){
    return n*3;
}    
arr = new Array(1, 2, 3, 6, 5, 4);
  
var new_arr = arr.map(triple)
console.log(new_arr);
```
reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element.

```

function product(a, b){
    return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4);
  
var product_of_arr = arr.reduce(product)
console.log(product_of_arr)
```
filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition. 
```
arr = new Array(1, 2, 3, 6, 5, 4);
var new_arr = arr.filter(function (x){
    return x % 2==0;
});
  
console.log(new_arr)
```
Imp Link : https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/

CSS:
Display flex : The flex property sets the flexible length on flexible items.The flex-wrap property specifies whether the flexible items should wrap or not.
Justify Content : The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).

Imp link: https://www.w3schools.com/cssref/css3_pr_flex-wrap.php
          https://www.w3schools.com/cssref/css3_pr_justify-content.php

Join() in Javascript :
The JavaScript Array join() Method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ). Whatever way you want to seperate, that value has to be mentioned in the brackets with (" ").

Syntax:
```
array.join(" ") or array.join(" , ")
```

Destructing in JS:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
https://exploringjs.com/es6/ch_destructuring.html
https://www.w3schools.com/react/react_es6_destructuring.asp
