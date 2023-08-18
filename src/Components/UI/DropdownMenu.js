import React, { useContext, useState } from "react";

const DropdownMenu = ({ list, onPriceTag }) => {
  // console.log(list);
  const passPriceHandler = (ele) => {
    onPriceTag(ele);
  };

  return (
    <>
      <ul className="absolute top-14 left-0 z-20 w-full border rounded-md bg-white overflow-y-scroll h-32 shadow-xl drop-shadow-xl">
        {list.map((ele, i) => (
          <li
            key={i}
            className="border-b-2 py-2 px-3 font-semibold text-lg"
            onClick={() => passPriceHandler(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownMenu;
