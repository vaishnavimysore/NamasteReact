//Creating a element using React with attribute of id-heading with applies color to it
const heading = React.createElement("h1",{id:"heading"},"Hello from React");

//Creating a root using React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering the root element to the page with heading in it
root.render(heading);