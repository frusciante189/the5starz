import React from "react";
import { useForm } from "react-hook-form";
import FormNavigationBar from "./FormNavigationBar";
import { simplified } from "./Form";
import FieldHeader from "./FieldHeader";

const SecondForm = ({ onNext, onPrev, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: data });

  return (
    <form
      onSubmit={handleSubmit(onNext)}
      className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b"
    >
      <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div className="">
          <FieldHeader title="Education" />
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <div className="">
              <input
                className="border w-full p-3 focus:outline-none"
                {...register("education")}
              />
            </div>
          </div>
        </div>
        <div className="">
          <FieldHeader title="I love to create videos of myself" />
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <select
              {...register("extra_video")}
              className="w-full p-3 border focus:outline-none bg-white"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="both">
                I would do it for a product I really want
              </option>
            </select>
          </div>
        </div>
      </div>
      {!!simplified && (
        <>
          <div className="mt-4">
            <FieldHeader title="People in household under 18" />
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <select
                {...register("extra_pu18")}
                className="w-full p-3 border focus:outline-none bg-white"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <div className="">
              <FieldHeader title="People in household 18+ (inc. you)" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <select
                  {...register("extra_po18")}
                  className="w-full p-3 border focus:outline-none bg-white"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
            <div className="">
              <FieldHeader title="Marital Status" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <select
                  {...register("married")}
                  className="w-full p-3 border focus:outline-none bg-white"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                  <option value="separated">Separated</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <div className="">
              <FieldHeader title="What do you do for a living" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <div className="">
                  <input
                    {...register("occupation")}
                    className="border w-full p-3 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <FieldHeader title="Household spend per month (average)?" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <select
                  {...register("household_spend")}
                  className="w-full p-3 border focus:outline-none bg-white"
                >
                  <option value="Less than $10,000">Less than $10,000</option>
                  <option value="$10,000-$20,000">$10,000-$20,000</option>
                  <option value="$20,000-$30,000">$20,000-$30,000</option>
                  <option value="$30,000-$40,000">$30,000-$40,000</option>
                  <option value="$40,000-$50,000">$40,000-$50,000</option>
                  <option value="Over $50,000">Over $50,000</option>
                  <option value="I prefer not to say">
                    I prefer not to say
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <div className="">
              <FieldHeader title="Skin Type" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <select
                  {...register("skin_type")}
                  className="w-full p-3 border focus:outline-none bg-white"
                >
                  <option value="Oily">Oily</option>
                  <option value="Combination">Combination</option>
                  <option value="Dry">Dry</option>
                </select>
              </div>
            </div>
            <div className="">
              <FieldHeader title="What is your hair type" />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <select
                  {...register("hair")}
                  className="w-full p-3 border focus:outline-none bg-white"
                >
                  <option value="Straight">Straight</option>
                  <option value="Wavey">Wavey</option>
                  <option value="Curly">Curly</option>
                  <option value="Coily">Coily</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <FieldHeader title="Do you own any pets? If so, which?" />
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <div className="">
                <input
                  {...register("pets")}
                  className="border w-full p-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
            <div className="">
              <FieldHeader title="How important is eating healthy to you?" />
              <div className="flex space-x-5 flex-wrap">
                {[1, 2, 3, 4, 5].map((idx) => {
                  return (
                    <label htmlFor={`eating-${idx}`}>
                      <input
                        className="mr-1"
                        {...register("eating_healthy")}
                        type="radio"
                        name="eating"
                        value={idx}
                        id={`eating-${idx}`}
                      />
                      {idx}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                1 being not important, and 5 Extremely important
              </p>
            </div>
            <div className="">
              <FieldHeader title="How important is nature to you?" />
              <div className="flex space-x-5 flex-wrap">
                {[1, 2, 3, 4, 5].map((idx) => {
                  return (
                    <label htmlFor={`nature-${idx}`}>
                      <input
                        className="mr-1"
                        {...register("nature")}
                        type="radio"
                        name="nature"
                        value={idx}
                        id={`nature-${idx}`}
                      />
                      {idx}
                    </label>
                  );
                })}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                1 being not important, and 5 Extremely important
              </p>
            </div>
          </div>
        </>
      )}
      <FormNavigationBar onPrev={handleSubmit(onPrev)} isLast={false} />
    </form>
  );
};

export default SecondForm;
