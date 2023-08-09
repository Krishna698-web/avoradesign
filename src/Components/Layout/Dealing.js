import React from "react";

const Dealing = () => {
  const divClasses =
    "border-r w-1/3 sm:w-full max-sm:w-full sm:border-b max-sm:border-b py-3";
  const headingClasses = " text-slate-500 text-lg";
  const spanClasses = "text-blue-800 font-extrabold text-5xl";

  return (
    <div className="lg:w-1/2 md:w-4/5 sm:w-11/12 max-sm:w-10/12 mx-auto grid md:grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1 max-sm:border rounded-md mt-14">
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

      <div className={`${divClasses} max-sm:border-none`}>
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
