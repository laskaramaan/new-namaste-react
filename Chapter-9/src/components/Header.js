import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  //Api call to authenticate->if succes then return true else return false
  return true;
};

const Title = () => {
  return (
    <div>
      <h1 id="title" key="h2">
        <Link to="/">
          <img
            className="logo"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          />
        </Link>
      </h1>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>InstaMart</li>
          </Link>
          <li>cart</li>
        </ul>
      </div>
      <h1> {isOnline ? "✅" : "❌"}</h1>
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
