import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../Context/cardContext";
import ContactForm from "../Forms/ContactForm";
import Button from "../UI/Button";
import CardsCollection from "../Cards/CardsCollection";
import Input from "../UI/Input";

const ProductDetails = () => {
  const { setCard, card, showModal, setShowModal, cards, setShowMenu } =
    useContext(CardContext);

  let [totalPrice, setTotalPrice] = useState(0);
  let [quantity, setQuantity] = useState();

  const remainingCards = cards.filter((c) => c.id !== card.id);

  useEffect(() => {
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem("card"))));
    // console.log(card);
    // console.log(card.name);
    setCard(card);
    setShowMenu(false);
  }, []);

  const quantityHandler = (e) => {
    if (quantity === NaN) {
      setTotalPrice(0);
    } else {
      setQuantity(e.target.value);
    }
  };

  const totalPriceHandler = () => {
    setTotalPrice(parseInt(quantity) * card.ppu);
  };

  return (
    <div className="py-20">
      <div className="w-full py-14 max-sm:py-8 flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-wrap rounded-lg overflow-hidden border">
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full">
            <img src={card.src} alt={card.name} className="w-full" />
          </div>
          <div className="lg:w-1/2 lg:h-full md:w-full sm:w-full max-sm:w-full text-left py-4 lg:px-10 px-5 ">
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

            <div className="flex sm:flex-wrap max-sm:flex-col items-center justify-around max-sm:items-start gap-2 border rounded-sm p-3 my-3">
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  label={"Qty"}
                  className={"md:w-max"}
                  onChange={quantityHandler}
                />
                <span>x</span>
                <span className="text-lg font-semibold text-gray-500">
                  {card.ppu}/unit
                </span>
              </div>
              <div className="border flex items-center gap-2 py-2 px-3 rounded-md">
                <span>Total:</span>
                <div className="font-semibold text-xl">{totalPrice}</div>
              </div>
              <button
                className="border bg-slate-800 text-white py-2 px-3 rounded-md hover:drop-shadow-lg active:drop-shadow-sm"
                onClick={totalPriceHandler}>
                Calculate
              </button>
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
