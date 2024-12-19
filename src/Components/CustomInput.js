import React from "react";

const CustomInput = ({ name }) => {
  return (
    <input
      placeholder={name}
      className="text-[18px] text-[black] leading-[24px] w-full h-[53px] rounded-[3px] px-[10px] shadow-none 
      transition-all duration-[0.3s] ease-in-out placeholder:text-[#c6c6c6] placeholder:opacity-100"
      type="text"
    />
  );
};

export default CustomInput;
