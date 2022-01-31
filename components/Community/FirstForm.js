import React from "react";
import { showRequiredError } from "../utils";
import { useForm } from "react-hook-form";
import { FormNavigationBar } from "./Form";

const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

const selectRange = (start, end) => {
  return [
    <option key={0} value="select"></option>,

    ...range(end - start + 1, start).map((index) => (
      <option key={index} value={index}>
        {index}
      </option>
    )),
  ];
};

const FirstForm = ({ onNext, onPrev }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`submit`, { data });
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold mb-4">
          Name{" "}
          <span className="font-bold text-primaryRed text-xl text-center inline-block">
            *
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <div>
            <input
              {...register("firstName", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "firstName")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              First Name
            </label>
          </div>
          <div>
            <input
              {...register("lastName", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "lastName")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Last Name
            </label>
          </div>
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
            <div>
              <input
                {...register("email", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {showRequiredError(errors, "email")}
            </div>
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
            <div>
              <input
                {...register("phone", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {showRequiredError(errors, "phone")}
            </div>
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
          <div>
            <input
              {...register("street", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "street")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Street Address
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <div>
            <input
              {...register("city", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "city")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              City
            </label>
          </div>
          <div>
            <input
              {...register("state")}
              className="border w-full p-3 focus:outline-none"
            />
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              State / Province / Region
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
          <div>
            <input
              {...register("zip_code", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "zip_code")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              ZIP / Postal Code
            </label>
          </div>
          <div>
            <input
              {...register("country", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "country")}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              Country
            </label>
          </div>
        </div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
        <div>
          <h1 className="font-bold mb-4">
            Birthday{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="flex space-x-4 text-center">
            <div>
              <select
                {...register("day", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="DD"
              >
                {selectRange(1, 31)}
              </select>
            </div>
            <div>
              <select
                {...register("month", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="MM"
              >
                {selectRange(1, 12)}
              </select>
            </div>
            <div className="col-span-2">
              <select
                {...register("year", { required: true })}
                className="border w-full p-3 focus:outline-none"
                placeholder="YYYY"
              >
                {selectRange(
                  new Date().getFullYear() - 100,
                  new Date().getFullYear() - 16
                )}
              </select>
            </div>
          </div>
          {(errors?.day?.type === "required" ||
            errors?.month?.type === "required" ||
            errors?.year?.type === "required") && (
            <p className="w-full pl-4 py-3 mt-2 border border-secondaryRed text-secondaryRed bg-bgRed">
              This field is required
            </p>
          )}
        </div>
        <div className="">
          <h1 className="font-bold mb-4">
            Instagram / Facebook{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
            <div>
              <input
                {...register("socials", { required: true })}
                className="border w-full p-3 focus:outline-none"
              />
              {showRequiredError(errors, "socials")}
            </div>
          </div>
        </div>
      </div>

      <FormNavigationBar onNext={onNext} onPrev={onPrev} isLast={false} />
    </form>
  );
};

export default FirstForm;
