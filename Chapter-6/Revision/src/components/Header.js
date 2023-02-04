import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
