import React from "react";
import { cardList, IMG_CDN_URL } from "../config";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  // we will write an algorithm to filter data

  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(cardList);
  const [searchText, setSearchText] = useState();

  return (
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

            const data = filterData(searchText, restaurants); //I m giving the filterData function searchText variable which will be searched in the list of restaurants
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardList">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
