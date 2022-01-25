import React, { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";

const ThirdForm = ({ index, setIndex, thirdData, setThirdData, allData }) => {
  const [offer, setOffer] = useState("yes");
  const [aggrement, setAggreement] = useState("yes");

  const handleClick = (e) => {
    e.preventDefault();
    setThirdData([offer, aggrement]);

    fetch("https://api.the5starz.com/contributor-landing-page-answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allData),
    }).then(() => {
      console.log("added");
    });
  };

  return (
    <form className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">
            I agree to recieve an email eveytime a new product is offered to me
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <RadioGroup
            className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0"
            selectedValue={offer}
            onChange={(value) => setOffer(value)}
          >
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <Radio value="yes" /> Yes
            </label>
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <Radio value="no" /> No
            </label>
          </RadioGroup>

          {!offer && (
            <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
              This field is required
            </p>
          )}
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            I have read and agree to your terms & conditions
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <RadioGroup
            className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0"
            selectedValue={aggrement}
            onChange={(value) => setAggreement(value)}
          >
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <Radio value="yes" /> Yes
            </label>
          </RadioGroup>
          {!aggrement && (
            <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {index >= 1 && (
          <button
            className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
            onClick={() => setIndex((oldState) => oldState - 1)}
          >
            PREVIOUS
          </button>
        )}
        <button
          className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
          onClick={handleClick}
        >
          {index === 2 ? <span>Submit</span> : <span>Next</span>}
        </button>
      </div>
    </form>
  );
};

export default ThirdForm;
