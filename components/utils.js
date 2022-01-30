import React from "react";

export const showRequiredError = (errors, fieldName) => {
  if (errors && errors[fieldName]?.type === "required") {
    return (
      <p className="w-full pl-4 py-3 mt-2 border border-secondaryRed text-secondaryRed bg-bgRed">
        This field is required
      </p>
    );
  } else {
    return null;
  }
};
