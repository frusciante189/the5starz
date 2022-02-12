import React from "react";
import Hero from "../components/Common/Hero";
import Image from "next/image";

const imageLoader = ({ src }) => {
  return `/Assets/content-creator-tips/${src}.webp`;
};

const Box = ({ title, image, children }) => {
  return (
    <div className="">
      <Image
        loader={imageLoader}
        src={image}
        alt={title}
        width={275}
        height={198}
        layout="responsive"
      />
      <h2 className="text-2xl font-bold text-primaryRed my-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

const Community = () => {
  return (
    <>
      <Hero title="Content Creator Tips" />
      <div className="grid sm:grid-cols-4 gap-y-12 gap-x-8 grid-cols-2 m-8 mb-16">
        <Box title="Be Thorough" image="be-thorough">
          Good content should be detailed, Try to explain why you feel the way
          you feel. Also, try to include all aspects of the product.
        </Box>
        <Box title="Be Fearless" image="be-fearless">
          Do not be afraid to give your honest opinion. Most companies can
          really learn from this and hopefully, supply better products in the
          future.
        </Box>
        <Box title="Be Relevant" image="be-relevant">
          Try the product before you create your content. Take your time so you
          will be able to showcase your real opinions.
        </Box>
        <Box title="Be Friendly" image="be-friendly">
          Remember, just because it is online doesn’t mean people don’t feel
          anything. There is a real person behind every screen
        </Box>
        <Box title="Be Yourself" image="be-yourself">
          Write in your own words and try to use your own personal style. In
          other words, just be you!
        </Box>
        <Box title="Be Creative" image="be-creative">
          When you take photos/videos remember that you are doing so to help
          other users understand your experience better. Make sure lighting is
          good and your background is neutral.
        </Box>
        <Box title="Be Exact" image="be-exact">
          Nothing is worst then getting the brand or product name wrong. It
          makes the review almost worthless.
        </Box>
        <Box title="Be Honest" image="be-honest">
          At the5starz we want to hear what you really think of a product! If
          your review is a low rating THAT IS FINE!
        </Box>
      </div>
    </>
  );
};

export default Community;
