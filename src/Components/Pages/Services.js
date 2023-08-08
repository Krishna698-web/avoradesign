import React, { useContext, useEffect } from "react";
import { CardContext } from "../Context/cardContext";

const tiles = [
  "Flex/Banner Printing",
  "Sticker Print",
  "Certificate Print",
  "ID Card",
  "T-shirt Print",
  "Poster Design",
  "Bill Book",
  "Envelope",
  "Broucher",
  "LED Light Display",
  "News Paper Advt.",
  "Logo Design",
  "Menu Card",
  "Web Page Design",
  "Mask & Mug Print",
  "Acrylic Letter",
  "Hoarding",
  "Photo Editing",
  "Pamphlet",
];

const Services = () => {
  const { setShowMenu } = useContext(CardContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  const className =
    "w-full border p-3 bg-slate-100 hover:drop-shadow-md rounded-md font-semibold transition cursor-pointer";

  return (
    <div className="h-full w-full flex flex-col justify-center items-center pt-28 max-sm:pt-20">
      <h1 className="my-4 font-bold text-4xl text-blue-800">
        Services available.
      </h1>
      <div className="w-1/2 md:w-3/5 sm:w-10/12 max-sm:w-11/12 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 max-sm:grid-cols-1 py-8">
        {tiles.map((tile) => (
          <div className={className}>{tile}</div>
        ))}
      </div>
    </div>
  );
};

export default Services;
