import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // to read a dynamic URL params
  const params = useParams();
  const { id } = params;

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  console.log(params);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="flex">
      <div>
        <h1>restaurant id: {id}</h1>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
      </div>
      <div>
        <button
          className="p-2 m-5 bg-green-100"
          onClick={() => handleAddItems()}
        >
          Add Items
        </button>
      </div>
      <div>
        <h2>Menu:</h2>
        <ul>
          {/* {console.log(restaurant?.menu?.items)}

          {console.log(Object.values(restaurant?.menu?.items))} */}
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <button
                onClick={() => addFoodItem(item)}
                className="p-1 bg-green-500"
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
