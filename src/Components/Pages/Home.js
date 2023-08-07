import React from "react";
import IntroSection from "../Layout/IntroSection";
import CardsCollection from "../Cards/CardsCollection";

const Home = () => {
  return (
    <div className="py-20">
      <IntroSection />
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-blue-900">Products</h1>
        <CardsCollection />
      </div>
    </div>
  );
};

export default Home;
