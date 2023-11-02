import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //api call

    //make an api call after every key press
    //but if the diff betwenn two api calls is<200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getsearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getsearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchQuery);

    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //supdate cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
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
        <div>
          <input
            className="w-1/2 border border-gray-400 px-5 py-2  rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white p-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
