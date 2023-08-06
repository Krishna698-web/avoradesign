import { createContext, useState } from "react";

export const CardContext = createContext({});

const CardContextProvider = ({ children }) => {
  const [card, setCard] = useState({});

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
