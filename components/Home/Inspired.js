import Lightbox from "./Lightbox";
import React, { useState } from "react";

const Inspired = () => {
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#D6D4D5]">
      <div className="lg:px-[70px] sm:px-12 p-5 sm:py-7 md:py-10 lg:py-12 xl:py-16">
        <h1 className="text-center text-[28px] leading-[28px]">Get inspired</h1>
      </div>
      <div className="mt-10 max-w-7xl mx-auto lg:columns-4 columns-2 break-before-avoid gap-6">
        <img
          src="https://the5starz.com/wp-content/uploads/2021/11/pro8.jpg"
          alt=""
          onClick={() => setOpen(true)}
        />
        <div className="relative">
          <img
            src="https://the5starz.com/wp-content/uploads/2021/12/0a7bae_f228cfc6624042f69687c777945a9596_mv2.jpeg"
            alt=""
          />
          <span className="absolute bottom-3 left-3 text-white bg-black p-3 bg-opacity-50 font-bold text-sm">
            Anna Stern for Smashbox
          </span>
        </div>
        <img
          src="https://the5starz.com/wp-content/uploads/2021/11/pro6.jpg"
          alt=""
        />
        <img
          src="https://the5starz.com/wp-content/uploads/2021/11/pro11.jpg"
          alt=""
        />
      </div>
      <Lightbox src={image} open={open} setOpen={setOpen} />
    </section>
  );
};

export default Inspired;
