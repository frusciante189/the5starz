import React from "react";

const FieldHeader = ({ title, requierd = false }) => {
  return (
    <p className="font-bold mb-1">
      {title}{" "}
      {requierd && (
        <span className="font-bold text-primaryRed text-xl text-center inline-block">
          *
        </span>
      )}
    </p>
  );
};

export default FieldHeader;
