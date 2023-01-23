import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // to read a dynamic URL params
  const params = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.506098073877926&lng=88.40814415365458&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  const { id } = params;
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
