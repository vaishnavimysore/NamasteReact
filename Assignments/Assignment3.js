
import React from "react";
import ReactDOM from "react-dom/client";

//Create a Nested Header element using React.createElement(h1,h2,h3 inside a div with class "title")
const ReactHeading = React.createElement("div",{className:"title"},React.createElement("h1",{},["Im a h1 element",React.createElement("h2",{},["Im a h2 element",React.createElement("h3",{},"Im a h3 element")])]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ReactHeading);

//Create the same using JSX  
const jsxHeading = 
<div className="title" >
<h1 className="h1Tag" > Im a h1 element in JSX</h1>
<h2 className="h2Tag"  >   Im a h2 element in JSX
</h2>
<h3 className="h3Tag" >
    Im a h3 element in JSX
</h3>
</div>

root.render(jsxHeading);

//Create a functional Element using the same in JSX
const HeadingComp = () =>(
<div className="title">
<h1> Im a h1 element in JSX comp</h1>
<h2>   Im a h2 element in JSX comp
</h2>
<h3>
    Im a h3 element in JSX comp
</h3>
</div>
)
root.render(<HeadingComp/>)

//passing attributes to its tags
const HeadCompWithAttributes = ()=>{
return (
    <div className="title" key="title">
    <h1 className="h1Tag" style={{color:"red"}} key="h1"> Im a h1 element in JSX</h1>
    <h2 className="h2Tag"  style={{color:"blue"}} key="h2">   Im a h2 element in JSX
    </h2>
    <h3 className="h3Tag"  style={{color:"yellow"}} key="h3">
        Im a h3 element in JSX
    </h3>
    </div>   
)
}
root.render(<HeadCompWithAttributes/>)

//Composition of a component(component inside a component)
const HeadCompWithAttributes1 = ()=>{
    return (
        <div className="title" key="title">
        <h1 className="h1Tag" style={{color:"red"}} key="h1"> Im a h1 element in JSX</h1>
        <h2 className="h2Tag"  style={{color:"blue"}} key="h2">   Im a h2 element in JSX
        </h2>
        <h3 className="h3Tag"  style={{color:"yellow"}} key="h3">
            Im a h3 element in JSX
        </h3>
        <HeadingComp/>
        </div>   
    )
    }

    root.render(<HeadCompWithAttributes1/>)

//{titleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const titleComponent = <h1>This is an element</h1>// {titleComponent}

 //{<TitleComponent1/>}
const TitleComponent = () =>{
    return <h2> This is a Title component h2!!</h2>
}

//{<TitleComponent1/>}
const TitleComponent1 = () => {
    return <h3>
        This is TitleComponent1 h3!!
    </h3>
}

const Head = () => {
    return(
        <div>
        {titleComponent}
        {<TitleComponent/>}
        {<TitleComponent1></TitleComponent1>}    
        </div>

    )
}
root.render(<Head/>)