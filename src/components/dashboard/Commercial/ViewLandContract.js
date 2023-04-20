import React, { useContext, useEffect, useState } from "react";
import Loader from "../../utils/Loader";
import { getUserWill } from "../../../utils/landContractMethods";
import { CryptoContext } from "../../../context/CryptoContext";

const ViewLandContract = ({ setisWillCreated }) => {
  const { currentAccount } = useContext(CryptoContext);

  const [loading, setloading] = useState(false);
  const [userWill, setuserWill] = useState([]);
  const [remainingSeconds, setremainingSeconds] = useState(0);

  useEffect(() => {
    setloading(true);
    const fetchWill = async () => {
      const will = await getUserWill(currentAccount);
      setuserWill(will);
      console.log(will);
      if (will?.willName === "") setisWillCreated(false);
      if (will.deadLine) {
        setremainingSeconds(will.deadLine - Math.floor(Date.now()) / 1000);
      }
    };

    const interval = setInterval(() => {
      setremainingSeconds((prevSec) => prevSec - 1);
    }, 1000);

    fetchWill();
    setloading(false);

    return () => clearInterval(interval);
  }, [currentAccount, setisWillCreated]);

  const calculateTimeRemaining = () => {
    const yearInSeconds = 31536000;
    const monthInSeconds = 2592000;
    const dayInSeconds = 86400;
    const hourInSeconds = 3600;
    const minuteInSeconds = 60;

    let timer = "";

    const years = Math.floor(remainingSeconds / yearInSeconds);

    if (years > 0) timer += `${years} years, `;

    const months = Math.floor(
      (remainingSeconds % yearInSeconds) / monthInSeconds
    );

    if (months > 0) timer += `${months} months, `;

    const days = Math.floor(
      ((remainingSeconds % yearInSeconds) % monthInSeconds) / dayInSeconds
    );
    if (days > 0) timer += `${days} days, `;

    const hours = Math.floor(
      (((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) /
        hourInSeconds
    );
    if (hours > 0) timer += `${hours} hours, `;

    const minutes = Math.floor(
      ((((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) %
        hourInSeconds) /
        minuteInSeconds
    );
    if (minutes > 0) timer += `${minutes} minutes, `;

    const seconds =
      Math.floor(
        (((remainingSeconds % yearInSeconds) % monthInSeconds) % dayInSeconds) %
          hourInSeconds
      ) % minuteInSeconds;
    if (seconds > 0) timer += `${seconds} seconds`;

    return timer;
  };

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center bg-slate-100 bg-opacity-20">
      <Loader />
    </div>
  ) : (
    <div className="relative w-full my-4">
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
            <h1 className="text-2xl mb-2 font-semibold">Aadhar Link</h1>
            <a href={userWill.IpfsAdharLink} target={"_blank"} rel="noreferrer">
              <p className="text-blue-500 italic underline">View Aadhar</p>
            </a>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">Commercial Estate Document Link</h1>
            <a
              href={userWill.land.IpfsLandDocLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="text-blue-500 italic underline">View Document</p>
            </a>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">Commercial Estate Photo Link</h1>
            <a
              href={userWill.land.landPhotoLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="text-blue-500 italic underline">View Photo</p>
            </a>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl mb-2 font-semibold">
              Will Executing After
            </h1>
            <p className="text-slate-500 italic">
              {remainingSeconds <= 0
                ? "Deadline Ended, Will Execution Completed"
                : userWill.deadLine &&
                  calculateTimeRemaining(userWill.deadLine)}
            </p>
          </div>
          <div className="mb-4 mt-2">
            <h1 className="text-2xl font-semibold">Nominee Address</h1>
            <p className="text-slate-500 italic">{userWill.nomineeAddress}</p>
          </div>
          <div className="mb-4 mt-2">
          <h1 className="text-2xl mb-2 font-semibold">Nominee Aadhar</h1>
            <a
              href={userWill.IpfsNomineeAdharLink}
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="text-blue-500 italic underline">View Aadhar</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLandContract;
