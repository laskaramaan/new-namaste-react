import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />

      <Outlet />
      {/* <MainContainer />
      <WatchPage /> */}
    </div>
  );
};

export default Body;
