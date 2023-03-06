import React from "react";
import blob from "../../assets/images/blobanimation.svg";
import Lottie from "react-lottie-player";
import main from "../../assets/lottie/main.json";
import PrimaryButton from "../utils/PrimaryButton";
import SecondaryButton from "../utils/SecondaryButton";
import Navbar from "../utils/Navbar";

const Landing = () => {
  return (
    <div
      className="overflow-hidden relative grid place-items-center h-screen w-screen"
      style={{
        backgroundColor: "rgba(34,15,104,255)",
      }}
    >
      <div className="absolute w-screen h-screen">
        <img
          src={blob}
          alt="blob"
          style={{
            transform: "translate(70%, -50%) scale(1.5)",
            postion: "absolute",
            userSelect: "none",
          }}
        />
        <div
          className="w-none h-none absolute"
          style={{
            borderTop: "250px solid transparent",
            borderLeft: "500px solid rgba(59,42,142,255)",
            bottom: "0",
            left: "-5%",
            zIndex: "0",
          }}
        ></div>
      </div>
      <Navbar />
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
            <div className="flex">
              <div className="mr-2" style={{ marginRight: "20px" }}>
                <PrimaryButton>View Products</PrimaryButton>
              </div>
              <SecondaryButton>Connect Wallet</SecondaryButton>
            </div>
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
