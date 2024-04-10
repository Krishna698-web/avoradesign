import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../Context/cardContext";
import ContactForm from "../Forms/ContactForm";
import Button from "../UI/Button";
import CardsCollection from "../Cards/CardsCollection";

import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "../UI/DropdownMenu";

const ProductDetails = () => {
  const { setCard, card, showModal, setShowModal, cards, setShowMenu } =
    useContext(CardContext);

  const [priceTag, setPriceTag] = useState("");
  const [showList, setShowList] = useState(false);

  const remainingCards = cards.filter((c) => c.id !== card.id);

  useEffect(() => {
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem("card"))));
    // console.log(card);
    // console.log(card.name);
    setCard(card);
    setShowMenu(false);
    setPriceTag(card.price_points[0]);
  }, [card]);

  const getPriceTagHandler = (priceTag) => {
    if (priceTag) {
      setPriceTag(priceTag);
    } else {
      setPriceTag(card.price_points[0]);
    }
  };

  return (
    <div className="py-20">
      <div className="w-full py-14 max-sm:py-8 flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-wrap rounded-lg border">
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full">
            <img src={card.src} alt={card.name} className="w-full" />
          </div>
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full text-left py-6 lg:px-10 px-5 ">
            <h1 className="font-bold lg:text-4xl text-3xl">{card.name}</h1>
            <p className="text-xl text-gray-700 my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              error nam mollitia unde veniam ex, aliquam vitae ut odit,
              reprehenderit pariatur omnis fuga molestiae quos ratione et. Quod,
              autem recusandae dignissimos enim esse optio deserunt quis minus
              dolores, repellendus inventore facilis unde vero. Quasi maxime quo
              soluta modi maiores, omnis alias, repellat suscipit officia
              ratione quis, dolor animi voluptatibus? Libero?
            </p>

            <div
              className="relative flex justify-between border p-3 px-5 rounded-full my-3 cursor-pointer"
              onClick={() => setShowList(!showList)}>
              <span>Quantity</span>
              <span className="flex items-center gap-3">
                <span className="font-semibold">
                  {priceTag ? priceTag : card.price_points[0]}
                </span>
                <span>
                  <FaChevronDown className="font-extrabold mt-1" />
                </span>
              </span>
              {showList && (
                <DropdownMenu
                  onPriceTag={getPriceTagHandler}
                  list={card.price_points}
                />
              )}
            </div>
            <Button btnValue={"Enquiry"} onClick={() => setShowModal(true)} />
            {showModal && <ContactForm />}
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <CardsCollection cards={remainingCards} label={"Related products"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
