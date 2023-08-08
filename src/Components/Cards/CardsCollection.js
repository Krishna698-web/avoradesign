import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { CardContext } from "../Context/cardContext";

const CardsCollection = ({ cards, label }) => {
  const { setCard } = useContext(CardContext);

  const passCardHandler = (card) => {
    // localStorage.setItem("card", card);
    setCard(card);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-10 ">
      <h2 className="text-left text-4xl font-bold text-blue-950 lg:w-1/2 md:w-4/5 mb-5 ml-1">
        {label}
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 gap-4 lg:w-1/2 md:w-4/5">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => passCardHandler(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsCollection;
