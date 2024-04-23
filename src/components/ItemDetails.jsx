import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { items } from "../CartItems";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  const { name, price, image } = item;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-4">
      <motion.div
        className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <motion.img
              src={image}
              alt={name}
              className="object-cover w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
          <div className="lg:w-1/2 p-8">
            <motion.h2
              className="text-3xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {name}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              ${price}
            </motion.p>
            <motion.p
              className="text-base text-gray-700 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              viverra, libero id ullamcorper vehicula, mi dui vestibulum dolor,
              in vestibulum sapien odio a eros.
            </motion.p>
            <motion.button
              className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-gray-800"
              onClick={() => dispatch(add(item))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add To Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ItemDetails;
