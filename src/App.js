//Building a Food Delivery app from Scratch!!

//Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//Functional component which returns the whole app layout with the header, body and footer components
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
