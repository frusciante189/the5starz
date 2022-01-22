import React from "react";

const Input = ({ label, placeholder, type }) => {
  return (
    <div className="">
      <input
        type={type}
        className="border w-full p-3 focus:outline-none"
        placeholder={placeholder}
      />
      <label htmlFor="" className="inline-block mt-2.5 text-sm font-medium">
        {label}
      </label>
    </div>
  );
};

export default Input;
