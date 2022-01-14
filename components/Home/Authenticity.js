import Image from "next/image";
import React from "react";
import AuthCard from "./AuthCard";
import data from "./AuthData";

const Authenticity = () => {
  return (
    <section className="bg-bg4 w-full bg-no-repeat bg-cover sm:py-7 md:py-10 lg:py-12 xl:py-16 py-5 bg-[#F2F1F0]">
      <div className="max-w-6xl mx-auto flex items-center flex-col lg:px-[70px] sm:px-12 px-5">
        <h1 className="font-bold text-[28px] leading-[28px] lg:text-[42px] lg:leading-[42px]">
          Authenticity pays off
        </h1>
        <div className="bg-black h-1.5 w-1/3 sm:w-1/6 lg:w-[7%] rounded-full lg:mt-5 mt-3"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {data.map((item, index) => {
            return (
              <AuthCard
                perc={item.perc}
                title={item.title}
                desc={item.desc}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Authenticity;
