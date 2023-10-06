import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
import share from "../img/share.svg";
import compare from "../img/compare.svg";
import like from "../img/like.svg";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, category, title, price } = product;
  return (
   

    <div className="relative w-60 h-82 bg-product-bg overflow-hidden hover:shadow-lg hover:opacity-7 hover:border-gray-300">
      <img src={image} alt="Product Image" className="w-full h-auto" />

      <div className="absolute  top-0 right-5 rounded-full bg-red text-white p-2 transform translate-x-2 translate-y-2">
        -30%
      </div>

      <div className="absolute inset-0 bg-grey-300 bg-opacity-80 flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="text-white items-center text-sm w-full">
          <div className="mb-4 flex justify-center gap-2">
            <Link
              onClick={() => addToCart(product, id)}
              className="bg-white text-primary px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Add to Cart
            </Link>
            <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => alert("share")}
              className="text-xs  px-1 py-1 focus:outline-none focus:ring-2 focus:text-primary focus:ring-primary mx-1"
            >
              <img className="inline" src={share} alt="Share Image" /> Share
            </button>
            <button
              onClick={() => alert("compare")}
              className="text-xs text-white px-1 py-1 focus:outline-none focus:ring-2 focus:text-primary focus:ring-primary mx-1"
            >
              <img
                className="inline max-w-xs"
                src={compare}
                alt="Compare Image"
              />{" "}
              Compare
            </button>
            <button
              onClick={() => alert("like")}
              className="text-xs text-white px-1 py-1 focus:outline-none focus:ring-2 focus:text-primary focus:ring-primary mx-1"
            >
              <img className="inline" src={like} alt="Like Image" /> Like
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 my-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-grey-200 ">
          {product.description.length > 70
            ? product.description.substring(0, 70) + " ..."
            : product.description}
        </p>
        <div className="text-gray-700 text-sm mt-1 flex justify-between">
          Rs. {price.toFixed(2)}
          <span className="text-sm text-grey-100 line-through">
            Rs. {(price * 1.3).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
