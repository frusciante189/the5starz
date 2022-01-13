const ProblemSolution = () => {
  return (
    <section className="bg-primaryRed ">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:px-[70px] sm:px-12 px-5 lg:py-24 md:py-14 sm:py-10 py-12 bg-white bg-bg1 bg-cover bg-bottom">
          <h1 className="xl:text-[34px] xl:leading-[34px] lg:text-[28px] lg:leading-[28px] text-2xl leading-[24px] font-bold text-primaryRed">
            The problem
          </h1>
          <div className="bg-primaryRed h-1.5 lg:min-w-[11%] w-1/6 rounded-full mt-5"></div>
          <p className="mt-7 text-lg leading-[30px] lg:pr-14">
            With all due respect to influencers (yes, even nano influencers)
            what really converts is – you guessed it, ordinary people.{" "}
            <span className="font-bold">People who are just like you!</span>{" "}
            Think about it, who are you going to believe? Influencers that you
            know were paid to sell you stuff, that promote your brand one day
            and your competitors the next? Or someone who has ZERO interest
            whether you purchase the product or not?
          </p>
        </div>
        <div className="bg-primaryRed lg:origin-top-left lg:-skew-x-[10deg] lg:overflow-hidden">
          <div className="lg:px-[70px] sm:px-12 px-5 lg:py-24 md:py-14 sm:py-10 py-12 lg:skew-x-[10deg] text-lg leading-[30px] text-white">
            <h1 className="xl:text-[34px] xl:leading-[34px] lg:text-[28px] lg:leading-[28px] text-2xl leading-[24px] font-bold">
              Our Solution
            </h1>
            <div className="bg-white h-1.5 lg:w-[11%] w-1/6 rounded-full mt-5"></div>
            <p className="mt-7">
              We connect your brand with “ordinary” people that create:
            </p>
            <ul className="pl-12 list-disc list-outside mt-1.5">
              <li>
                <span className="font-bold">Video testimonials -</span> Create
                hundreds of home-made videos to the brief.
              </li>
              <li>
                <span className="font-bold">Photos -</span> Create photos with
                your product “in the wild”
              </li>
              <li>
                <span className="font-bold">Reviews -</span> Generate reviews
                wherever you need – Google, FB, product pages. Our contributors
                will post wherever.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
