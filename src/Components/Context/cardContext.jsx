import { createContext, useState } from "react";
import visitingCard from "../../Images/visiting-card.jpg";
import billBook from "../../Images/bill-book.png";
import stickers from "../../Images/stickers.jpg";
import envelope from "../../Images/envelope.jpg";
import banner from "../../Images/banner.jpg";
import rubberStamp from "../../Images/rubberStamp.png";
import menu from "../../Images/menu.jpg";
import tshirt from "../../Images/tshirt.png";

export const CardContext = createContext({});

const CardContextProvider = ({ children }) => {
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
  const [card, setCard] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <CardContext.Provider
      value={{ card, setCard, showModal, setShowModal, cards }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
