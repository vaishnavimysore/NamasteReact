//Importing React and ReactDOM
import React from "react";
import ReactDOM  from "react-dom/client";

//CreateElement--> JS Object--> HTML element (once rendered)
const reactHeading = React.createElement("h1",{class:"heading"},"Hello from React");
console.log(reactHeading);

//Below JSX Code--> CreateElement of React--> JS Object--> HTML element (once rendered)
//JSX simplies the React code to similar syntax as that of HTML
const jsxHeading = <h1 className="heading">Hello from JSX!!</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//creating a functional component using arrow functions
const HeadingComponent = () =>{
    return <h1>This is a heading component</h1>;
}
//creating a functional component using arrow functions without return statement but in ()
const HeadingComponent1 = () =>(
     <h1>This is a heading component1</h1>
)

//creating a functional component using arrow functions without return statement in a single line(when theres only a single line return)
const HeadingComponent2 = () => <h1>This is a heading component2</h1>;

//To render a component use it in angular brackets <FunctionalComponentName/>
root.render(<HeadingComponent/>);

const Title = () =>(
    <HeadingComponent/>,
    <HeadingComponent1/>,
    <HeadingComponent2/>,
    <h1>This is a Title component</h1>
)
//To render a component inside a component
root.render(<Title/>);

//Creating root 


//Rendering the element to the root
//root.render(jsxHeading);
