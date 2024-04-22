import React from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/item1.png";

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
    <div className="bg-amber-800 relative flex flex-col lg:flex-row justify-center items-center h-screen p-6 lg:p-10">
      <img
        src={item1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.3 }}
      />
      <div className="z-10 lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <HeroSection />
        <Description />
        <div className="flex justify-center mt-8">
          <Link className="bg-amber-800 px-6 py-3 rounded-md text-lg font-semibold  border-t-2 transition-colors duration-300 hover:bg-amber-600 hover:text-white">
            Scroll Down to Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import { Link } from "react-router-dom";
// import item1 from "../assets/item1.png";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <motion.div
//       className="hero-section text-center"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h1 className="text-3xl font-bold mb-4">Welcome to Gona Pearls shop!</h1>
//       <p className="text-lg">Discover our latest collection of unique items</p>
//     </motion.div>
//   );
// };

// const Description = () => {
//   return (
//     <motion.div
//       className="description text-center"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 0.5 }}
//     >
//       <p className="text-lg font-semibold mb-2">Get 20% off on all items!</p>
//       <p className="text-lg">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//         vehicula, ligula vitae commodo convallis, purus odio commodo sem, nec
//         varius purus purus sit amet arcu.
//       </p>
//     </motion.div>
//   );
// };

// const Hero = () => {
//   return (
//     <div className="bg-amber-800 relative flex flex-col lg:flex-row justify-center items-center h-screen p-6 lg:p-10">
//       <motion.img
//         src={item1}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         style={{ opacity: 0.3 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       />
//       <div className="z-10 lg:w-1/2 lg:pr-10 text-center lg:text-left">
//         <HeroSection />
//         <Description />
//         <motion.div
//           className="flex justify-center mt-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           <Link
//             className="bg-amber-800 px-6 py-3 rounded-md text-lg font-semibold border-t-2 transition-colors duration-300 hover:bg-amber-600 hover:text-white"
//             to="/ShoppingContainer"
//           >
//             Scroll Down to Shop Now
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
