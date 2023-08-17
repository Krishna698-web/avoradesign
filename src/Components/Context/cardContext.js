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
    { id: "c1", name: "Visiting Card", src: visitingCard, ppu: 1.5 },
    { id: "c2", name: "Bill book", src: billBook, ppu: 20 },
    { id: "c3", name: "Stickers", src: stickers, ppu: 0.5 },
    { id: "c4", name: "Envelope", src: envelope, ppu: 1.0 },
    { id: "c5", name: "Rubber stamp", src: rubberStamp, ppu: 25 },
    { id: "c6", name: "T-shirt", src: tshirt, ppu: 15 },
    { id: "c7", name: "Menu", src: menu, ppu: 2.5 },
    { id: "c8", name: "Banner", src: banner, ppu: 200 },
  ];
  const [card, setCard] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <CardContext.Provider
      value={{
        card,
        setCard,
        showModal,
        setShowModal,
        cards,
        showMenu,
        setShowMenu,
      }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
