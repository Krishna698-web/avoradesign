import React, { useContext } from "react";
import CardsCollection from "../Cards/CardsCollection";
import { CardContext } from "../Context/cardContext";

const Products = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="w-full py-20 bg-gray-50">
      <CardsCollection cards={cards} label={"Products"} />
    </div>
  );
};

export default Products;
