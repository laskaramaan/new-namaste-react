import React from "react";
import { cardList, IMG_CDN_URL } from "../config";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5132245&lng=88.4018459&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json(); //that readable stream is converted to JSON data
      console.log(json);

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  };

  //useOnline is a custom hook that we will make to check whether the user's system is online or offline
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline,Please check your internet connection!!</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value=>whatever you write in the input
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data

            const data = filterData(searchText, allRestaurants); //I m giving the filterData function searchText variable which will be searched in the list of restaurants
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants?.map((restaurant) => {
          //console.log(restaurants);
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
