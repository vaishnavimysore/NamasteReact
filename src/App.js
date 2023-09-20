//Building a Food Delivery app from Scratch!!

//Importing React and ReactDOM
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

//Functional component which returns the whole app layout with the header, body and footer components
const App = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "SecondName",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="bg-gradient-to-b from-red-100  to-red-300  w-screen  min-h-screen ">
      {/*To provide or assign a value to the context variables, we use VarName.Provider component and pass in the new value
        to the variable. We then wrap the component where this new value has to be visible. Ex: Here the loggedInUser is Vaishnavi
        only for Header component and else where it is still Default user.
        We can also control the loggedInUser variable with a state variable and updating it with the update func respective to that
        variable*/}

      <userContext.Provider value={{ setUserName }}>
        <Header />

        <Outlet />
      </userContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
