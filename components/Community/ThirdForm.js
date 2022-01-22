import React from "react";
import { useForm } from "react-hook-form";

const ThirdForm = ({ index, setIndex }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <h1 className="font-bold mb-4">
            I agree to recieve an email eveytime a new product is offered to me
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" {...register("yes", { required: true })} />
              <span>Yes</span>
            </label>

            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input type="radio" {...register("yes", { required: true })} />

              <span>No</span>
            </label>
            {errors.no && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            I have read and agree to your terms & conditions
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <label htmlFor="" className="flex items-center space-x-2 text-lg">
              <input
                type="checkbox"
                {...register("agree", { required: true })}
              />
              <span>Yes</span>
            </label>
            {errors.agree && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {index >= 1 && (
          <button
            className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
            onClick={() => setIndex((oldState) => oldState - 1)}
          >
            PREVIOUS
          </button>
        )}
        <button
          className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
          type="submit"
        >
          {index === 2 ? <span>Submit</span> : <span>Next</span>}
        </button>
      </div>
    </form>
  );
};

export default ThirdForm;
