import React, { useState } from "react";
import Lbox from "./Lbox";
import g1 from "../../public/Assets/gallery/gallery5.png";
import g2 from "../../public/Assets/gallery/gallery4.jpg";
import g3 from "../../public/Assets/gallery/gallery6.png";
import g4 from "../../public/Assets/gallery/gallery7.png";
import g5 from "../../public/Assets/gallery/gallery1.jpeg";
import g6 from "../../public/Assets/gallery/gallery2.jpg";
import g7 from "../../public/Assets/gallery/gallery8.png";
import g8 from "../../public/Assets/gallery/gallery3.jpg";
import g9 from "../../public/Assets/gallery/gallery9.png";
import Image from "next/image";

const data = [
  {
    img: g1,
    title: "Shaneequa for Moses",
    url: "https://the5starz.com/wp-content/uploads/2021/12/20211225_113444.mp4",
  },
  {
    img: g2,
    title: "Lital Perez for Clinique",
  },
  {
    img: g3,
    title: "Claire Broadbent for Cannabotech",
    url: "https://the5starz.com/wp-content/uploads/2021/12/20211214_103730.mp4",
  },
  {
    img: g4,
    title: "Amanda Wallace for Maelys",
    url: "https://the5starz.com/wp-content/uploads/2021/12/received_408575830629248.mp4",
  },
  {
    img: g5,
    title: "Amanda Powell for Maelys",
  },
  {
    img: g6,
    title: "Anna Stern for Smashbox",
  },
  {
    img: g7,
    title: "Gal Engel for Noa Kirel Beauty",
    url: "https://the5starz.com/wp-content/uploads/2021/12/גל-אנגל-3.mp4",
  },
  {
    img: g9,
    title: "Yael Rochkind for Smashbox",
    url: "https://the5starz.com/wp-content/uploads/2021/12/video-output-65990724-965D-4E90-A801-4251537FB303-1.mov",
  },
  {
    img: g8,
    title: "Yal Goran using Clinique",
  },
];

const Inspired = () => {
  const [clicked, setClicked] = useState(null);
  const [video, setVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClicked(item.img);
    setVideo(item.url);
  };
  const handleRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].img;
      const newVideo = data[0].url;
      setClicked(newUrl);
      setVideo(newVideo);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newVideo = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    const newVideoItem = newVideo[0].url;
    setClicked(newItem);
    setVideo(newVideoItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].img;
      const newVideo = data[totalLength - 1].url;
      setClicked(newUrl);
      setVideo(newVideo);
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) == newIndex;
    });
    const newVideo = data.filter((item) => {
      return data.indexOf(item) == newIndex;
    });
    const newItem = newUrl[0].img;
    const newVideoItem = newVideo[0].url;
    setClicked(newItem);
    setCurrentIndex(newIndex);
    setVideo(newVideoItem);
  };

  return (
    <section className="bg-[#D6D4D5]">
      <div className="lg:px-[70px] sm:px-12 p-5 sm:py-7 md:py-10 lg:py-12 xl:py-16">
        <h1 className="text-center text-[28px] leading-[28px]">Get inspired</h1>
      </div>
      <div className="mt-10 lg:px-20 md:px-12 px-6 lg:columns-4 columns-2 break-before-avoid gap-x-6 gap-y-10 relative">
        {data.map((item, index) => {
          return (
            <div className="relative cursor-pointer" key={index}>
              <Image
                src={item.img}
                alt={item.title}
                onClick={() => handleClick(item, index)}
              />
              <span className="absolute sm:bottom-3 sm:left-3 left-0 bottom-2 text-white bg-black sm:p-3 p-1 bg-opacity-50 font-medium text-sm">
                {item.title}
              </span>
            </div>
          );
        })}
        {clicked && (
          <Lbox
            clicked={clicked}
            handleRotationRight={handleRotationRight}
            setClicked={setClicked}
            video={video}
            handleRotationLeft={handleRotationLeft}
          />
        )}
      </div>
    </section>
  );
};

export default Inspired;
