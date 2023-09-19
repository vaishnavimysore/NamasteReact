import imgLogo from "../../images/foodDeliveryLogo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";

//Fucntional component for Header part of our app which contains Logo, Nav items etc
const Header = () => {
  const [btnName, btnNameUpdate] = useState("Login");

  const userInfo = useContext(userContext);

  return (
    <div className="mb-10 flex bg-white shadow-lg  w-full h-20">
      <div>
        <img className=" rounded-md  pr-10 w-24 mx-4" src={imgLogo} />
        <div className="mx-4 font-bold">Swiggy</div>
      </div>
      <div>
        <ul className=" appearance-none flex flex-wrap pl-[850px] space-x-4 mt-6 font-serif items-center  text-red-700 hover text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className=" bg-red-200 rounded-sm w-16 h-8 text-red-700"
            onClick={() => {
              btnName === "Login"
                ? btnNameUpdate(userInfo.loggedInUser)
                : btnNameUpdate("Logout");
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
