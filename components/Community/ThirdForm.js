import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import { showRequiredError } from "../utils";
import { useForm } from "react-hook-form";
import { FormNavigationBar } from "./Form";

const ThirdForm = ({ onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`submit`, { data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <div className="form-check flex flex-row">
            <input
              {...register("offer", { required: true })}
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer flex-shrink-0"
              type="checkbox"
              id="receive-email"
            />
            <label
              className="form-check-label inline-block font-bold mb-4"
              htmlFor="receive-email"
            >
              I agree to receive an email everytime a new product is offered to
              me
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </label>
          </div>
          {showRequiredError(errors, "offer")}
        </div>
        <div className="">
          <div className="form-check flex flex-row">
            <input
              {...register("agreement", { required: true })}
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer flex-shrink-0"
              type="checkbox"
              id="agreement"
            />
            <label
              className="form-check-label inline-block font-bold mb-4"
              htmlFor="agreement"
            >
              I have read and agree to your terms & conditions
              <span className="font-bold text-primaryRed text-xl text-center inline-block">
                *
              </span>
            </label>
          </div>
          {showRequiredError(errors, "agreement")}
        </div>
      </div>
      <FormNavigationBar onNext={onNext} onPrev={onPrev} isLast={true} />
    </form>
  );
};

export default ThirdForm;
