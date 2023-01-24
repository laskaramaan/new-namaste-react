import React from "react";
import { useRouteError } from "react-router-dom"; // this is a hook that react-router-dom gives us, it returns routing error

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div>Oops !! something's wrong</div>
      <div>{err.status + ":" + err.statusText}</div>
    </>
  );
};

export default Error;
