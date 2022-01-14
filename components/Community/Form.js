import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

const Form = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="lg:py-24 md:py-14 sm:py-10 py-12 lg:px-[70px] sm:px-12 px-5">
      <div className="">
        <h1 className=" text-primaryRed text-[19px] leading-[19px] font-bold text-center">
          The more info we have the greater your chances of receiving free
          products.
        </h1>
        <div className="mt-[70px] flex sm:flex-row flex-col items-start sm:items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 pb-[46px] border-b">
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 0 ? "bg-primaryRed text-white" : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300`}
            >
              1
            </span>
            <h1 className="text-sm font-semibold">Personal Information</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 1 ? "bg-primaryRed text-white" : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 `}
            >
              2
            </span>
            <h1 className="text-sm font-semibold">
              Getting to know you better (optional)
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-white h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 text-black">
              3
            </span>
            <h1 className="text-sm font-semibold">Agreement</h1>
          </div>
        </div>
      </div>
      {index === 0 && <FirstForm />}
      {index === 1 && <SecondForm />}
      {index === 2 && <ThirdForm />}
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
          onClick={() => setIndex((oldState) => oldState + 1)}
        >
          {index === 2 ? <span>Submit</span> : <span>Next</span>}
        </button>
      </div>
    </section>
  );
};

export default Form;
