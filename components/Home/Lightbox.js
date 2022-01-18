import React from "react";
import ReactPlayer from "react-player";
import { XCircleIcon } from "@heroicons/react/solid";

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
          url="https://the5starz.com/wp-content/uploads/2021/12/video-output-65990724-965D-4E90-A801-4251537FB303-1.mov"
          width="50%"
          height="50%"
          controls={true}
        />
      </div>
      <span
        className="fixed right-0 top-0 text-white p-5 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <XCircleIcon className="w-10 h-10" />
      </span>
    </div>
  );
};

export default Lightbox;
