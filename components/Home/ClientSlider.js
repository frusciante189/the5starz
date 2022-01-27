import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Maelys from "../../public/Assets/slider/maelys.jpg";
import Tennesse from "../../public/Assets/slider/tennesse.jpg";
import Nanuka from "../../public/Assets/slider/nanuka.jpg";
import Smashbox from "../../public/Assets/slider/smashbox.jpg";
import Amkiri from "../../public/Assets/slider/amkiri.png";
import Cannabotech from "../../public/Assets/slider/cannabotech.jpg";
import Noa from "../../public/Assets/slider/noa.jpg";
import Beards from "../../public/Assets/slider/beards.jpg";
import Clinique from "../../public/Assets/slider/clinique.jpg";
import Roi from "../../public/Assets/slider/roi.jpg";
import Seeds from "../../public/Assets/slider/13seeds.png";
import Mayven from "../../public/Assets/slider/mayven.png";
import Talip from "../../public/Assets/slider/talip.jpg";
import Dafni from "../../public/Assets/slider/dafni.jpg";
import Sebo from "../../public/Assets/slider/sebo.jpg";
import Image from "next/image";

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div className="bg-[#E88A8A] px-[30px] py-[60px] lg:-mt-52 z-10 max-w-xl w-full max-h-full">
      <h1 className="font-bold text-5xl mb-8">Our Clients</h1>
      <div className="grayscale">
        <Slider {...settings}>
          <div className="pl-2 pb-2">
            <Image
              src={Maelys}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Tennesse}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Nanuka}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Smashbox}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Amkiri}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Cannabotech}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Noa}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Beards}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Clinique}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Roi}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Seeds}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Mayven}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>

          <div className="pl-2 pb-2">
            <Image
              src={Talip}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>

          <div className="pl-2 pb-2">
            <Image
              src={Dafni}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
          <div className="pl-2 pb-2">
            <Image
              src={Sebo}
              width={182}
              height={92}
              objectFit="fill"
              alt="product"
              loading="lazy"
              quality={50}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
