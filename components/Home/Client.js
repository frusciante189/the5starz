import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../public/Assets/girl.png";
import ClientSlider from "./ClientSlider";

const Client = () => {
  return (
    <section className="relative">
      <div className="">
        <Image
          src={Banner}
          className="-scale-x-100"
          alt="the5starzz"
          layout="responsive"
          objectFit="cover"
          width={5}
          height={2}
        />
      </div>
      <div className="lg:px-[70px] sm:px-12 p-5 sm:py-7 md:py-10 lg:py-12 xl:py-16">
        <div className="flex lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0">
          <div className="lg:w-1/2 w-full max-h-max">
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
          <ClientSlider />
        </div>
      </div>
    </section>
  );
};

export default Client;
