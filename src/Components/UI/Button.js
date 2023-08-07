import React from "react";

const Button = ({ onClick, btnValue, className }) => {
  return (
    <>
      <button
        className={`${className} bg-blue-700 text-white py-2 px-10 rounded-sm drop-shadow mt-2 hover:drop-shadow-lg transition`}
        onClick={onClick}>
        {btnValue}
      </button>
    </>
  );
};

export default Button;
