import React, { useState } from "react";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShoppingItems = ({ item }) => {
  const dispatch = useDispatch();
  const { id, image, price, name } = item;
  const [showAlert, setShowAlert] = useState(false);

  const addToCart = () => {
    dispatch(add(item));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <motion.div
      className="relative bg-white rounded-lg overflow-hidden shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      {showAlert && (
        <div className="bg-green-500 text-white p-2 rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 z-10">
          Item added to cart!
        </div>
      )}
      <Link to={`/ItemDetails/${id}`}>
        <div className="bg-amber-800 h-64 flex items-center justify-center">
          <img src={image} alt="" className="h-40 object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/ItemDetails/${id}`}>
          <div className="text-lg font-semibold mb-2 hover:text-amber-800">
            {name}
          </div>
        </Link>
        <div className="text-xl font-bold mb-4">${price}</div>
        <button
          className="bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ShoppingItems;
