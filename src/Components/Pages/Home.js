import React, { useContext } from "react";
import IntroSection from "../Layout/IntroSection";
import CardsCollection from "../Cards/CardsCollection";
import { CardContext } from "../Context/cardContext";

const Home = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="py-20">
      <IntroSection />
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-blue-900">Products</h1>
        <CardsCollection cards={cards} />
      </div>
    </div>
  );
};

export default Home;
