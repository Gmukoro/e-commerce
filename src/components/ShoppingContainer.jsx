import React from "react";
import { items } from "../CartItems";
import ShoppingItems from "./ShoppingItems";
import Hero from "./Hero";

const ShoppingContainer = () => {
  return (
    <div>
      <Hero />
      <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {items.map((item) => {
          return <ShoppingItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingContainer;
