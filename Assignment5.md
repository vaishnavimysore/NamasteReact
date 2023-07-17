# NamasteReact
1. What is the difference between a named export, default export and * as an export?
A:
Default Export -  is used when there is only one thing to be exported in that file.While importing it can be imported normally using a Name

```
export default <Name>

import React from "react"
```
Named Export - is used when there are multiple things to be exported in a file.
"export" keyword has to be used before the functional component or the variable to export the component/variable.While importing {} have to be used
for the variable.

```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```
In * as export, it is used to import the whole module as a component and access the components inside the module. 
In * as export, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}

import * as MainComponents from "./MyComponent";
```

2. What is the importance of config.js file?
A:
Config.js file is using for keeping all the hard coded values which need not be exposed and are needed for successful functioning of the code.
It can be edited by user whenever needed.The data in this file is exported and imported in the file where its used.

In config.js file:
```
const URL="link is pasted here"
const key ="1234"
```
In app.js file(where config data is used):
```
<img src = URL/>
<h1> {key} is the key value </h1>
```
3.What are React Hooks?
A:   
React Hooks are normal javascript functions but with super powers of a particular functionality. They are also called as utility functions which
are written in the react libraries. They have to be imported using named imports. These functions let us bind "state" and "lifecyle" to a functional
component in react. Hooks allow you to reuse stateful logic without changing your component hierarchy. 

There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

Imp Links : https://www.freecodecamp.org/news/react-hooks-fundamentals/

4. Why do we need a useState hook?
A:
useState Hook is helpful in creating super powerful "State variables" that carry the state of the variable in a component. The scope of this
variable is only inside the component. Its local to the component. This hook function returns a stateful variable and a function to update this
variable.

Ex:
```
import {useState} from "react";

function Body = () =>{

const [variableName, FunctionToSetTheVariable] = useState(InitialValue)
<button onClick = { () =>{
FunctionToSetTheVariable(Updatedvalue)
} > Submit </button>

}
 ```
Here the InitialValue which is passed is set to the "variableName" and this value is held until it is changed/updated using
the function "FunctionToSetTheVariable(Updatedvalue)". Afte the "variableName" is updated with the new value, "the functional component is 
re-rendered again".This super power to re-render the component when theres an update is the main feature of the useState hook, which doesnt requires 
us to re-render the whole page again.
This happens so fast and so beautifully because of the virtual DOM, Diffing Algorithm and Reconciliation in React.

  


