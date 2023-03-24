import React from "react";

const PrimaryButton = ({ children, handleClick }) => {
  return (
    <button
      className="px-4 py-2 text-xl font-bold text-white border-none outline-none rounded-full z-10 m-2"
      style={{
        background: "linear-gradient(to right, #21cdd9, #038ffa)",
        fontFamily: "Roboto, sans-serif",
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
