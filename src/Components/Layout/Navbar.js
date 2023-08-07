import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const barClassname = "bg-blue-900 block h-1";
  const listStyles = `${clicked ? "text-blue-800" : "text-black"} p-5`;

  return (
    <nav className="fixed z-20 w-full bg-white drop-shadow-md flex justify-between items-center px-8">
      <div className="cursor-pointer">Avora Design</div>
      <ul className="lg:flex md:flex sm:hidden max-sm:hidden cursor-pointer font-semibold">
        <Link to="/">
          <li className={listStyles} onClick={() => setClicked(true)}>
            Home
          </li>
        </Link>
        <Link to="/products">
          <li className={listStyles} onClick={() => setClicked(true)}>
            Products
          </li>
        </Link>
        <Link to="/aboutus">
          <li className={listStyles} onClick={() => setClicked(true)}>
            About Us
          </li>
        </Link>
        <Link to="/services">
          <li className={listStyles} onClick={() => setClicked(true)}>
            Services
          </li>
        </Link>
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
