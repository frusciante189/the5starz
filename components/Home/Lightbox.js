import React from "react";
import ReactPlayer from "react-player";

const Lightbox = ({ src, open, setOpen, vid }) => {
  return (
    <div
      className={`${
        open
          ? "bg-black fixed h-screen bg-opacity-70 top-0 w-screen z-30"
          : "hidden"
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <ReactPlayer
          url="./Assets/gallery/v1.mp4"
          width="50%"
          height="50%"
          controls={true}
        />
      </div>
    </div>
  );
};

export default Lightbox;
