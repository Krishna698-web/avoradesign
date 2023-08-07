import React from "react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center font-bold w-full py-10 ">
        <h1 className="text-slate-900 text-center lg:w-5/12 md:w-4/5 max-sm:w-10/12 text-8xl md:text-8xl sm:text-6xl max-sm:text-6xl">
          Lets talk <span className="text-blue-900">B</span>usiness with some
          creative tools&nbsp;
          <span className="text-2xl text-blue-800">in your hand.</span>
        </h1>
        <Link to={"/services"}>
          <button className="py-2 px-8 text-white bg-blue-800 rounded-full mt-10 drop-shadow-lg hover:bg-white  hover:text-blue-800 transition">
            Explore
          </button>
        </Link>
      </header>
    </>
  );
};

export default IntroSection;
