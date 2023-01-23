import React from "react";
import { useState } from "react";

const loggedInUser = () => {
  //Api call to authenticate->if succes then return true else return false
  return true;
};

const Title = () => {
  return (
    <div>
      <h1 id="title" key="h2">
        <a href="/">
          <img
            className="logo"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          />
        </a>
      </h1>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
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
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
