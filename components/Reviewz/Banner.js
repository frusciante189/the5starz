import Image from "next/image";
import starlogo from "../../public/Assets/starlogo.png";

const Banner = () => {
  return (
    <section className="bg-banner2 bg-[#F0F0F0] pt-16 pb-12 bg-contain bg-no-repeat bg-right">
      <div className="max-w-5xl mx-auto text-left lg:px-2 md:px-10 px-5">
        <Image src={starlogo} width="132px" height="45px" alt="the5starzz" />
      </div>
    </section>
  );
};

export default Banner;
