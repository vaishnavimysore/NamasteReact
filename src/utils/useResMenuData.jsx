import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./constants";

const useResMenuData = () => {
  const [menuList, setMenuList] = useState("");

  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuList(json.data);
  };
  return menuList;
};

export default useResMenuData;
