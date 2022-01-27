import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register, watch, errors } = useForm();
  const onSubmit = (data) => console.log(`submit`, { data });

  console.log("render");
  console.log(watch("email"));

  return (
    <section className="lg:px-[70px] sm:px-12 px-5 lg:py-24 md:py-14 sm:py-10 py-12 bg-white">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-primaryRed font-bold text-4xl lg:text-[44px] leading-[60px] lg:text-left md:text-center">
            Beat your competition with authentic content
          </h1>
          <p className="text-2xl mt-5 text-gray-700 lg:text-left md:text-center">
            Book your demo now!
          </p>
        </div>
        <div className="flex flex-col text-gray-500 lg:w-1/2 w-full lg:mt-0 mt-10">
          <form
            className="flex sm:flex-row flex-col sm:space-x-4 lg:justify-start"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col sm:w-1/2 space-y-3">
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
              <input
                type="text"
                placeholder="Phone"
                {...register("phone")}
                className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
              />
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <textarea
                className="border resize-none focus:outline-none border-gray-300 p-4 sm:h-full h-40 w-full"
                placeholder="Message"
                {...register("message")}
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end mt-2.5">
            <input
              type="submit"
              className="bg-primaryRed text-white font-bold px-[30px] py-2 text-lg uppercase"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
