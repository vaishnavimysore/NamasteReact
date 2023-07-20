import imgLogo from "../../images/foodDeliveryLogo.jpeg";
import { useState } from "react";

//Fucntional component for Header part of our app which contains Logo, Nav items etc
const Header = () => {
  const [btnName, btnNameUpdate] = useState("Login");

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={imgLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnName === "Login"
                ? btnNameUpdate("Logout")
                : btnNameUpdate("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
