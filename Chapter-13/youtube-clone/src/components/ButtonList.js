import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Game",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Cooking",
  "Valentines",
  "News",
  "Cooking",
  "Valentines",
];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Valentines" />

      {/* {list.map((e, index) => {
        console.log(index);
        return (
          <>
            <Button name={e} key={index} />
          </>
        );
      })} */}
    </div>
  );
};

export default ButtonList;
