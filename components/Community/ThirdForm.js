import React from "react";

const ThirdForm = () => {
  return (
    <div className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">
            I agree to recieve an email eveytime a new product is offered to me
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>Yes</span>
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            I have read and agree to your terms & conditions
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="checkbox" />
              <span>Yes</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
