import React, { useContext, useEffect } from "react";
import { CardContext } from "../Context/cardContext";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Card = ({ card, onClick }) => {
  return (
    <Link to={`/products/${card.name}`}>
      <div
        className="h-full text-center p-4 border rounded-md cursor-pointer bg-white hover:drop-shadow-md transition "
        onClick={onClick}>
        <img
          src={card.src}
          alt={card.name}
          className="h-4/5 rounded-md m-auto"
        />
        <h3 className="text-xl mt-4 font-semibold">{card.name}</h3>
        {/* <Button btnValue={"Details"} onClick={onClick} /> */}
      </div>
    </Link>
  );
};

export default Card;
