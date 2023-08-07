import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { CardContext } from "../Context/cardContext";

const CardsCollection = ({ cards }) => {
  const { setCard } = useContext(CardContext);

  const passCardHandler = (card) => {
    // localStorage.setItem("card", card);
    setCard(card);
  };

  return (
    <div className="w-full flex justify-center py-5">
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
