import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // to read a dynamic URL params
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  console.log(params);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div>
      <div>
        <h1>restaurant id: {id}</h1>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
      </div>
      <div>
        <h2>Menu:</h2>
        <ul>
          {/* {console.log(restaurant?.menu?.items)}

          {console.log(Object.values(restaurant?.menu?.items))} */}
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
