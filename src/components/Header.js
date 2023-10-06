import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import love from "../img/love.svg";
import account from "../img/account.svg";
import search from "../img/search.svg";
import cart from "../img/cart.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[100px]">
            <img src={Logo} alt="" />
          </div>
        </Link>

        <Link
          to="/"
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary "
        >
          Home
        </Link>

        <Link
          to="/"
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
        >
          Shop
        </Link>
        <Link
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
          href="/"
        >
          About
        </Link>
        <Link
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
          to="/"
        >
          Contact
        </Link>
        <Link
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
          to="/"
        >
          <img src={account} alt="" width="20" height="20" />
        </Link>
        <Link
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
          to="/"
        >
          <img src={search} alt="" width="20" height="20" />
        </Link>
        <Link
          class="text-black hover:pb-4 hover:border-b-4 hover:border-primary"
          to="/"
        >
          <img src={love} alt="" width="20" height="20" />
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <img src={cart} alt="" width="20" height="20" />
          <div className="bg-red absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
