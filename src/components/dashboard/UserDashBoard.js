import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Auth from "./Auth";
import Land from "./Land";
import Home from "./Home";
import Support from "./Support";
import Crypto from "./Crypto";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const [activeTab, setactiveTab] = useState("home");

  return (
    <div className="h-screen flex">
      <div
        id="left"
        className="w-1/5 h-full relative"
        style={{ background: "rgb(34, 15, 104)" }}
      >
        <div
          id="logo"
          className="flex justify-center items-center text-white mb-16 py-4 px-8"
        >
          <Link to={"/"} className="flex justify-center items-center">
            <img src={logo} alt="logo" height={50} width={50} />
            <span className="text-3xl font-bold">CryptoBridge</span>
          </Link>
        </div>

        <div className="pl-4">
          <div
            id="auth"
            className={`${
              activeTab === "auth" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("auth")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "auth" ? "pl-4" : ""
              }`}
            >
              Sign In
            </p>
          </div>
          <div
            id="home"
            className={`${
              activeTab === "home" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("home")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "home" ? "pl-4" : ""
              }`}
            >
              Home
            </p>
          </div>
          <div
            id="crypto"
            className={`${
              activeTab === "crypto" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("crypto")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "crypto" ? "pl-4" : ""
              }`}
            >
              Crypto
            </p>
          </div>
          <div
            id="land"
            className={`${
              activeTab === "land" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("land")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "land" ? "pl-4" : ""
              }`}
            >
              Land
            </p>
          </div>
          <div
            id="support"
            className={`${
              activeTab === "support" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("support")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "support" ? "pl-4" : ""
              }`}
            >
              Support
            </p>
          </div>
        </div>
        <p className="absolute bottom-0 text-white p-8">v.0.0.1</p>
      </div>

      <div id="right" className="w-4/5 p-8 h-screen overflow-auto">
        {(() => {
          switch (activeTab) {
            case "auth":
              return <Auth />;
            case "crypto":
              return <Crypto />;
            case "land":
              return <Land />;
            case "support":
              return <Support />;
            case "home":
              return <Home />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default UserDashBoard;
