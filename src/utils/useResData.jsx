import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";

const useResData = () => {
  const [restaurantList, SetRestaurantList] = useState([]);

  const [searchList, SearchedListUpdate] = useState([]);

  const [filteredList, SetFilteredList] = useState([]);

  FilterTopRestaurants = () => {
    const updatedList = restaurantList.filter((res) => res.info.avgRating > 4);
    SetFilteredList(updatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_API);
      const jsonData = await data.json();
      const apiData =
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(apiData);
      SetRestaurantList(apiData);
      SetFilteredList(apiData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return filteredList;
};

export default useResData;
