//Creating a element using React with attribute of id-heading with applies color to it
const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello from React");

//Creating a root using React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering the root element to the page with heading in it
//The render function sends the "heading" h1 object and converts it into h1 html element and puts on the DOM
root.render(heading);

//if we need to create and render nested elements
//div parent 
//  div  child
//     h1 
const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",
    {id:"child"},
    React.createElement("h1",
        {id:"h1"},
        "Iam an h1 tag")));

      //  root.render(parent);

//if we need to create and render nested elements with siblings in the child, we use an array-[]
//div parent1 
//  div  child1
//     h1 and h2
const parent1 = React.createElement("div",
{id:"parent1"},
React.createElement("div",
    {id:"child1"},
   [ React.createElement("h1",
        {id:"h1"},
        "Iam an h1 tag"),
        React.createElement("h2",
        {id:"h2"},
        "Iam an h2 tag")]));

        root.render(parent1);