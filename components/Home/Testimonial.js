import Image from "next/image";
import React from "react";
import Tes1 from "../../public/Assets/tes1.jpg";
import Tes2 from "../../public/Assets/tes2.jpg";
import q1 from "../../public/Assets/q1.png";
import q2 from "../../public/Assets/q2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-bg3 bg-left-bottom bg-no-repeat relative overflow-hidden">
      <div className="sm:py-7 md:py-10 lg:py-12 xl:py-16 py-7 flex flex-col items-center">
        <h1 className="text-[28px] leading-[28px] lg:text-[34px] lg:leading-[34px] xl:text-[42px] xl:leading-[42px] text-primaryRed text-center font-bold">
          Our clients love us
        </h1>
        <div className="bg-primaryRed h-1.5 w-1/6 lg:w-[7%] rounded-full lg:mt-5 mt-3"></div>
        <div className="mt-10 lg:max-w-5xl md:max-w-2xl sm:max-w-lg max-w-full mx-auto sm:px-5 px-2">
          {/* testi */}
          <Slider {...settings}>
            <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-lg mx-auto">
              <p className="text-lg text-center">
                the5starz created amazing video testimonials for our product
                launch. We sold 30% above target using authentic content!
              </p>
              <div className="flex items-center flex-col mt-5">
                <Image
                  src={Tes1}
                  width={74}
                  height={74}
                  objectFit="cover"
                  className="rounded-full"
                  alt="the5starzz"
                />
                <h1 className="font-bold text-lg text-center mt-2">
                  Yafit Eldan
                </h1>
                <p className="text-sm">Marketing Manager</p>
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-center">
                We used the5starz to create reviews & photos for our hero
                products, Everything was handed in on time and with great
                quality assurance!
              </p>
              <div className="flex items-center flex-col mt-5">
                <Image
                  src={Tes2}
                  width={74}
                  height={74}
                  objectFit="cover"
                  className="rounded-full"
                  alt="the5starzz"
                />
                <h1 className="font-bold text-lg text-center mt-2">
                  Yafit Eldan
                </h1>
                <p className="text-sm">VP Marketing</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="absolute md:-top-4 sm:top-0 -top-2 md:left-12 sm:left-5 left-px lg:w-64 lg:h-36 md:w-32 md:h-16 w-16 h-8">
        <Image src={q1} layout="fill" objectFit="cover" alt="the5starzz" />
      </div>
      <div className="absolute md:-bottom-4 bottom-0 md:right-12 sm:right-5 right-2 lg:w-64 lg:h-36 md:w-32 md:h-16 w-16 h-8">
        <Image src={q2} layout="fill" objectFit="cover" alt="the5starzz" />
      </div>
    </section>
  );
};

export default Testimonial;
