import React from "react";

const Dealing = () => {
  const divClasses = "border-r  w-1/3";
  const headingClasses = "text-slate-500 font-semibold text-lg";
  const spanClasses = "text-blue-800 font-extrabold text-5xl";
  return (
    <div className="lg:w-1/2 md:w-4/5 mx-auto flex flex-wrap border justify-around items-center rounded-md mt-10 py-7">
      <div className={divClasses}>
        <h3 className={headingClasses}>Operating in</h3>
        <div>
          <span className={spanClasses}>
            12+<span className="text-sm text-slate-600">cities</span>
          </span>
        </div>
      </div>

      <div className={divClasses}>
        <h3 className={headingClasses}>Brands Associated</h3>
        <div>
          <span className={spanClasses}>
            10+<span className="text-sm text-slate-600">clients</span>
          </span>
        </div>
      </div>

      <div className="  w-1/3">
        <h3 className={headingClasses}>Happy Customers</h3>
        <div>
          <span className={spanClasses}>
            100+<span className="text-sm text-slate-600">overall</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dealing;
