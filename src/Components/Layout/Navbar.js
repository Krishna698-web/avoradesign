import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CardContext } from "../Context/cardContext";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const { showMenu, setShowMenu } = useContext(CardContext);

  const { pathname } = useLocation();

  let subpage = pathname.split("/")?.[1];

  if (subpage === undefined || subpage === null || subpage === "") {
    subpage = "/";
  }
  console.log({ subpage });

  const setClasses = (type = null) => {
    let listStyles = "p-5 font-bold transition";
    if (subpage === type) {
      listStyles +=
        " text-blue-800 lg:border-b-2 lg:border-b-blue-500 md:border-b-2 md:border-b-blue-500 max-sm:bg-slate-100";
    } else {
      listStyles += " text-slate-800";
    }

    return listStyles;
  };

  // console.log(setClasses());

  const classNameForMenu = showMenu
    ? "absolute flex flex-col top-16 bg-white left-0 w-full"
    : "max-sm:hidden";

  const barClassname = "bg-blue-900 block h-1";

  return (
    <nav
      className="fixed z-20 w-full bg-white drop-shadow-md flex justify-between items-center px-8 md:py-0
     sm:py-4 max-sm:py-4">
      <Link to="/">
        <div className="cursor-pointer">Avora Design</div>
      </Link>
      <ul className={`${classNameForMenu} flex font-semibold`}>
        <Link className={setClasses("/")} to="/">
          <li>Home</li>
        </Link>
        <Link className={setClasses("products")} to="/products">
          <li>Products</li>
        </Link>
        <Link className={setClasses("aboutus")} to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link className={setClasses("services")} to="/services">
          <li>Services</li>
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
