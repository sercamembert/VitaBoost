import React from "react";

const LoginButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:animate-pulse"
    >
      {text}
    </button>
  );
};

export default LoginButton;
