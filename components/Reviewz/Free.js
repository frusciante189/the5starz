import Image from "next/image";
import truck from "../../public/Assets/delivery.png";
import favourite from "../../public/Assets/favourite.png";
import giftbox from "../../public/Assets/giftbox.png";
import phone from "../../public/Assets/phone.png";

const Free = () => {
  return (
    <section className="bg-primaryRed">
      <div className="fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
        >
          <path d="M350,10L340,0h20L350,10z"></path>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto pt-16 pb-12">
        <h1 className="text-white font-black text-[39px] leading-[63px] text-center">
          Free products from your favorite brands
        </h1>
        <p className="mt-5 text-lg text-white text-center font-medium">
          How does it work?
        </p>
        <div className="grid grid-cols-4 mt-5 gap-x-2.5">
          <div className="flex flex-col items-center">
            <div>
              <Image src={truck} />
            </div>
            <div>
              <p className="font-extrabold text-white text-[22px] leading-[22px] text-center">
                1. Get a FREE full sized premium product
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="w-[185px] h-auto flex items-center justify-center">
              <Image src={favourite} />
            </div>
            <div>
              <p className="font-extrabold text-white text-[22px] leading-[22px] text-center">
                2. Leave an honest review of your daily usage
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image src={phone} />
            </div>
            <div>
              <p className="font-extrabold text-white text-[22px] leading-[22px] text-center">
                3. Create a video with the product
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image src={giftbox} />
            </div>
            <div>
              <p className="font-extrabold text-white text-[22px] leading-[22px] text-center">
                4. Enjoy additional products free of charge!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="p-[14px] text-white border-2 rounded-lg font-medium">
            Sign up now for FREE!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Free;
