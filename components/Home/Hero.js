import React from "react";

const Hero = () => {
  return (
    <div className="bg-banner bg-no-repeat h-[830px] bg-center bg-cover">
      <div className="lg:px-[70px] sm:px-12 px-5 h-full">
        <div className="flex items-center justify-start h-full">
          <h1 className="xl:text-[64px] xl:leading-[64px] lg:text-[52px] lg:leading-[52px] md:text-[44px] md:leading-[44px] sm:text-[30px] sm:leading-[30px] font-semibold text-[22px] leading-[22px]">
            <span className="text-primaryRed">authentic content</span> <br />
            made by <span className="text-primaryRed">real</span> people,
            <br />
            just like you
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
