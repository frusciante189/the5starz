import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <section className="lg:py-24 md:py-14 sm:py-10 py-12 lg:px-[70px] sm:px-12 px-5">
      <div className="">
        <h1 className=" text-primaryRed text-[19px] leading-[19px] font-bold text-center">
          The more info we have the greater your chances of receiving free
          products.
        </h1>
        <div className="mt-[70px] flex sm:flex-row flex-col items-start sm:items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 pb-[46px] border-b">
          <div className="flex items-center space-x-4">
            <span className="bg-primaryRed h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 text-white">
              1
            </span>
            <h1 className="text-sm font-semibold">Personal Information</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-white h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 text-black">
              2
            </span>
            <h1 className="text-sm font-semibold">
              Getting to know you better (optional)
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-white h-10 w-10 flex items-center justify-center rounded-full outline outline-gray-300 text-black">
              3
            </span>
            <h1 className="text-sm font-semibold">Agreement</h1>
          </div>
        </div>
      </div>
      <div className="mt-[50px] pb-[60px] border-b">
        <div>
          <h1 className="font-bold mb-4">
            Name{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <Input label="First Name" />
            <Input label="Last Name" />
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <div className="">
            <h1 className="font-bold mb-4">
              Email{" "}
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <Input />
            </div>
          </div>
          <div className="">
            <h1 className="font-bold mb-4">
              Phone{" "}
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <Input />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-bold mb-4">
            Address{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <Input label="Street Address" />
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
            <Input label="City" />
            <Input label="State / Province / Region" />
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
            <Input label="ZIP / Postal Code" />
            <Input label="Country" />
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <div className="">
            <h1 className="font-bold mb-4">
              Birthday{" "}
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </h1>
            <div className="grid grid-cols-3 sm:gap-x-5 gap-x-4 gap-y-4 sm:gap-y-0 lg:w-1/2 md:w-2/3 w-3/4">
              <Input placeholder="DD" />
              <Input placeholder="MM" />
              <Input placeholder="YYYY" />
            </div>
          </div>
          <div className="">
            <h1 className="font-bold mb-4">
              Instagram / Facebook{" "}
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <Input />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-lg underline underline-offset-2">
            Plase upload a short video of yourself:{" "}
          </h1>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg">
          NEXT
        </button>
      </div>
    </section>
  );
};

export default Form;
