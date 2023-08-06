import React from "react";
import Card from "./Card";
import visitingCard from "../../Images/visiting-card.jpg";
import billBook from "../../Images/bill-book.png";
import stickers from "../../Images/stickers.jpg";
import envelope from "../../Images/envelope.jpg";
import banner from "../../Images/banner.jpg";
import rubberStamp from "../../Images/rubberStamp.png";
import menu from "../../Images/menu.jpg";
import tshirt from "../../Images/tshirt.png";
import { Link } from "react-router-dom";

const cards = [
  {
    name: "Visiting Card",
    src: visitingCard,
  },
  {
    name: "Bill book",
    src: billBook,
  },
  {
    name: "Stickers",
    src: stickers,
  },
  {
    name: "Envelope",
    src: envelope,
  },
  {
    name: "Rubber stamp",
    src: rubberStamp,
  },
  {
    name: "T-shirt",
    src: tshirt,
  },
  {
    name: "Menu",
    src: menu,
  },
  {
    name: "Banner",
    src: banner,
  },
];

const CardsCollection = () => {
  return (
    <div className="w-full flex justify-center py-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 gap-4 lg:w-1/2 md:w-4/5">
        {cards.map((card, i) => (
          <Link to={`/products/${card.name}`}>
            <Card key={card.name} card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsCollection;
