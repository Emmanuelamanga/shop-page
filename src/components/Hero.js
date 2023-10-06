import React from "react";
import Arrow from "../img/arrow.svg";
import HeroShop from "../img/hero-shop.svg";
import Filter from "./Filter";

const Hero = () => {
  return (
    <section className="relative h-full">
      <img src={HeroShop} alt="Hero image" className="w-full" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold mb-3 text-3xl">Shop</h1>
        <ul className="flex items-center justify-center">
          <li className="font-semibold">Home</li>
          <li>
            <img src={Arrow} alt="arrow" />
          </li>
          <li>Shop</li>
        </ul>
      </div>
      <Filter/>
    </section>
  );
};

export default Hero;
