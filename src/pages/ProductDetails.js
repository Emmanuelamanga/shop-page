import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Icon } from "@iconify/react";
import cart from "../img/cart.svg";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;
  return (
    <>
      <div className=" mt-20 flex flex-col lg:flex-row bg-secondary p-2 justify-between items-center">
          <div className="lg:w-1/3 flex items-center p-2 justify-center gap-4">
            <Link to={"/home"} className="hover:text-primary">
              Home
            </Link>{" "}
            <Link to={"/shop"} className="hover:text-primary">
              shop
            </Link>{" "}
            | <span>Furniture</span>
          </div>
        </div>
      <div className="mt-2">
       
        <div className="mx-auto flex flex-wrap justify-center">
          <div className="flex gap-4 ">
            <div className="grid grid-cols-1 gap-1 w-50 h-auto">
              <div className="">
                <img
                  className="w-20 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className=" w-20 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="h-auto w-20 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="h-auto w-20 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="h-auto w-20 rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <img
                className="h-80 max-w-full rounded-lg"
                src={image}
                alt=""
              />
            </div>
            <div className="h-80">
              <h3>{title}</h3>
              <span>
                Rs. {price.toFixed(2)}
              </span>
              <div className="flex">
                <span className="flex py-1 pr-1">
                  <Icon icon="ion:star" color="#ffc700" />
                  <Icon icon="ion:star" color="#ffc700" />
                  <Icon icon="ion:star" color="#ffc700" />
                  <Icon icon="ion:star" color="#ffc700" />
                  <Icon icon="ic:baseline-star-half" color="#ffc700" />
                </span>

                <span className="border-l-2 border-grey-100 pl-2 text-grey-100">
                  {" "}
                  5 Customer Reviews
                </span>
              </div>
              <p className="w-96 h-70">{description}</p>
              <p className="text-grey-100">Size</p>
              <div className="flex gap-2 py-2">
                <div className="bg-primary text-white w-8 p-1 text-center h-8 rounded-lg text-sm ">
                  L
                </div>
                <div className="bg-secondary text-black w-8 p-1 text-center h-8 rounded-lg text-sm ">
                  XL
                </div>
                <div className="bg-secondary text-black w-8 p-1 text-center h-8 rounded-lg text-sm ">
                  XS
                </div>
              </div>
              <div className="my-2">
                <p className="text-grey-100 ">Color</p>
                <div className="flex gap-2 py-2">
                  <div className="bg-purple text-white text-center w-5 h-5 rounded-full"></div>
                  <div className="bg-black text-black text-center w-5 h-5 rounded-full"></div>
                  <div className="bg-primary text-black text-center w-5 h-5 rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex border border-grey-100 rounded-lg w-32 h-auto gap-4  ">
                  <span className="p-1 my-2 mx-2 hover:outline-none hover:outline-primary rounded-full focus:outline-none focus:ring-2 focus:ring-primary">
                    <Icon icon="clarity:minus-line" />
                  </span>
                  <span className=" my-2"></span>
                  <span className="p-1 my-2 mx-2 hover:outline-none hover:outline-primary rounded-full">
                    <Icon icon="clarity:plus-line" />
                  </span>
                </div>
                <div
                  onClick={() => addToCart(product, product.id)}
                  className="flex border hover:outline-none hover:outline-primary rounded-lg w-36 h-auto gap-2 p-2 "
                >
                  <img src={cart} alt="" className="w-4" />
                  <span className="px-2">Add to Cart</span>
                </div>
                <div className="flex border border-black rounded-lg hover:outline-none hover:outline-primary w-32 h-auto gap-2 p-2">
                  <span className="p-1">
                    <Icon icon="clarity:plus-line" />
                  </span>
                  <span className="">Compare</span>
                </div>
              </div>
              <hr className="my-4 text-grey-100" />
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-1">
                <table className="text-grey-100 w-full">
                  <tbody>
                    <tr className="py-2">
                      <td className="w-20">SKU</td>
                      <td>:</td>
                      <td className="px-2">SS001</td>
                    </tr>
                    <tr className="py-2">
                      <td>Tags</td>
                      <td>:</td>
                      <td className="px-2">Sofa, Chair, Home, Shop</td>
                    </tr>
                    <tr className="py-2">
                      <td>Share</td>
                      <td>:</td>
                      <td className="px-2 py-2 flex gap-2">
                        <Icon icon="simple-icons:facebook" />
                        <Icon icon="raphael:linkedin" />
                        <Icon icon="cib:twitter" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
