import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted=withPromtedLabel(RestaurantCard);      
 //console.log(listOfRestaurant);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4484257&lng=78.5684594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are Offline!!! Kindly check your internet connection</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="filter flex items-center mb-8 space-x-4">
        <div className="search flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded-r-full hover:from-cyan-500 hover:to-blue-500 transition duration-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-6 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold rounded-full hover:from-green-500 hover:to-teal-500 transition duration-300"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRatingString > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.veg?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant} />)}  
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
