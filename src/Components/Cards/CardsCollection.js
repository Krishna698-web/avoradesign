import React, { useContext, useEffect } from "react";
import Card from "./Card";
import visitingCard from "../../Images/visiting-card.jpg";
import billBook from "../../Images/bill-book.png";
import stickers from "../../Images/stickers.jpg";
import envelope from "../../Images/envelope.jpg";
import banner from "../../Images/banner.jpg";
import rubberStamp from "../../Images/rubberStamp.png";
import menu from "../../Images/menu.jpg";
import tshirt from "../../Images/tshirt.png";
import { CardContext } from "../Context/cardContext";

const cards = [
  { id: "c1", name: "Visiting Card", src: visitingCard },
  { id: "c2", name: "Bill book", src: billBook },
  { id: "c3", name: "Stickers", src: stickers },
  { id: "c4", name: "Envelope", src: envelope },
  { id: "c5", name: "Rubber stamp", src: rubberStamp },
  { id: "c6", name: "T-shirt", src: tshirt },
  { id: "c7", name: "Menu", src: menu },
  { id: "c8", name: "Banner", src: banner },
];

const CardsCollection = () => {
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
