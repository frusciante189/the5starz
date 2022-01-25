import { useLocalStorage } from "../useLocalStorage";
import React, { useState } from "react";

const FirstForm = ({ index, setIndex, firstData, setFirstData }) => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [street, setStreet] = useLocalStorage("street", "");
  const [city, setCity] = useLocalStorage("city", "");
  const [state, setState] = useLocalStorage("state", "");
  const [zip, setZip] = useLocalStorage("zip", "");
  const [country, setCountry] = useLocalStorage("country", "");
  const [day, setDay] = useLocalStorage("day", "");
  const [month, setMonth] = useLocalStorage("month", "");
  const [year, setYear] = useLocalStorage("year", "");
  const [socials, setSocials] = useLocalStorage("socials", "");

  const handleClick = (e) => {
    if (
      (firstName,
      lastName,
      email,
      phone,
      street,
      city,
      state,
      zip,
      country,
      day,
      month,
      year,
      socials)
    ) {
      setIndex((oldState) => oldState + 1);
      e.preventDefault();
      setFirstData([
        firstName,
        lastName,
        email,
        phone,
        street,
        city,
        state,
        zip,
        country,
        day,
        month,
        year,
        socials,
      ]);
    }
  };

  return (
    <form className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
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
              className="border w-full p-3 focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {!firstName && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              First Name
            </label>
          </div>
          <div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border w-full p-3 focus:outline-none"
            />
            {!lastName && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
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
                className="border w-full p-3 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!email && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
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
                className="border w-full p-3 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {!phone && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
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
              className="border w-full p-3 focus:outline-none"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {!street && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
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
              className="border w-full p-3 focus:outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {!city && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              City
            </label>
          </div>
          <div>
            <input
              className="border w-full p-3 focus:outline-none"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            {!state && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
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
              className="border w-full p-3 focus:outline-none"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            {!zip && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
            <label
              htmlFor=""
              className="inline-block mt-2.5 text-sm font-medium"
            >
              ZIP / Postal Code
            </label>
          </div>
          <div>
            <input
              className="border w-full p-3 focus:outline-none"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            {!country && (
              <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                This field is required
              </p>
            )}
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
        <div className="">
          <h1 className="font-bold mb-4">
            Birthday{" "}
            <span className="font-bold text-primaryRed text-xl text-center inline-block">
              *
            </span>
          </h1>
          <div className="grid grid-cols-3 sm:gap-x-5 gap-x-4 gap-y-4 sm:gap-y-0 lg:w-1/2 md:w-2/3 w-3/4">
            <div>
              <input
                className="border w-full p-3 focus:outline-none"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
              {!day && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
            <div>
              <input
                className="border w-full p-3 focus:outline-none"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              {!month && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
            <div>
              <input
                className="border w-full p-3 focus:outline-none"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              {!year && (
                <p className="w-full p-2 mt-2 border border-primaryRed text-primaryRed font-semibold text-xs">
                  This field is required
                </p>
              )}
            </div>
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
            <div>
              <input
                className="border w-full p-3 focus:outline-none"
                value={socials}
                onChange={(e) => setSocials(e.target.value)}
              />
              {!socials && (
                <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
                  This field is required
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default FirstForm;
