import React, { useContext } from "react";
import Lottie from "react-lottie-player";
import main from "../../assets/lottie/main.json";
import PrimaryButton from "../utils/PrimaryButton";
import SecondaryButton from "../utils/SecondaryButton";
import { CryptoContext } from "../../context/CryptoContext";
import { Link } from "react-router-dom";

const Landing = () => {
  const { currentAccount } = useContext(CryptoContext);

  return (
    <div className="relative grid place-items-center h-screen w-screen mt-4">
      <div
        className="flex items-center justify center text-white w-4/5"
        style={{
          zIndex: 1,
        }}
      >
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-8xl font-bold mb-16">CryptoBridge</h1>
            <p
              className="w-4/5 text-2xl mb-12"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
            >
              A new way to secure your digital assets and their futher
              descendants through Smart Contracts
            </p>
            <PrimaryButton>
              <Link to="/dashboard">Try Our App →</Link>
            </PrimaryButton>
          </div>
          <div>
            <Lottie
              play
              loop
              animationData={main}
              style={{ height: 600, width: 600 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
