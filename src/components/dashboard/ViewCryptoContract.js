import React, { useContext, useEffect, useState } from "react";
import Loader from "../utils/Loader";
import { getUserWill } from "../../utils/contractMethods";
import { CryptoContext } from "../../context/CryptoContext";
import { ethers } from "ethers";

const ViewCryptoContract = () => {
  const { currentAccount } = useContext(CryptoContext);

  const [loading, setloading] = useState(false);
  const [userWill, setuserWill] = useState([]);
  const [remainingSeconds, setremainingSeconds] = useState(0);

  useEffect(() => {
    setloading(true);
    const fetchWill = async () => {
      const will = await getUserWill(currentAccount);
      setuserWill(will);
      if (will.deadLine)
        setremainingSeconds(will.deadLine - Math.floor(Date.now() / 1000));
    };

    const interval = setInterval(() => {
      setremainingSeconds((prevSec) => prevSec - 1);
    }, 1000);

    fetchWill();
    setloading(false);

    return () => clearInterval(interval);
  }, [currentAccount]);

  const calculateTimeRemaining = () => {
    const yearInSeconds = 31536000;
    const monthInSeconds = 2592000;
    const dayInSeconds = 86400;
    const hourInSeconds = 3600;
    const minuteInSeconds = 60;

    const years = Math.floor(remainingSeconds / yearInSeconds);
    const months = Math.floor(
      (remainingSeconds % yearInSeconds) / monthInSeconds
    );
    const days = Math.floor(
      ((remainingSeconds % yearInSeconds) % monthInSeconds) / dayInSeconds
    );
    const hours = Math.floor(
      (((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) /
        hourInSeconds
    );
    const minutes = Math.floor(
      ((((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) %
        hourInSeconds) /
        minuteInSeconds
    );
    const seconds =
      Math.floor(
        (((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) %
          hourInSeconds
      ) % minuteInSeconds;

    return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  };

  return (
    <div className="relative w-full my-4">
      {loading && (
        <div className="w-full h-screen flex items-center justify-center absolote top-0 left-0 bg-slate-100 bg-opacity-20">
          <Loader />
        </div>
      )}
      <div className="rounded shadow-md p-8 bg-[#f4f4f4] w-full">
        <h1 className="text-5xl font-bold text-violet-900 mb-12">
          {userWill.willName}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">User Address</h1>
            <p className="text-slate-500 italic">{userWill.userAddress}</p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">Will Amount</h1>
            <p className="text-slate-500 italic">
              {userWill.amount && ethers.utils.formatEther(userWill.amount)} Eth
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">Aadhar Link</h1>
            <a href="/" target={"_blank"} rel="noreferrer">
              <p className="text-blue-500 italic underline">View Aadhar</p>
            </a>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">
              Will Executing After
            </h1>
            <p className="text-slate-500 italic">
              {userWill.deadLine && calculateTimeRemaining(userWill.deadLine)}
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">Nominee Addresses</h1>
            <ul className="list-disc text-slate-500 italic p-4">
              {userWill.nomineeAddress?.map((nominee, i) => (
                <li key={`nomineeAddress${i}`}>{nominee}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCryptoContract;
