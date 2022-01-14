import Image from "next/image";
import React from "react";
import img from "../../public/Assets/op.png";
import { FaCheck } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="bg-white md:py-12 pb-5 lg:px-2 md:px-10 px-5 relative">
      <div className="max-w-5xl mx-auto flex md:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col mt-2 md:mt-0">
          <h1 className="text-2xl md:text-[39px] md:leading-[60px] font-black max-w-sm">
            Choose from the following products we are currently offering:
          </h1>
          <span className="mt-2 text-lg inline-flex">
            <FaCheck className="w-6 h-6 fill-primaryRed mr-2" /> Amkiri visual
            fragrance
          </span>
          <span className="mt-2 text-lg inline-flex">
            <FaCheck className="w-6 h-6 fill-primaryRed mr-2" /> Moses slides
          </span>
          <div className="py-5 text-left">
            <button className="bg-primaryRed text-white p-[14px] rounded-lg">
              Rush me a FREE product
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="outline outline-4 max-w-max outline-white rounded md:-mt-40 -mt-20">
            <Image src={img} width={300} height={500} objectFit="cover" />
          </div>
        </div>
      </div>

      {/* <div className="outline outline-4 max-w-max outline-white absolute md:-top-20 -top-40 lg:-translate-x-1/2 lg:right-0 md:right-[50px] right-14 rounded">
        <Image src={img} width={300} height={500} objectFit="cover" />
      </div> */}
    </section>
  );
};

export default Offer;
