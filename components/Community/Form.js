import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import { useForm } from "react-hook-form";

const NavigationBar = ({ index, setIndex }) => {
  return (
    <div className="mt-4 flex space-x-4">
      {index >= 1 && (
        <button
          className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
          onClick={(e) => {
            e.preventDefault();
            setIndex((oldState) => oldState - 1);
            window.scrollTo(0, 0);
          }}
        >
          PREVIOUS
        </button>
      )}
      <input
        className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
        type="submit"
      />
      {/*  {index === 2 ? <span>Submit</span> : <span>Next</span>}*/}
      {/*</input>*/}
    </div>
  );
};

const Form = () => {
  const [index, setIndex] = useState(0);
  const form1 = useForm();
  const form2 = useForm();
  const form3 = useForm();

  let form = form1;
  if (index === 1) {
    form = form2;
  } else if (index === 2) {
    form = form3;
  }

  console.log(`render ${index}`, { form1 });

  const onSubmit = (data) => {
    console.log(`submit ${index}`, { data });
    if (index < 2) {
      setIndex((oldState) => oldState + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="lg:py-24 md:py-14 sm:py-10 pb-12 pt-5 lg:px-[70px] sm:px-12 px-5">
      <div className="">
        <h1 className=" text-primaryRed text-[19px] leading-[19px] font-bold text-center">
          The more info we have the greater your chances of receiving free
          products.
        </h1>
        <div className="lg:mt-[70px] md:mt-[50px] mt-10 flex sm:flex-row flex-col items-start sm:items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0 lg:pb-[46px] md:pb-8 pb-5 border-b">
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 0
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300`}
            >
              1
            </span>
            <h1 className="md:text-sm text-xs font-semibold">
              Personal Information
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 1
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300 `}
            >
              2
            </span>
            <h1 className="md:text-sm text-xs font-semibold">
              Getting to know you better (optional)
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`${
                index === 2
                  ? "bg-primaryRed text-white flex-shrink-0"
                  : "bg-white text-black"
              } h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full outline outline-gray-300 `}
            >
              3
            </span>
            <h1 className="md:text-sm text-xs font-semibold">Agreement</h1>
          </div>
        </div>
      </div>
      <div className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
        {index === 0 && (
          <form onSubmit={form1.handleSubmit(onSubmit)}>
            <FirstForm register={form1.register} errors={form1.errors} />
            <NavigationBar index={index} setIndex={setIndex} />
          </form>
        )}
        {index === 1 && (
          <form onSubmit={form2.handleSubmit(onSubmit)}>
            <SecondForm register={form2.register} errors={form2.errors} />
            <NavigationBar index={index} setIndex={setIndex} />
          </form>
        )}
        {index === 2 && (
          <form onSubmit={form3.handleSubmit(onSubmit)}>
            <ThirdForm register={form3.register} errors={form3.errors} />
            <NavigationBar index={index} setIndex={setIndex} />
          </form>
        )}
      </div>
    </section>
  );
};

export default Form;
