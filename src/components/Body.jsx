import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
//Fucntional component for Body part of our app which contains Restaurant container, Restaurant cards and seach bar
//The res-container is the whole place where all the cards will be placed. The map function is used over the resObj which will iterate for all values of the list where "restaurant "
//is the function arguement which returns the Restuarant card component with particular resData and key.

const Body = () => {
  const [filteredList, SetFilteredList] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchList, SearchedListUpdate] = useState([]);
  const [restaurantList, SetRestaurantList] = useState([]);

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
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(apiData);
      SetRestaurantList(apiData);
      SetFilteredList(apiData);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (onlineStatus === false) {
    return <h1>You're Offline!! Please check your connection!! </h1>;
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="Body">
      <div className="filter-container">
        <div className=" flex flex-wrap">
          <input
            className="relative ml-72 -mr-0.5 block w-[400px] min-w-0 rounded-l border border-solid border-gray-50 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            type="text"
            placeholder="Search"
            value={searchList}
            onChange={(e) => {
              SearchedListUpdate(e.target.value);
            }}
          />
          <button
            className="relative z-[2] rounded-md border-2 border-primary bg-red-50 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            onClick={() => {
              const searchedList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchList.toLowerCase());
              });
              SetFilteredList(searchedList);
            }}
          >
            Search
          </button>
          <button
            className="relative z-[2] ml-6 rounded-md border-2  bg-red-50 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            onClick={FilterTopRestaurants}
          >
            Top restaurants
          </button>
        </div>

        <div className="flex flex-wrap w-auto px-14">
          {filteredList.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
