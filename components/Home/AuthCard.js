import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AuthCard = ({ perc, title, desc }) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="bg-white flex flex-col h-full">
      <div className="w-full md:min-h-[177px] min-h-[260px] bg-[#DA8172] flex items-center justify-center text-white text-[69px] leading-[69px] font-semibold">
        {/* <h1 className="text-white text-[69px] leading-[69px] font-semibold">
          {perc}%
        </h1> */}
        <CountUp start={focus ? 0 : null} end={perc} duration={2} redraw={true}>
          {({ countUpRef }) => (
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setFocus(true);
                }
              }}
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        %
      </div>
      <div className="md:min-h-[220px] bg-white p-5 border-b-4 border-[#DA8172]">
        <h1 className="text-primaryRed font-bold text-[22px] leading-[22px]">
          {title}
        </h1>
        <p className="text-lg mt-1.5">{desc}</p>
      </div>
    </div>
  );
};

export default AuthCard;
