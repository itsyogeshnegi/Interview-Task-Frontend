import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import AllProducts from "./Components/Pages/AllProducts";
import ProductDetail from "./Components/Pages/ProductDetail";

const AppLayOut = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <AppLayOut />,
      children: [
        {
          path: "/home",
          element: <AllProducts />,
        },
        {
          path: "/home/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
