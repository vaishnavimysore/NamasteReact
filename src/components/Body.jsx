import RestaurantCard from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";

//Fucntional component for Body part of our app which contains Restaurant container, Restaurant cards and seach bar
//The res-container is the whole place where all the cards will be placed. The map function is used over the resObj which will iterate for all values of the list where "restaurant "
//is the function arguement which returns the Restuarant card component with particular resData and key.

const Body = () => {
  const [restaurantList, SetRestaurantList] = useState(resObj);

  FilterTopRestaurants = () => {
    const updatedList = restaurantList.filter((res) => res.data.avgRating > 4);
    SetRestaurantList(updatedList);
  };

  return (
    <div className="Body">
      <button onClick={FilterTopRestaurants}>Top restaurants</button>
      <div className="SearchBar"> Search </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
