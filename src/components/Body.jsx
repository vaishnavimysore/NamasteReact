import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//Fucntional component for Body part of our app which contains Restaurant container, Restaurant cards and seach bar
//The res-container is the whole place where all the cards will be placed. The map function is used over the resObj which will iterate for all values of the list where "restaurant "
//is the function arguement which returns the Restuarant card component with particular resData and key.

const Body = () => {
  const [restaurantList, SetRestaurantList] = useState([]);

  const [searchList, SearchedListUpdate] = useState([]);

  const [filteredList, SetFilteredList] = useState([]);

  FilterTopRestaurants = () => {
    const updatedList = restaurantList.filter((res) => res.data.avgRating > 4);
    SetFilteredList(updatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4862501&lng=78.498635&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json().catch(function (err) {
      console.log(err.message);
    });
    const apiData = jsonData?.data?.cards[2]?.data?.data?.cards;
    SetRestaurantList(apiData);
    SetFilteredList(apiData);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="Body">
      <div className="filter-container">
        <div>
          <input
            type="text"
            value={searchList}
            onChange={(e) => {
              SearchedListUpdate(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchedList = restaurantList.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(searchList.toLowerCase());
              });
              console.log(searchedList);
              SetFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button onClick={FilterTopRestaurants}>Top restaurants</button>
        <div className="res-container">
          {filteredList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
