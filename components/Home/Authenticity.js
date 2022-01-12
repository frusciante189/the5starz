import React from "react";

const Authenticity = () => {
  return (
    <div className="bg-bg4 w-full bg-cover bg-no-repeat sm:py-7 md:py-10 lg:py-12 xl:py-16 py-5">
      <div className="max-w-5xl mx-auto flex items-center flex-col">
        <h1 className="font-bold text-[42px] leading-[42px]">
          Authenticity pays off
        </h1>
        <div className="bg-black h-1.5 w-1/6 lg:w-[7%] rounded-full lg:mt-5 mt-3"></div>
        <div className="grid grid-cols-3">
          <div className="bg-white flex flex-col h-full">
            <div className="w-full h-2/5">
              <h1>50%</h1>
            </div>
            <div className="h-3/5">
              <h1>Click through rates</h1>
              <p>
                Ads based on UGC receive 4 times higher click-through rates and
                a 50% drop in cost-per-click compared to average ads.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;
