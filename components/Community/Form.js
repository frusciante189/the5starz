import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

export const FormNavigationBar = ({ onNext, onPrev }) => {
  return (
    <div className="mt-4 flex space-x-4">
      {index >= 1 && (
        <button
          className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
          onClick={(e) => {
            e.preventDefault();
            setIndex((oldState) => oldState - 1);
            window.scrollTo(0, 0);
          }}
        >
          PREVIOUS
        </button>
      )}
      <button
        className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
        type="submit"
      >
        {index === 2 ? <span>Submit</span> : <span>Next</span>}
      </button>
    </div>
  );
};

const Form = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const submitForm = (data) => {
    console.log(`submitForm`, { data });
  };

  const handleNext = (data) => {
    setFormData((oldData) => ({ ...oldData, ...data }));
    setIndex((oldState) => oldState + 1);

    if (index === 2) {
      submitForm({ ...formData, ...data });
    }
    window.scrollTo(0, 0);
  };

  const handlePrev = (data) => {
    setFormData((oldData) => ({ ...oldData, ...data }));
    if (index > 0) {
      setIndex((oldState) => oldState - 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <section className="lg:py-24 md:py-14 sm:py-10 pb-12 pt-5 lg:px-[70px] sm:px-12 px-5">
      <div className="">
        <h1 className=" text-primaryRed text-[19px] leading-[19px] font-bold text-center">
          The more info we have the greater your chances of receiving free
          products.
        </h1>
        <div className="lg:mt-[70px] md:mt-[50px] mt-10 flex sm:flex-row flex-col items-start sm:items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 lg:pb-[46px] md:pb-8 pb-5 border-b">
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 0
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300`}
            >
              1
            </span>
            <h1 className="md:text-sm text-xs font-semibold">
              Personal Information
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 1
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300 `}
            >
              2
            </span>
            <h1 className="md:text-sm text-xs font-semibold">
              Getting to know you better (optional)
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 2
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300 `}
            >
              3
            </span>
            <h1 className="md:text-sm text-xs font-semibold">Agreement</h1>
          </div>
        </div>
      </div>
      <div className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
        {index === 0 && <FirstForm onNext={handleNext} />}
        {index === 1 && <SecondForm onPrev={handlePrev} onNext={handleNext} />}
        {index === 2 && <ThirdForm onPrev={handlePrev} onNext={handleNext} />}
      </div>
    </section>
  );
};

export default Form;
