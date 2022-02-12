import React from "react";

const Hero = ({ title }) => {
  return (
    <div className="bg-headerBackground bg-no-repeat bg-[#F0F0F0] md:py-[15%] sm:pt-[20%] sm:pb-[10%] pt-[35%] pb-[10%] flex items-center justify-center md:bg-center bg-cover">
      <h1 className="font-bold text-[28px] leading-[28px] sm:text-[31px] sm:leading-[31px] lg:text-[34px] lg:leading-[34px] xl:text-[42px] xl:leading-[42px]">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
