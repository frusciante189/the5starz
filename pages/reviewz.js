import React from "react";
import Hero from "../components/Reviewz/Hero";
import Banner from "../components/Reviewz/Banner";
import Free from "../components/Reviewz/Free";
import LastSection from "../components/Reviewz/LastSection";
import Offer from "../components/Reviewz/Offer";
import Product from "../components/Reviewz/Product";

const Reviewz = () => {
  return (
    <>
      <Hero />
      <Product />
      <Offer />
      <Free />
      <Banner />
      <LastSection />
    </>
  );
};

export default Reviewz;
