import React from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/item1.png";
import item4 from "../assets/item4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ShoppingItems from "./ShoppingItems";

const bestSellingItems = [
  { id: 1, image: item1, name: "Ceramic Table Vase", price: 79.99 },
  { id: 2, image: item4, name: "Wall Clock", price: 58.33 },
];

const HeroSection = () => {
  return (
    <motion.div
      className="hero-section text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-2 text-amber-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Gona Pearls
      </motion.h1>
      <p className="text-lg text-gray-700 mb-4">Your #1 shopping app</p>
      <p className="text-lg text-gray-700 mb-8">
        Discover our latest collection of unique items
      </p>

      <Link
        to="ShoppingItems"
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
      <div className="w-full max-w-screen-lg flex flex-col lg:flex lg:justify-center lg:items-center mb-4 mt-20 lg:mb-0 lg:w-1/2 lg:pr-5 z-0">
        <motion.h2 className="text-xl font-bold mb-0">
          Our Best Sellers
        </motion.h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="z-0"
          containerClass="container mx-auto"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              customTransition: "height 1s ease",
              customTransitionDuration: 1000,
              customTransitionTimingFunction: "ease",
              customTransitionDelay: 500,
              containerWidth: "100%",
              containerHeight: "200px",
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {bestSellingItems.map((item) => (
            <ShoppingItems key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="z-10 lg:w-1/2 lg:pl-5 text-center lg:text-left">
        <HeroSection />
      </div>
    </div>
  );
};

export default Hero;
