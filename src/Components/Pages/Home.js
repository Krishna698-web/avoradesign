import React, { useContext } from "react";
import IntroSection from "../Layout/IntroSection";
import CardsCollection from "../Cards/CardsCollection";
import { CardContext } from "../Context/cardContext";
import Dealing from "../Layout/Dealing";

const Home = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="py-20">
      <IntroSection />
      <div className="mt-20">
        <CardsCollection cards={cards} label={"Products"} />
      </div>
      <Dealing />
    </div>
  );
};

export default Home;
