import React, { useContext, useState } from "react";
import {
  connectWallet,
  getContactOwner,
  getOfficers,
} from "../../../utils/contractMethods";
import { CryptoContext } from "../../../context/CryptoContext";
import { toast } from "react-toastify";
import Loader from "../../utils/Loader";
import governmentimg from "../../../assets/images/government.png";
import user from "../../../assets/images/user.png";
import officer from "../../../assets/images/officer.png";
import metamask from "../../../assets/images/metamask.png";

const Auth = ({ setgovernment, setisLoggedIn, setofficers, setisOfficer }) => {
  const { setcurrentAccount } = useContext(CryptoContext);

  const [loading, setloading] = useState(false);

  const handleConnect = async (accountType) => {
    setloading(true);
    try {
      const acc = await connectWallet();
      const account = acc.toLowerCase();
      setcurrentAccount(account);
      if (account) {
        const gov = await getContactOwner();
        const offs = await getOfficers();
        const mainOffs = offs?.map((off) => off.toLowerCase());
        // console.log(account);
        // console.log(gov);
        if (mainOffs.includes(account)) setisOfficer(true);
        setofficers(mainOffs);
        setgovernment(gov.toLowerCase());
        if (accountType === "government" && account !== gov.toLowerCase()) {
          setloading(false);
          return toast.error("Please Sign In Through Government Account");
        }
        if (accountType === "officer" && !mainOffs.includes(account)) {
          setloading(false);
          return toast.error("Please Sign In Through Officer Account");
        }
        if (
          accountType === "user" &&
          (account === gov.toLowerCase() || mainOffs.includes(account))
        ) {
          setloading(false);
          return toast.error(
            "Please Sign In Through Respective Authority Account"
          );
        }
        setisLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  return (
    <div className="bg-[#f4f4f4] w-full rounded shadow-md pt-1">
      {loading && (
        <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-slate-100 bg-opacity-20">
          <Loader />
        </div>
      )}
      <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
        Sign In As
      </h1>
      <div className="grid grid-cols-3 gap-5 w-full p-4 mt-8">
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md">
          <img src={governmentimg} alt="government" width={120} height={120} />
          <p className="text-2xl font-bold my-2">Government</p>
          <button
            className="border-none outline-none px-6 py-2 text-white text-xl rounded cursor-pointer flex items-center justify-center"
            style={{ background: "rgb(34, 15, 104)" }}
            onClick={() => handleConnect("government")}
          >
            <img
              src={metamask}
              alt="metamask"
              height={25}
              width={25}
              className="mr-1"
            />{" "}
            Connect Wallet
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md">
          <img src={officer} alt="officer" width={120} height={120} />
          <p className="text-2xl font-bold my-2">Officer</p>
          <button
            className="border-none outline-none px-6 py-2 text-white text-xl rounded cursor-pointer flex items-center justify-center"
            style={{ background: "rgb(34, 15, 104)" }}
            onClick={() => handleConnect("officer")}
          >
            <img
              src={metamask}
              alt="metamask"
              height={25}
              width={25}
              className="mr-1"
            />{" "}
            Connect Wallet
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md">
          <img src={user} alt="user" width={120} height={120} />
          <p className="text-2xl font-bold my-2">User</p>
          <button
            className="border-none outline-none px-6 py-2 text-white text-xl rounded cursor-pointer flex items-center justify-center"
            style={{ background: "rgb(34, 15, 104)" }}
            onClick={() => handleConnect("user")}
          >
            <img
              src={metamask}
              alt="metamask"
              height={25}
              width={25}
              className="mr-1"
            />{" "}
            Connect Wallet
          </button>
        </div>
      </div>
      <ul className="list-disc text-slate-500 italic p-8">
        <li className="mb-2">Government is the final controlling authority</li>
        <li className="mb-2">Government can add officer</li>
        <li className="mb-2">Officer validates all the Will Claims</li>
        <li className="mb-2">
          All users must connect{" "}
          <span className="font-bold">Metamask Wallet</span> to access the App
        </li>
      </ul>
    </div>
  );
};

export default Auth;
