import useResMenuData from "../utils/useResMenuData";
import Shimmer from "./Shimmer";
import MenuDropDown from "./MenuDropDown";
import Collapsible from "react-collapsible";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const menuList = useResMenuData();
  const [showIndex, setShowIndex] = useState(null);
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

  const cards =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
      ?.card?.["@type"];

  //Here we filter the cards with type as ItemCategory and store in category const.
  const category =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (itemCategory) =>
        itemCategory.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(category);
  //All the categories to be displayed here . Each category has a title and a body. Each category can be a separate component."
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
        <div>
          {category.map((category, index) => (
            <ResCategory
              items={category?.card?.card}
              key={category?.card.title}
              index={index === showIndex ? true : false}
              setIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
