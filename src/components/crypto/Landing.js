import React from "react";
import blob from "../../assets/images/blobanimation.svg";
import Lottie from "react-lottie-player";
import main1 from "../../assets/lottie/main1.json";
import PrimaryButton from "../utils/PrimaryButton";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
          zIndex: 0,
        }}
      >
        <div className="flex items-center justify-center z-0">
          <div>
            <h1 className="text-6xl font-bold mb-4">CryptoBridge</h1>
            <h1 className="text-6xl font-bold mb-16">Will Contracts</h1>
            <p
              className="w-4/5 text-2xl mb-12"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Create Contracts to safeguard your Crypto from any mishap or
              inactivity in the account, and transfering your Crypto to your
              assigned nominees
            </p>
            <div className="flex">
              <div className="mr-2" style={{ marginRight: "20px" }}>
                <Link to="/crypto/create-contract">
                  <PrimaryButton>Create Contract</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="z-0">
            <Lottie
              play
              loop
              animationData={main1}
              style={{ height: 550, width: 550, zIndex: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
