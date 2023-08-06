import React, { useContext } from "react";
import { CardContext } from "../Context/cardContext";

const ProductDetails = () => {
  const { card } = useContext(CardContext);

  return (
    <div className="py-20">
      <div className="w-full py-14 flex justify-center">
        <div className="w-4/5 flex flex-wrap rounded-lg overflow-hidden border">
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full">
            <img src={card.src} alt={card.name} className="w-full" />
          </div>
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full text-left py-4 lg:px-10 px-5">
            <h1 className="font-semibold lg:text-4xl text-2xl">{card.name}</h1>
            <p className="text-xl text-gray-700 my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              error nam mollitia unde veniam ex, aliquam vitae ut odit,
              reprehenderit pariatur omnis fuga molestiae quos ratione et. Quod,
              autem recusandae dignissimos enim esse optio deserunt quis minus
              dolores, repellendus inventore facilis unde vero. Quasi maxime quo
              soluta modi maiores, omnis alias, repellat suscipit officia
              ratione quis, dolor animi voluptatibus? Libero?
            </p>
            <button className="bg-blue-500 text-white py-2 px-10 rounded-sm drop-shadow mt-2 hover:drop-shadow-lg transition">
              Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
