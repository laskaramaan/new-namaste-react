import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const AboutUs = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <ProfileClass />
    </div>
  );
};

export default AboutUs;
