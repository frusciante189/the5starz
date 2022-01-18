import React from "react";

const Lightbox = ({ src, open, vid }) => {
  return (
    <div
      className={`${
        open
          ? "bg-black fixed h-screen bg-opacity-70 top-0 w-screen z-30"
          : "hidden"
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Lightbox;
