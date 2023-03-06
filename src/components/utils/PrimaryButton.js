import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button
      className="px-4 py-2 text-xl font-bold text-white border-none outline-none rounded-full z-10"
      style={{
        background: "linear-gradient(to right, #21cdd9, #038ffa)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
