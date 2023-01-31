import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      //when i come online code written here will get triggered
      setIsOnline(true);
    };

    const handleOffline = () => {
      //when i go offline code written here will get triggered
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline; //returns true or false
};

export default useOnline;
