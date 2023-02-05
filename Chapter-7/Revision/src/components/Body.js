import React, { useEffect, useState } from "react";
import { cardList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  const filterData = (searchText, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );

    return filterData;
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5132245&lng=88.4018459&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {allRestaurants?.length === 0 ? (
        <>fetching data</>
      ) : (
        <>
          <div>
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
                  const data = filterData(searchText, allRestaurants);
                  setFilteredRestaurants(data);
                }}
              >
                Search
              </button>
            </div>
            <div className="cardList">
              {filteredRestaurants?.map((restaurant) => {
                return (
                  <RestaurantCard
                    {...restaurant?.data}
                    key={restaurant?.data?.id}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Body;
