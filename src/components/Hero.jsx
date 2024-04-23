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
        className="text-4xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        Welcome to Gona Pearls shop!
      </motion.h1>

      <p className="text-lg text-blue">
        Discover our latest collection of unique items
      </p>
    </motion.div>
  );
};

const Description = () => {
  return (
    <motion.div
      className="description text-center mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="text-lg font-semibold mb-2 overflow-hidden text-white"
        initial={{ opacity: 1, x: "50%", width: "100%" }}
        animate={{
          opacity: 1,
          x: ["-30%", "30%", "-30%"],
          transition: { duration: 30, repeat: Infinity },
        }}
      >
        Get 20% off on all items!
      </motion.div>

      <p className="text-lg text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        vehicula, ligula vitae commodo convallis, purus odio commodo sem, nec
        varius purus purus sit amet arcu.
      </p>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-amber-800 to-amber-600 relative flex flex-col lg:flex-row justify-center items-center h-screen p-6 lg:p-10">
      <motion.img
        src={item1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={item4}
        alt="Item 2"
        className="absolute left-0 bottom-0 w-72 h-72 object-contain z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={item4}
        alt="Item 2"
        className="absolute right-0 bottom-0 w-72 h-72 object-contain z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={item4}
        alt="Item 2"
        className="absolute right-0 bottom-0 w-72 h-72 object-contain z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="z-10 lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <HeroSection />
        <Description />
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            className="bg-amber-800 px-6 py-3 rounded-md text-lg font-semibold border-t-2 transition-colors duration-600 hover:bg-amber-600 hover:text-white"
            to="/ShoppingContainer"
          >
            Scroll Down for Shopping Time
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
