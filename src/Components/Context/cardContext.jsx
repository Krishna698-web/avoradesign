import { createContext, useState } from "react";

export const CardContext = createContext({});

const CardContextProvider = ({ children }) => {
  const [card, setCard] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <CardContext.Provider value={{ card, setCard, showModal, setShowModal }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
