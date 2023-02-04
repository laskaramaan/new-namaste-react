import React, { useState } from "react";
import { cardList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(cardList);
  const [searchText, setSearchText] = useState();

  const filterData = (searchText, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );

    return filterData;
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardList">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
