import React from "react";
import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,

  price,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>

      <h5 className="font-bold">Rupees: {price / 100}</h5>
    </div>
  );
};

export default FoodItem;
