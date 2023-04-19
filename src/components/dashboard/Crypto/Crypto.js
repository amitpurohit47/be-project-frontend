import React, { useContext, useState } from "react";
import { CryptoContext } from "../../../context/CryptoContext";
import AddOfficer from "./AddOfficer";
import ClaimCrypto from "./ClaimCrypto";
import CreateCryptoContract from "./CreateCryptoContract";
import NomineeClaimRequests from "./NomineeClaimRequests";
import OfficerClaimRequests from "./OfficerClaimRequests";
import ViewCryptoContract from "./ViewCryptoContract";
import Auth from "./Auth"; 

const Crypto = () => {
  const { currentAccount } = useContext(CryptoContext);
  const [government, setgovernment] = useState("");
  const [isOfficer, setisOfficer] = useState(false);
  const [officers, setofficers] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isWillCreated, setisWillCreated] = useState(true);
  const [viewWill, setviewWill] = useState("will");

  return !isLoggedIn ? (
    <Auth
      setisLoggedIn={setisLoggedIn}
      setgovernment={setgovernment}
      setofficers={setofficers}
      setisOfficer={setisOfficer}
    />
  ) : (
    <div>
      <div className="text-right">
        <button
          type="button"
          className="cursor-pointer mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => {
            setisLoggedIn(false);
            setisOfficer(false);
          }}
        >
          Sign Out
        </button>
      </div>
      {currentAccount === government && (
        <div>
          <AddOfficer
            setofficers={setofficers}
            officers={officers}
            government={government}
          />
        </div>
      )}
      {isOfficer && <OfficerClaimRequests />}
      {currentAccount !== government && !isOfficer && (
        <div>
          <div className="flex w-full justify-around">
            <button
              className={`cursor-pointer px-6 py-2 ${
                viewWill === "will"
                  ? "bg-[#220F68] text-white"
                  : "bg-white text-[#220F68]"
              } rounded-full font-bold mr-4 text-xl shadow-md`}
              onClick={() => setviewWill("will")}
            >
              View/Create Will
            </button>
            <button
              className={`cursor-pointer px-6 py-2 ${
                viewWill === "claim"
                  ? "bg-[#220F68] text-white"
                  : "bg-white text-[#220F68]"
              } rounded-full font-bold mr-4 text-xl shadow-md`}
              onClick={() => setviewWill("claim")}
            >
              Claim Will
            </button>
          </div>
          {viewWill === "will" &&
            (isWillCreated ? (
              <ViewCryptoContract setisWillCreated={setisWillCreated} />
            ) : (
              <CreateCryptoContract setisWillCreated={setisWillCreated} />
            ))}
          {viewWill === "claim" && (
            <div className="my-4">
              <ClaimCrypto />
              <NomineeClaimRequests />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Crypto;
