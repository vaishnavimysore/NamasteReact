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
10. Can we use index as keys in React?
11. What is props in react?
12. What is config driven UI?
13. .map(), .reduce() and .filter()?
