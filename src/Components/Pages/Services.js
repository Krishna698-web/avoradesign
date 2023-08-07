import React from "react";

const Services = () => {
  const className =
    "w-full border p-3 bg-slate-100 hover:drop-shadow-md rounded-md font-semibold transition cursor-pointer";
  return (
    <div className="w-full flex flex-col justify-center items-center pt-28">
      <h1 className="my-6 font-bold text-4xl text-blue-800">
        Services available.
      </h1>
      <div className="w-1/2 md:w-3/5 sm:w-10/12 max-sm:w-11/12 grid lg:grid-cols-2 md:grid-cols-2 gap-3 sm:grid-cols-1 max-sm:grid-cols-1 p-4">
        <div className={className}>Flex/Banner Printing</div>
        <div className={className}>Pamphlet</div>
        <div className={className}>Bill Book</div>
        <div className={className}>Menu Card</div>
        <div className={className}>Logo Design</div>
        <div className={className}>Envelope</div>
        <div className={className}>Poster Design</div>
        <div className={className}>T-shirt Print</div>
        <div className={className}>Broucher</div>
        <div className={className}>ID Card</div>
        <div className={className}>Sticker Print</div>
        <div className={className}>Certificate Print</div>
        <div className={className}>LED Light Display</div>
        <div className={className}>News Paper Advt.</div>
        <div className={className}>Photo Editing</div>
        <div className={className}>Hoarding</div>
        <div className={className}>Acrylic Letter</div>
        <div className={className}>Mask & Mug Print</div>
        <div className={className}>Web Page Design</div>
      </div>
    </div>
  );
};

export default Services;
