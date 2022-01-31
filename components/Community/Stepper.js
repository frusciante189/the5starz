import React from "react";

const Stepper = ({ index, steps }) => {
  console.log(`muly:Stepper:Stepper`, { index, steps });
  return (
    <div className="">
      <div className="lg:mt-[70px] md:mt-[50px] mt-10 flex sm:flex-row flex-col items-start sm:items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 lg:pb-[46px] md:pb-8 pb-5 border-b">
        {steps.map((step, idx) => {
          return (
            <div className="flex items-center space-x-4">
              <span
                className={`${
                  index === idx
                    ? "bg-primaryRed text-white flex-shrink-0"
                    : "bg-white text-black"
                } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300 outline-1`}
              >
                {idx + 1}
              </span>
              <p className="md:text-sm text-xs font-semibold">{step}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Stepper;
