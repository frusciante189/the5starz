import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../public/Assets/girl.png";
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

const Client = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
  };
  return (
    <section className="relative">
      <div>
        <Image src={Banner} className="-scale-x-100" />
      </div>
      <div className="lg:px-[70px] sm:px-12 p-5 sm:py-7 md:py-10 lg:py-12 xl:py-16">
        <div className="flex lg:flex-row flex-col space-x-10">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-primaryRed font-bold text-[28px] leading-[28px] lg:text-[34px] lg:leading-[34px] xl:text-[42px] xl:leading-[42px] ">
              Why the5starz?
            </h1>
            <p className="mt-5 text-lg leading-[30px] font-normal">
              The5starz is a community for real and authentic content to the
              brief.
            </p>

            <div className="w-full bg-white mt-5">
              <Disclosure>
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-[15px] text-sm font-medium text-left bg-[#EFEFEF] focus:outline-none">
                    <span className="font-bold text-lg leading-[18px]">
                      What you get?
                    </span>
                    <PlusCircleIcon className={`w-6 h-6`} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-100"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#F7F6F6] text-lg leading-[30px]">
                      Authentic content from “ordinary” people (segmented to
                      your needs) without all the hassle. We DO NOT tell our
                      contributors what to say, EVER!
                    </Disclosure.Panel>
                  </Transition>
                </>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-[15px] text-sm font-medium text-left bg-[#EFEFEF] focus:outline-none">
                    <span className="font-bold text-lg leading-[18px]">
                      What we do?
                    </span>
                    <PlusCircleIcon className={`w-6 h-6`} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-100"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#F7F6F6] text-lg leading-[30px]">
                      Generate authentic content made by “ordinary” people,
                      segmented to your needs, and with 100% quality control –
                      royalty free!
                    </Disclosure.Panel>
                  </Transition>
                </>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-[15px] text-sm font-medium text-left bg-[#EFEFEF] focus:outline-none">
                    <span className="font-bold text-lg leading-[18px]">
                      Where is the content uploaded?
                    </span>
                    <PlusCircleIcon className={`w-6 h-6`} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-100"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#F7F6F6] text-lg leading-[30px]">
                      Wherever you need – It can be on your product page, FB
                      page, 3rd party sites, Google reviews, app store. You name
                      it.
                    </Disclosure.Panel>
                  </Transition>
                </>
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-[15px] text-sm font-medium text-left bg-[#EFEFEF] focus:outline-none">
                    <span className="font-bold text-lg leading-[18px]">
                      What happens if a review isn’t positive?
                    </span>
                    <PlusCircleIcon className={`w-6 h-6`} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-100"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#F7F6F6] text-lg leading-[30px]">
                      We encourage all reviews be uploaded. A site with only 5
                      star reviews is considered un-credible. Also, we take
                      great care to understand bad reviews in depth. If 9 out of
                      10 contributors did not like your product you have
                      received valuable insights.
                    </Disclosure.Panel>
                  </Transition>
                </>
              </Disclosure>
            </div>
          </div>
          {/* <div className="bg-[#E88A8A] px-[30px] py-[60px] -mt-52 z-10 max-w-xl w-full">
            <h1>Our Clients</h1>
            <div className="">
              <Slider {...settings}>
                <Image src={nanuka} objectFit="cover" width={182} height={93} />
                <Image src={maelys} objectFit="cover" width={182} height={93} />
                <Image
                  src={tenesse}
                  objectFit="cover"
                  width={182}
                  height={93}
                />
                <Image
                  src={smashbox}
                  objectFit="cover"
                  width={182}
                  height={93}
                />
                <Image src={amkiri} objectFit="cover" width={182} height={93} />
                <Image
                  src={cannabotech}
                  objectFit="cover"
                  width={182}
                  height={93}
                />
                <Image src={noa} objectFit="cover" width={182} height={93} />
                <Image src={urb} objectFit="cover" width={182} height={93} />
                <Image src={beards} objectFit="cover" width={182} height={93} />
                <Image src={seeds} objectFit="cover" width={182} height={93} />
                <Image
                  src={clinique}
                  objectFit="cover"
                  width={182}
                  height={93}
                />
                <Image src={dafni} objectFit="cover" width={182} height={93} />
                <Image src={tlip} objectFit="cover" width={182} height={93} />
                <Image src={mayven} objectFit="cover" width={182} height={93} />
                <Image
                  src={seboCalm}
                  objectFit="cover"
                  width={182}
                  height={93}
                />
                <Image src={roi} objectFit="cover" width={182} height={93} />
              </Slider>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Client;
