import React from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/item1.png";
import item4 from "../assets/item4.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="hero-section text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 text-amber-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to Gona Pearls
      </motion.h1>

      <p className="text-lg text-gray-700 mb-8">
        Discover our latest collection of unique items
      </p>

      <Link
        to="/ShoppingContainer"
        className="bg-amber-800 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:bg-amber-600 hover:text-white"
      >
        Explore Now
      </Link>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="bg-gray-100 relative flex flex-col lg:flex-row justify-center items-center h-screen p-6 lg:p-10">
      <motion.img
        src={item1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="z-10 lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <HeroSection />
      </div>
      <motion.img
        src={item4}
        alt="Item 2"
        className="absolute right-0 bottom-0 lg:hidden w-72 h-72 object-contain z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Hero;
