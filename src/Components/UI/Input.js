import React from "react";

const Input = ({ type, className, id, label, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="block font-semibold ml-1 text-lg">
        {label}
      </label>
      <input
        type={type}
        className={`${className} border py-2 px-3 rounded-sm w-full font-semibold`}
        id={id}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
