import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const InstaMart = lazy(() => import("./components/InstaMart")); //It is a dynamic import-> upon render react will suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshay Saini",
    email: "support@namastedev.com",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        {/* Outlet */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

// always create appRotuter below Applayout

const appRouter = createBrowserRouter([
  //this is the place where i will define what will happen when i load my /path
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, //404 error page is shown
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Namaste React",
              email: "amaan@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile", //its a relative path and it means->/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
