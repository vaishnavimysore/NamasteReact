import useResMenuData from "../utils/useResMenuData";
import Shimmer from "./Shimmer";
import MenuDropDown from "./MenuDropDown";
import Collapsible from "react-collapsible";

const RestaurantMenu = () => {
  const menuList = useResMenuData();

  if (menuList.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuList?.cards[0]?.card?.card?.info;

  const { title } =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const { itemCards } =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{"Rs " + costForTwoMessage}</p>
      <Collapsible trigger={title} className="collapse-container">
        <ul>
          {itemCards.map((items) => (
            <li>
              <MenuDropDown key={items?.card?.info?.id} menuData={items} />
              <hr></hr>
            </li>
          ))}
        </ul>
      </Collapsible>
    </div>
  );
};

export default RestaurantMenu;
