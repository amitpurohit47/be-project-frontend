import React, { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../../context/CryptoContext";
import { getOfficers } from "../../utils/contractMethods";
import AddOfficer from "./AddOfficer";
import ClaimCrypto from "./ClaimCrypto";
import CreateCryptoContract from "./CreateCryptoContract";
import NomineeClaimRequests from "./NomineeClaimRequests";
import OfficerClaimRequests from "./OfficerClaimRequests";
import ViewCryptoContract from "./ViewCryptoContract";

const Crypto = ({ setactiveTab, government, isLoggedIn }) => {
  const { currentAccount } = useContext(CryptoContext);
  const [isOfficer, setisOfficer] = useState(false);
  const [officers, setofficers] = useState([]);
  const [isWillCreated, setisWillCreated] = useState(true);
  const [viewWill, setviewWill] = useState("will");

  useEffect(() => {
    const fetchOfficers = async () => {
      const offs = await getOfficers();
      const newOffs = offs.map((off) => off.toLowerCase());
      setofficers(newOffs);
    };

    const checkOfficer = () => {
      if (
        currentAccount &&
        officers.length > 0 &&
        officers.includes(currentAccount)
      )
        setisOfficer(true);
    };

    if (officers.length === 0) fetchOfficers();
    checkOfficer();
  }, [officers, currentAccount]);

  return !isLoggedIn ? (
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
    <div>
      {currentAccount === government && (
        <AddOfficer
          setofficers={setofficers}
          officers={officers}
          government={government}
        />
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
              <CreateCryptoContract />
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
