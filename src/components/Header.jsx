import imgLogo from "../../images/foodDeliveryLogo.jpeg";

//Fucntional component for Header part of our app which contains Logo, Nav items etc
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
