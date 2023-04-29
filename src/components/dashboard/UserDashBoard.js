import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Land from "./Land/Land";
import Support from "./Support";
import Crypto from "./Crypto/Crypto";
import Industrial from "./Industrial/Industrial";
import Car from "./Car/Car";
import Flats from "./Flats/Flats";
import Commercial from "./Commercial/Commercial";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const [activeTab, setactiveTab] = useState("crypto");

  return (
    <div className="h-screen flex" style={{ fontFamily: "Lato, sans-serif" }}>
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
            id="flats"
            className={`${
              activeTab === "flats" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("flats")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "flats" ? "pl-4" : ""
              }`}
            >
              Residential Flats
            </p>
          </div>
          <div
            id="commercial"
            className={`${
              activeTab === "commercial" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("commercial")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "commercial" ? "pl-4" : ""
              }`}
            >
              Commercial Estate
            </p>
          </div>
          <div
            id="industrial"
            className={`${
              activeTab === "industrial" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("industrial")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "industrial" ? "pl-4" : ""
              }`}
            >
              Industrial Estate
            </p>
          </div>
          <div
            id="car"
            className={`${
              activeTab === "car" ? "bg-[#04004D] font-bold" : ""
            } py-4 px-8 rounded-l-full cursor-pointer transition-all`}
            onClick={() => setactiveTab("car")}
          >
            <p
              className={`text-white text-2xl ${
                activeTab === "car" ? "pl-4" : ""
              }`}
            >
              Vehicle
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
            case "crypto":
              return <Crypto />;
            case "land":
              return <Land />;
            case "support":
              return <Support />;
            case "flats":
              return <Flats />;
            case "industrial":
              return <Industrial />;
            case "commercial":
              return <Commercial />;
            case "car":
              return <Car />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default UserDashBoard;
