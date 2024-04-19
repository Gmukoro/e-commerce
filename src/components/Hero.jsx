import React from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/item1.png"; // Corrected import path

const HeroSection = () => {
  return (
    <div className="hero-section text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Gona Pearls shop!</h1>
      <p className="text-lg">Discover our latest collection of unique items</p>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description text-center">
      <p className="text-lg font-semibold mb-2">Get 20% off on all items!</p>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        vehicula, ligula vitae commodo convallis, purus odio commodo sem, nec
        varius purus purus sit amet arcu.
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center h-screen p-6 lg:p-10">
      <img
        src={item1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.3 }} // Adjust opacity as needed
      />
      <div className="z-10 lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <HeroSection />
        <Description />
        <div className="flex justify-center mt-8">
          <Link
            className="bg-lime-200 px-6 py-3 rounded-md text-lg font-semibold border-l-4 border-r-4 border-white border-t-2 transition-colors duration-300 hover:bg-lime-400 hover:text-white"
            to="/ShoppingContainer"
          >
            Scroll Down to Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
