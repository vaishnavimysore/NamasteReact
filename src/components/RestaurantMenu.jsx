import { useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenuData();
  }, []);

  const resId = useParams();

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json);
  };
};

export default RestaurantMenu;
