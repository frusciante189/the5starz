import Image from "next/image";
import starlogo from "../../public/Assets/starlogo.png";

const Banner = () => {
  return (
    <section className="bg-banner2 bg-[#F0F0F0] pt-16 pb-12 bg-contain bg-no-repeat bg-right">
      <div className="max-w-3xl mx-auto text-left p-2.5">
        <Image src={starlogo} width="132px" height="45px" />
      </div>
    </section>
  );
};

export default Banner;
