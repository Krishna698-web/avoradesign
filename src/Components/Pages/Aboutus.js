import React, { useContext, useEffect } from "react";
import { CardContext } from "../Context/cardContext";

const Aboutus = () => {
  const { setShowMenu } = useContext(CardContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className=" py-24">
      <div className="text-3xl">About us</div>
    </div>
  );
};

export default Aboutus;
