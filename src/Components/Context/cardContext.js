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
    {
      id: "c1",
      name: "Visiting Card",
      src: visitingCard,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c2",
      name: "Bill book",
      src: billBook,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c3",
      name: "Stickers",
      src: stickers,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c4",
      name: "Envelope",
      src: envelope,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c5",
      name: "Rubber stamp",
      src: rubberStamp,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c6",
      name: "T-shirt",
      src: tshirt,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c7",
      name: "Menu",
      src: menu,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
    {
      id: "c8",
      name: "Banner",
      src: banner,
      price_points: [
        "100 (₹200)",
        "200 (₹350)",
        "500 (₹700)",
        "1000 (₹1200)",
        "2000 (₹2000)",
      ],
    },
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
