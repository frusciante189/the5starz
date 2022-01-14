import React from "react";

const SelectInput = ({ children }) => {
  return (
    <select
      className="w-full p-3 border focus:outline-none bg-white"
      name="Select Menu"
    >
      {children}
    </select>
  );
};

export default SelectInput;
