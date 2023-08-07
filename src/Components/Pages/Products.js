import React, { useContext } from "react";
import CardsCollection from "../Cards/CardsCollection";
import { CardContext } from "../Context/cardContext";

const Products = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="w-full py-28">
      <h1 className="text-4xl font-bold text-blue-900">Products</h1>
      <CardsCollection cards={cards} />
    </div>
  );
};

export default Products;
