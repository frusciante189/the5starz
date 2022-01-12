import Image from "next/image";
import p1 from "../../public/Assets/product1.png";
import p2 from "../../public/Assets/product2.png";
import p3 from "../../public/Assets/product3.jpg";

const Product = () => {
  return (
    <section className="bg-red-300 bg-[#F0F0F0]">
      <div className="sm:py-16 pt-16 px-5 pb-40 max-w-4xl mx-auto">
        <h1 className="font-black text-[39px] leading-[39px] text-center">
          The place to be heard
        </h1>
        <p className="text-lg font-medium text-left mt-5">
          The5starz is a collaborative startup that connects you and your
          favorite brands to provide you with free, full size products in
          exchange for honest reviews and content.
        </p>
        <div className="grid grid-cols-3 gap-x-5 mt-[30px]">
          <Image src={p1} width="253px" height="253px" />
          <Image src={p2} width="253px" height="253px" />
          <Image src={p3} width="253px" height="253px" />
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
