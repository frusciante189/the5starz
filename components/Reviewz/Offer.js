import Image from "next/image";
import React from "react";
import img from "../../public/Assets/op.png";

const Offer = () => {
  return (
    <section className="bg-white py-12 relative">
      <div className="max-w-4xl mx-auto flex flex-col">
        <h1 className="text-[39px] font-black max-w-sm">
          Choose from the following products we are currently offering:
        </h1>
        <span className="mt-2 text-lg">Amkiri visual fragrance</span>
        <span className="mt-2 text-lg">Moses slides</span>
        <div className="py-5 text-left">
          <button className="bg-primaryRed text-white p-[14px] rounded-lg">
            Rush me a FREE product
          </button>
        </div>
      </div>
      <div className="outline outline-4 max-w-max outline-white absolute -top-32 -translate-x-1/2 right-[10%] rounded">
        <Image
          src={img}
          width={300}
          height={520}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Offer;
