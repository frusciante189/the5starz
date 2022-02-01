import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import Banner from "../Home/Banner";
import Stepper from "./Stepper";
import { backendHost } from "../../utils/constants";

export const simplified = false;
const url = `${backendHost}contributor-landing-page-answer`;

const Form = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const submitForm = (data) => {
    console.log(`submitForm`, { data });

    // YYYY-MM-DD
    const { birthday_day, birthday_month, birthday_year } = data;
    const birthday = `${birthday_year}-${birthday_month}-${birthday_day}`;

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        birthday,
        form_id: "the5starz.com-website",
      }),
    })
      .then((res) => {
        console.log("submitted", { res, url, data });
      })
      .catch((res) => {
        console.log(`Form post results`, { res });
      });
  };

  const handleNext = (data) => {
    setFormData((oldData) => ({ ...oldData, ...data }));
    setIndex((oldState) => oldState + 1);

    if (index === 2) {
      submitForm({ ...formData, ...data });
    }
    window.scrollTo(0, 0);
    console.log(`muly:Form:handleNext`, { data });
  };

  const handlePrev = (data) => {
    setFormData((oldData) => ({ ...oldData, ...data }));
    if (index > 0) {
      setIndex((oldState) => oldState - 1);
    }
    window.scrollTo(0, 0);
    console.log(`muly:Form:handlePrev`, { data });
  };

  if (index === 3) {
    return (
      <section className="lg:py-24 md:py-14 sm:py-10 pb-12 pt-5 lg:px-[70px] sm:px-12 px-5">
        <Banner
          title="Thanks for contacting us!"
          text="We will get in touch with you shortly"
        />
      </section>
    );
  } else {
    return (
      <section className="lg:py-24 md:py-14 sm:py-10 pb-12 pt-5 lg:px-[70px] sm:px-12 px-5">
        <h2 className=" text-primaryRed text-[19px] leading-[19px] font-bold text-center">
          The more info we have the greater your chances of receiving free
          products.
        </h2>
        <Stepper
          index={index}
          steps={[
            "Personal Information",
            "Getting to know you better (optional)",
            "Agreement",
          ]}
        />
        <div className="lg:mt-[50px] md:mt-10 mt-5 pb-[60px] border-b">
          {index === 0 && <FirstForm onNext={handleNext} data={formData} />}
          {index === 1 && (
            <SecondForm
              onPrev={handlePrev}
              onNext={handleNext}
              data={formData}
            />
          )}
          {index === 2 && (
            <ThirdForm
              onPrev={handlePrev}
              onNext={handleNext}
              data={formData}
            />
          )}
        </div>
      </section>
    );
  }
};

export default Form;
