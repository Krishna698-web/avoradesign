import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Logo from "../../Images/logo.png";

const Widget = () => {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="fixed bottom-10 left-5 lg:w-1/5 md:w-1/4 sm:w-1/2 max-sm:w-1/2">
      {showWidget && (
        <div className="flex flex-col items-start rounded-md overflow-hidden mb-2 ml-2 bg-slate-500 shadow-2xl drop-shadow-lg transition-all">
          <div className="flex gap-2 items-center bg-green-900 p-3 w-full">
            <img src={Logo} alt="logo" className="h-5 w-5 rounded-full" />
            <span className="text-white">Avora Design</span>
          </div>
          <div className="ml-3 pt-3">
            <div className="flex flex-col bg-white rounded-lg p-2 mb-3">
              Hi, there!👋 <span> Can we chat?</span>
            </div>
            <a
              target="_blank"
              href="https://wa.me/+917022204986"
              className="flex gap-2 items-center justify-center bg-green-800 text-white mb-2 py-2 px-3 rounded-full">
              Chat <IoMdSend />
            </a>
          </div>
        </div>
      )}
      <button
        className="flex gap-2 justify-center items-center p-3 rounded-full bg-green-600 text-white shadow-xl drop-shadow-lg"
        onClick={() => setShowWidget(!showWidget)}>
        <BsWhatsapp className="text-3xl" />
        {/* <span className="font-semibold">Chat with us</span> */}
      </button>
    </div>
  );
};

export default Widget;
