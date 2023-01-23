import React from "react";
import { cardList, IMG_CDN_URL } from "../config";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  // we will write an algorithm to filter data

  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

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

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0) {
    return <h1>no restaurants found</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value=>whatever you write in the input
            setSearchText(e.target.value);
          }}
        />

        <button
          className="searchBtn"
          onClick={() => {
            //need to filter the data

            const data = filterData(searchText, allRestaurants); //I m giving the filterData function searchText variable which will be searched in the list of restaurants
            //update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardList">
        {filteredRestaurants?.map((restaurant) => {
          //console.log(restaurants);
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
