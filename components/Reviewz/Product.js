import Image from "next/image";
import p1 from "../../public/Assets/product1.png";
import p2 from "../../public/Assets/product2.png";
import p3 from "../../public/Assets/product3.jpg";

const Product = () => {
  return (
    <section className="bg-[#F0F0F0]">
      <div className="md:py-16 sm:pt-16 pt-10 lg:px-2 md:px-10 px-5 pb-20 max-w-5xl mx-auto">
        <h1 className="font-black text-[39px] leading-[39px] text-center">
          The place to be heard
        </h1>
        <p className="text-lg font-medium text-left mt-5">
          The5starz is a collaborative startup that connects you and your
          favorite brands to provide you with free, full size products in
          exchange for honest reviews and content.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 mt-[30px] md:gap-y-0 gap-y-5">
          <Image
            src={p1}
            width="253px"
            height="253px"
            objectFit="cover"
            alt="the5starzz"
          />
          <Image
            src={p2}
            width="253px"
            height="253px"
            objectFit="cover"
            alt="the5starzz"
          />
          <Image
            src={p3}
            width="253px"
            height="253px"
            objectFit="cover"
            alt="the5starzz"
          />
        </div>
        <div className="py-12 text-center">
          <button className="bg-primaryRed text-white p-[14px] rounded-lg">
            Rush me a FREE product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
