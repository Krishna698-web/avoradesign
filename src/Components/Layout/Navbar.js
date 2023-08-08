import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../Context/cardContext";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const { showMenu, setShowMenu } = useContext(CardContext);

  const classNameForMenu = showMenu
    ? "absolute flex flex-col top-16 bg-white left-0 w-full"
    : "max-sm:hidden";

  const barClassname = "bg-blue-900 block h-1";
  const listStyles = `${clicked ? "text-blue-800" : "text-black"} p-5`;

  return (
    <nav
      className="fixed z-20 w-full bg-white drop-shadow-md flex justify-between items-center px-8 md:py-0
     sm:py-4 max-sm:py-4">
      <Link to="/">
        <div className="cursor-pointer">Avora Design</div>
      </Link>
      <ul className={`${classNameForMenu} flex font-semibold`}>
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
      <div
        className="lg:hidden md:hidden sm:flex sm:gap-1 max-sm:flex max-sm:gap-1 flex-col cursor-pointer p-2 rounded-sm drop-shadow-sm border"
        onClick={() => setShowMenu(!showMenu)}>
        <span className={`${barClassname} w-6`}></span>
        <span className={`${barClassname} w-5`}></span>
        <span className={`${barClassname} w-4`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
