import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState("");

  useEffect(() => {
    fetchMenuData();
  }, []);

  const resId = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setMenuList(json);
    console.log(json);
  };

  const [resName, cuisines, ratings, cost] = menuList.cards.card.card;

  return (
    <div>
      <h1>{resName}</h1>
    </div>
  );
};

export default RestaurantMenu;
