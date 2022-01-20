import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCloseCircle,
} from "react-icons/ai";

const Lbox = ({
  clicked,
  handleRotationRight,
  setClicked,
  video,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClicked(null);
    }
  };
  {
    console.log(video);
  }

  return (
    <>
      <div
        className="bg-black bg-opacity-60 fixed h-full w-full inset-x-0 top-0 flex items-center justify-center"
        onClick={handleClick}
      >
        {video ? (
          <div className="lg:w-1/2 lg:h-1/2 w-full h-full">
            <ReactPlayer
              url={video}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        ) : (
          <Image src={clicked} alt="Lightbox image" />
        )}
        <div
          className="absolute left-0 text-white cursor-pointer"
          onClick={handleRotationLeft}
        >
          <AiFillCaretLeft size={50} />
        </div>
        <div
          className="absolute right-0 text-white cursor-pointer"
          onClick={handleRotationRight}
        >
          <AiFillCaretRight size={50} />
        </div>
        <div
          className="absolute top-5 right-5 text-white cursor-pointer"
          onClick={() => setClicked(null)}
        >
          <AiFillCloseCircle size={50} />
        </div>
      </div>
    </>
  );
};

export default Lbox;
