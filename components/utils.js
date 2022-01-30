import React from "react";

export const showRequiredError = (errors, fieldName) => {
  if (errors && errors[fieldName]?.type === "required") {
    return (
      <p className="w-full pl-4 py-3 mt-2 border border-primaryRed text-primaryRed font-semibold">
        This field is required
      </p>
    );
  } else {
    return null;
  }
};
