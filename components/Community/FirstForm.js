import React from "react";
import { showRequiredError } from "../utils";
import { useForm } from "react-hook-form";
import FormNavigationBar from "./FormNavigationBar";
import { simplified } from "./Form";
import FieldHeader from "./FieldHeader";

const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

const selectRange = (name, start, end) => {
  return [
    // <option value={null}>{name}</option>,

    ...range(end - start + 1, start).map((index) => (
      <option key={index} value={index}>
        {index}
      </option>
    )),
  ];
};

const FirstForm = ({ onNext, onPrev, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: data });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <div>
        <FieldHeader title="Name" requierd />
        <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
          <div>
            <input
              placeholder="First Name"
              {...register("first_name", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "first_name")}
          </div>
          <div>
            <input
              placeholder="Last Name"
              {...register("last_name", { required: true })}
              className="border w-full p-3 focus:outline-none"
            />
            {showRequiredError(errors, "last_name")}
          </div>
        </div>
      </div>
      {!simplified && (
        <>
          <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <div className="">
              <FieldHeader title="Email" requierd />
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
              <FieldHeader title="Phone" requierd />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <div>
                  <input
                    {...register("phone_number", { required: true })}
                    className="border w-full p-3 focus:outline-none"
                  />
                  {showRequiredError(errors, "phone_number")}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <FieldHeader title="Address" requierd />
            <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
              <div>
                <input
                  placeholder="Street Address"
                  {...register("address", { required: true })}
                  className="border w-full p-3 focus:outline-none"
                />
                {showRequiredError(errors, "address")}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
              <div>
                <input
                  placeholder="City"
                  {...register("city", { required: true })}
                  className="border w-full p-3 focus:outline-none"
                />
                {showRequiredError(errors, "city")}
              </div>
              <div>
                <input
                  placeholder="State / Province / Region"
                  {...register("state")}
                  className="border w-full p-3 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0 mt-4">
              <div>
                <input
                  placeholder="ZIP / Postal Code"
                  {...register("zip_code", { required: true })}
                  className="border w-full p-3 focus:outline-none"
                />
                {showRequiredError(errors, "zip_code")}
              </div>
              <div>
                <input
                  placeholder="Country"
                  {...register("country", { required: true })}
                  className="border w-full p-3 focus:outline-none"
                />
                {showRequiredError(errors, "country")}
              </div>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 sm:gap-x-12 grid-cols-1 gap-y-4 sm:gap-y-0">
            <div>
              <FieldHeader title="Birthday" requierd />
              <div className="flex space-x-4 text-center">
                <div>
                  <select
                    {...register("birthday_day", { required: true })}
                    className="border w-full p-3 focus:outline-none"
                    placeholder="DD"
                  >
                    {selectRange("DD", 1, 31)}
                  </select>
                </div>
                <div>
                  <select
                    {...register("birthday_month", { required: true })}
                    className="border w-full p-3 focus:outline-none"
                    placeholder="MM"
                  >
                    {selectRange("MM", 1, 12)}
                  </select>
                </div>
                <div className="col-span-2">
                  <select
                    {...register("birthday_year", { required: true })}
                    className="border w-full p-3 focus:outline-none"
                    placeholder="YYYY"
                  >
                    {selectRange(
                      "YYYY",
                      new Date().getFullYear() - 100,
                      new Date().getFullYear() - 16
                    )}
                  </select>
                </div>
              </div>
              {(errors?.birthday_day?.type === "required" ||
                errors?.birthday_month?.type === "required" ||
                errors?.birthday_year?.type === "required") && (
                <p className="w-full pl-4 py-3 mt-2 border border-secondaryRed text-secondaryRed bg-bgRed">
                  This field is required
                </p>
              )}
            </div>
            <div className="">
              <FieldHeader title="Instagram / Facebook Handle" requierd />
              <div className="grid grid-cols-1 sm:gap-x-12  gap-y-4 sm:gap-y-0">
                <div>
                  <input
                    {...register("igfb_handle", { required: true })}
                    className="border w-full p-3 focus:outline-none"
                  />
                  {showRequiredError(errors, "igfb_handle")}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <FormNavigationBar onNext={onNext} onPrev={onPrev} isLast={false} />
    </form>
  );
};

export default FirstForm;
