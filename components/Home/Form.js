import React, { useState } from "react";
import Banner from "./Banner";
import { backendHost } from "../../utils/constants";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const url = `${backendHost}contact-us`;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name && !form.email && !form.message && !form.phone) {
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => {
        console.log("submitted", { res, url, form });
        setSubmitted(true);
      });
    }
  };
  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          {submitted && (
            <Banner
              title="Thanks for your interest!"
              text="We will contact you shortly"
            />
          )}
          {!submitted && (
            <form onSubmit={onSubmit}>
              <div className="flex sm:flex-row flex-col sm:space-x-4 lg:justify-start">
                <div className="flex flex-col sm:w-1/2 space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
                    value={form.name}
                    onChange={onChangeHandler}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={onChangeHandler}
                    className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChangeHandler}
                    className="border p-3 focus:outline-none placeholder:text-lg placeholder:text-gray-400 border-gray-300"
                  />
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <textarea
                    className="border resize-none focus:outline-none border-gray-300 p-4 sm:h-full h-40 w-full"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-2.5">
                <input
                  type="submit"
                  className="bg-primaryRed text-white font-bold px-[30px] py-2 text-lg uppercase cursor-pointer"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
