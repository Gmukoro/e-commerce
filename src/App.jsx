import React, { useEffect, useState } from "react";
import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import ItemDetails from "./components/ItemDetails";
import Hero from "./components/Hero";

import { useSelector, useDispatch } from "react-redux";
import { total } from "./components/State/Slice/CartSlice";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = () => {
  const { isOpen } = useSelector((state) => state.checkout);
  return (
    <div>
      <Navbar />
      <Hero />
      {isOpen && <CheckOut />}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShoppingContainer />,
      },
      {
        path: "/ItemDetails/:id",
        element: <ItemDetails />,
      },
    ],
  },
]);

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    dispatch(total());
    setCurrentDate(getCurrentDate());
  }, [cartItems]);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="font-BeVietnamPro">
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-amber-600  text-black text-center py-4">
      <p>&copy; {new Date().getFullYear()} Gona Pearls. All rights reserved.</p>
    </footer>
  );
};

export default App;
