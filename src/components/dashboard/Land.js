import React, { useContext } from "react";
import { CryptoContext } from "../../context/CryptoContext";

const Land = ({ setactiveTab }) => {
  const { currentAccount } = useContext(CryptoContext);

  return !currentAccount ? (
    <div className="bg-[#f4f4f4] p-8 rounded flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8">
        You Need to Sign In to access the App
      </h1>
      <button
        className="border-none outline-none px-6 py-2 text-white text-xl rounded cursor-pointer flex items-center justify-center"
        style={{ background: "rgb(34, 15, 104)" }}
        onClick={() => setactiveTab("auth")}
      >
        Sign In
      </button>
    </div>
  ) : (
    <div>Land</div>
  );
};

export default Land;
