import React, { useContext } from "react";
import { CardContext } from "../Context/cardContext";

const Card = ({ card }) => {
  const { setCard } = useContext(CardContext);

  return (
    <div
      className="h-full text-center border p-4 rounded-md cursor-pointer transition"
      onClick={() => setCard(card)}>
      <img src={card.src} alt={card.name} className="h-4/5 rounded-md m-auto" />
      <h3 className="text-xl mt-4 font-semibold">{card.name}</h3>
    </div>
  );
};

export default Card;
