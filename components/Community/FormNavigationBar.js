import React from "react";

const FormNavigationBar = ({ onNext, onPrev, isLast }) => {
  return (
    <div className="mt-4 flex space-x-4">
      {!!onPrev && (
        <button
          className="bg-white border-2 border-primaryRed text-primaryRed px-[30px] py-4 font-bold text-lg"
          onClick={(e) => {
            onPrev();
          }}
        >
          PREVIOUS
        </button>
      )}
      <button
        className="bg-primaryRed text-white px-[30px] py-4 font-bold text-lg"
        type="submit"
      >
        {isLast ? <span>Submit</span> : <span>Next</span>}
      </button>
    </div>
  );
};

export default FormNavigationBar;
