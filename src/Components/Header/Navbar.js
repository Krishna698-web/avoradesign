import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const barClassname = "bg-blue-900 block h-1";
  return (
    <nav className="fixed z-20 w-full bg-white drop-shadow-md flex justify-between items-center p-5 px-8">
      <div className="cursor-pointer">Avora Design</div>
      <ul className="lg:flex md:flex gap-5 sm:hidden max-sm:hidden cursor-pointer font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
      <div className="lg:hidden md:hidden sm:flex sm:gap-1 max-sm:flex max-sm:gap-1 flex-col cursor-pointer p-2 rounded-sm drop-shadow-sm border">
        <span className={`${barClassname} w-6`}></span>
        <span className={`${barClassname} w-5`}></span>
        <span className={`${barClassname} w-4`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
