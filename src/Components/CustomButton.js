import React from "react";

const CustomButton = ({ name, type, className }) => {
  return (
    <button
      type={type}
      className={`rounded-[3px] bg-button-bg  font-semibold text-[#ffffff] ${className}`}
    >
      {name}
    </button>
  );
};

export default CustomButton;
