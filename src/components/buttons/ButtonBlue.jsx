import React from "react";

const ButtonBlue = ({ text }) => {
  return (
    <div className="hover:poiter w-40 cursor-pointer rounded-md bg-primary p-2 text-center font-primary text-lg font-medium text-white hover:animate-pulse lg:w-52">
      {text}
    </div>
  );
};

export default ButtonBlue;
