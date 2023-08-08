import React, { useContext, useEffect } from "react";
import CardsCollection from "../Cards/CardsCollection";
import { CardContext } from "../Context/cardContext";

const Products = () => {
  const { cards, setShowMenu } = useContext(CardContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="w-full py-20 bg-gray-50">
      <CardsCollection cards={cards} label={"Products"} />
    </div>
  );
};

export default Products;
