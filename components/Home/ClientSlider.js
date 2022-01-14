import nanuka from "../../public/Assets/nanuka.jpg";
import maelys from "../../public/Assets/maelys.jpg";
import tenesse from "../../public/Assets/tenesse.jpg";
import smashbox from "../../public/Assets/smashbox.jpg";
import amkiri from "../../public/Assets/amkiri.png";
import cannabotech from "../../public/Assets/cannabotech.jpg";
import noa from "../../public/Assets/noa.jpg";
import urb from "../../public/Assets/nanuka.jpg";
import beards from "../../public/Assets/beards.jpg";
import seeds from "../../public/Assets/seeds.png";
import clinique from "../../public/Assets/clinique.jpg";
import dafni from "../../public/Assets/dafni.jpg";
import tlip from "../../public/Assets/tlip.jpg";
import mayven from "../../public/Assets/mayven.png";
import seboCalm from "../../public/Assets/seboCalm.jpg";
import roi from "../../public/Assets/roi-ben.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ClientSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
  };
  return (
    <div className="bg-[#E88A8A] px-[30px] py-[60px] lg:-mt-52 z-10 max-w-xl w-full">
      <h1 className="font-bold text-5xl mb-8">Our Clients</h1>
      <div className="grayscale">
        <Slider {...settings}>
          <Image src={nanuka} objectFit="cover" width={182} height={93} />
          <Image src={maelys} objectFit="cover" width={182} height={93} />
          <Image src={tenesse} objectFit="cover" width={182} height={93} />
          <Image src={smashbox} objectFit="cover" width={182} height={93} />
          <Image src={amkiri} objectFit="cover" width={182} height={93} />
          <Image src={cannabotech} objectFit="cover" width={182} height={93} />
          <Image src={noa} objectFit="cover" width={182} height={93} />
          <Image src={urb} objectFit="cover" width={182} height={93} />
          <Image src={beards} objectFit="cover" width={182} height={93} />
          <Image src={seeds} objectFit="cover" width={182} height={93} />
          <Image src={clinique} objectFit="cover" width={182} height={93} />
          <Image src={dafni} objectFit="cover" width={182} height={93} />
          <Image src={tlip} objectFit="cover" width={182} height={93} />
          <Image src={mayven} objectFit="cover" width={182} height={93} />
          <Image src={seboCalm} objectFit="cover" width={182} height={93} />
          <Image src={roi} objectFit="cover" width={182} height={93} />
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
