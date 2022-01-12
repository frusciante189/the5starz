import React from "react";

const Form = () => {
  return (
    <section className="lg:px-[70px] sm:px-12 px-5 lg:py-24 md:py-14 sm:py-10 py-12 bg-white">
      <div className="flex justify-between">
        <div className="max-w-xl">
          <h1 className="text-primaryRed font-bold text-4xl lg:text-[44px] leading-[60px] ">
            Beat your competition with authentic content
          </h1>
          <p className="text-2xl mt-5 text-gray-700">Book your demo now!</p>
        </div>
        <div className="flex flex-col text-gray-500 w-1/2">
          <form className="flex space-x-4 justify-end">
            <div className="flex flex-col w-1/2 space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
            </div>
            <div>
              <textarea
                cols="40"
                className="border resize-none focus:outline-none border-gray-300 p-4 h-full"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end mt-2.5">
            <button className="bg-primaryRed text-white font-bold px-[30px] py-2 text-lg uppercase">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
