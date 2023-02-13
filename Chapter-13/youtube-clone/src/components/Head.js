import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
          alt="hamburger menu"
        />
        <a href="/">
          {" "}
          <img
            className="h-8"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 px-5 py-2  rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
