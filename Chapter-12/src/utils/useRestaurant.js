import React, { useState, useEffect } from "react";

const useRestaurant = (id) => {
  {
    /* Get data from API */
  }
  {
    /* return restaurant data */
  }
  console.log(id);
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

  return restaurant;
};

export default useRestaurant;
