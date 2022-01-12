import Image from "next/image";
import React from "react";
import Tes1 from "../../public/Assets/tes1.jpg";
import Tes2 from "../../public/Assets/tes2.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="sm:py-7 md:py-10 lg:py-12 xl:py-16 py-5 flex flex-col items-center">
        <h1 className="text-[28px] leading-[28px] lg:text-[34px] lg:leading-[34px] xl:text-[42px] xl:leading-[42px] text-primaryRed text-center font-bold">
          Our clients love us
        </h1>
        <div className="bg-primaryRed h-1.5 w-1/6 lg:w-[7%] rounded-full lg:mt-5 mt-3"></div>
        <div className="mt-10">
          {/* testi */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center">
              the5starz created amazing video testimonials for our product
              launch. We sold 30% above target using authentic content!
            </p>
            <div className="flex items-center flex-col mt-5">
              <Image
                src={Tes1}
                width={74}
                height={74}
                className="rounded-full"
              />
              <h1 className="font-bold text-lg text-center mt-2">
                Yafit Eldan
              </h1>
              <p className="text-sm">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
