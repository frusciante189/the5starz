import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-banner bg-no-repeat lg:h-[830px] h-[550px] md:bg-center bg-cover bg-custom">
      <div className="lg:px-[70px] sm:px-12 px-5 h-full pb-10 md:pb-0 z-50">
        <div className="flex flex-col items-start sm:justify-center justify-end h-full">
          <h1 className="xl:text-[64px] xl:leading-[64px] lg:text-[52px] lg:leading-[52px] md:text-[44px] md:leading-[44px] sm:text-[30px] sm:leading-[30px] font-semibold text-[22px] leading-[22px]">
            <span className="text-primaryRed">authentic content</span> <br />
            made by <span className="text-primaryRed">real</span> people,
            <br />
            just like you
          </h1>
          <p className="text-lg max-w-xl mt-5">
            We connect brands with <span className="font-bold">real </span>
            people in return for their authentic, homemade content.
          </p>
          <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 md:mt-8 mt-5 w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
            <button
              className="bg-primaryRed px-5 py-4 text-white font-bold uppercase flex items-center justify-between w-full"
              onClick={handleScroll}
            >
              Book a Demo
              <span>
                <BsArrowRight size={18} className="inline-block ml-2" />
              </span>
            </button>
            <Link href="join-our-community" passHref>
              <button className="bg-primaryRed px-5 py-4 text-white font-bold uppercase flex items-center justify-between w-full">
                Sign Up for free
                <span>
                  <BsArrowRight size={18} className="inline-block ml-2" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
