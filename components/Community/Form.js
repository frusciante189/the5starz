import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

const Form = () => {
  const [index, setIndex] = useState(0);
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const allData = firstData.concat(secondData, thirdData);

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
            <span
              className={`${
                index === 2 ? "bg-primaryRed text-white" : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 `}
            >
              3
            </span>
            <h1 className="text-sm font-semibold">Agreement</h1>
          </div>
        </div>
      </div>
      {index === 0 && (
        <FirstForm
          index={index}
          setIndex={setIndex}
          firstData={firstData}
          setFirstData={setFirstData}
        />
      )}
      {index === 1 && (
        <SecondForm
          index={index}
          setIndex={setIndex}
          secondData={secondData}
          setSecondData={setSecondData}
        />
      )}
      {index === 2 && (
        <ThirdForm
          index={index}
          setIndex={setIndex}
          thirdData={thirdData}
          setThirdData={setThirdData}
          allData={allData}
        />
      )}
    </section>
  );
};

export default Form;
