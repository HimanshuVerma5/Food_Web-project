import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestauranMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Card from "./components/Card";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";





const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
    path:"/",
    element:<Body/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/card",
    element:<Card/>,
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu />,
  },

    ],
    
    errorElement: <Error/>,
  },
  
]);

// Find the root element in the HTML and render the AppLayout component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
