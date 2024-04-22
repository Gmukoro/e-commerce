import React, { useState } from "react";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    <div>
      <div className="relative">
        {showAlert && (
          <div className="bg-amber-600 text-green-800 p-2 rounded-md absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 z-10">
            Item added to cart!
          </div>
        )}
        <Link to={`/ItemDetails/${id}`}>
          <div className="bg-amber-500 h-[400px] rounded-md flex items-center justify-center">
            <img src={image} alt="" className="w-[200px]" />
          </div>
        </Link>
        <div className="mt-6  flex justify-between items-center px-4">
          <div>
            <div className="text-sm font-bold mb-3">{name}</div>
            <div className="text-xl font-bold">${price}</div>
          </div>
          <button className="bg-amber-600 p-3" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItems;
