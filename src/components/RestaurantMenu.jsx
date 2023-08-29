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
    <div className="block mx-64 bg-gradient-to-b from-white  to-red-100 rounded-lg h-full text-center w-[900px]">
      <div className="border rounded-sm">
        <h1 className="mb-2  ml-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h1>
        <h3 className="mb-4  ml-4 text-base text-neutral-600 dark:text-neutral-200">
          {cuisines.join(", ")}
        </h3>
        <p className="mb-4  ml-4 text-base text-neutral-600 dark:text-neutral-200">
          {"Rs " + costForTwoMessage}
        </p>
      </div>

      <div className="my-4 text-center">
        <Collapsible
          trigger={title}
          className="border-solid border border-l-0 border-r-0 border-t-0 "
        >
          <ul>
            {itemCards.map((items) => (
              <li>
                <MenuDropDown key={items?.card?.info?.id} menuData={items} />
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default RestaurantMenu;
