import Collapsible from "react-collapsible";
import { ITEMS_IMG_URL } from "../utils/constants";

const MenuDropDown = (props) => {
  const { menuData } = props;
  const { name, price, imageId } = menuData?.card?.info;
  return (
    <div className="items-container">
      {name} <img className="items-img" src={ITEMS_IMG_URL + imageId}></img>- Rs{" "}
      {price / 100}
    </div>
  );
};

export default MenuDropDown;
