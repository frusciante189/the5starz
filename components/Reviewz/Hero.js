import Image from "next/image";
import slp from "../../public/Assets/slp.png";

const Hero = () => {
  return (
    <section className="bg-[#f0f0f0] lg:h-[650px] h-auto bg-gradient-to-br from-[#fff079] to-[#FFA07E] bg-transparent relative">
      <div className="bg-bg5 bg-cover opacity-[0.16] brightness-150 contrast-100 saturate-100 absolute h-full w-full top-0 left-0"></div>
      <div className="md:py-20 pt-20 pb-5 max-w-5xl mx-auto ">
        <div className="max-w-xl mt-8 lg:px-2 md:px-10 px-5">
          <h1 className="text-lg md:text-[35px] md:leading-[45px] lg:text-[50px] lg:leading-[65px] text-[#1e242b]">
            Free products to choose from!
          </h1>
          <p className="text-[34px] leading-[34px] md:text-[50px] md:leading-[65px] lg:text-[73px] font-black lg:leading-[80px] md:mt-6 mt-2">
            All we need is your honest opinion!
          </p>
          <div className="py-5">
            <button className="bg-primaryRed text-white p-3 rounded-lg">
              Rush me a FREE product
            </button>
          </div>
        </div>
        <div className="absolute top-32 right-20 hidden lg:block">
          <Image src={slp} width={500} height={500} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
