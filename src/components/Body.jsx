import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";
import useOnlineStatus from "../utils/useOnlineStatus";
//Fucntional component for Body part of our app which contains Restaurant container, Restaurant cards and seach bar
//The res-container is the whole place where all the cards will be placed. The map function is used over the resObj which will iterate for all values of the list where "restaurant "
//is the function arguement which returns the Restuarant card component with particular resData and key.

const Body = () => {
  const filteredList = useResData();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You're Offline!! Please check your connection!! </h1>;
  }

  if (filteredList.length === 0) {
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
                return res.info.name
                  .toLowerCase()
                  .includes(searchList.toLowerCase());
              });
              SetFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button onClick={FilterTopRestaurants}>Top restaurants</button>
        <div className="res-container">
          {filteredList.map((restaurant) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
