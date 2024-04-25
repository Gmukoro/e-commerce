import React, { useEffect, useState } from "react";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  const handleLogout = () => {
    // To be implemented
  };

  return (
    <div
      className={`${
        scroll ? "bg-amber-600 shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className="flex items-center justify-between relative container py-2 px-2 mx-auto">
        <Link to="/" className="text-lg sm:text-xl">
          <div className="font-bold mb-0 sm:mb-0 mr-2 sm:mr-2">
            Gona Pearls shop
          </div>
        </Link>
        <div className="hidden sm:flex sm:flex-grow sm:items-center sm:space-x-4">
          <div className="flex-grow flex items-center mr-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="border border-gray-300 rounded-l-md px-2 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:w-auto"
              />
              <BiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(open())}
          >
            <BiShoppingBag className="text-3xl opacity-80" />
            <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
              {amount}
            </div>
          </div>
          <button className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 text-sm">
            SignIn
          </button>
          <button
            onClick={handleLogout}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 text-sm"
          >
            SignUp
          </button>
        </div>
      </div>

      <div className="sm:hidden flex justify-between py-0 px-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BiShoppingBag className="text-xl" />
            <div className="absolute w-3 h-3 rounded-full z-10 right-[-2px] bottom-[-2px] flex items-center justify-center text-[8px] bg-black text-white">
              {amount}
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="border border-gray-300 rounded-md px-1 py-1 pl-6 pr-2 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:w-auto"
              />
              <BiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="text-sm text-gray-600">SignIn</button>
            <button className="text-sm text-gray-600">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
