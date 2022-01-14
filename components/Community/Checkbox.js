import React from "react";

const Checkbox = () => {
  return (
    <div class="flex items-center ml-5 md:ml-0">
      <input
        type="checkbox"
        className="
        opacity-0
        absolute
        w-2.5
        h-2.5
        z-20
      "
      />
      <div
        className="
        rounded-full
        border-2 border-[#CBD5E0]
        lg:w-[26px] lg:h-[26px]
        w-[22px]
        h-[22px]
        flex flex-shrink-0
        justify-center
        items-center
      "
      >
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </div>
      <label
        className="
        lg:ml-[15px]
        ml-2.5
        font-medium
        text-textGray800
        lg:text-base
        text-sm
      "
      >
        1
      </label>
    </div>
  );
};

export default Checkbox;
