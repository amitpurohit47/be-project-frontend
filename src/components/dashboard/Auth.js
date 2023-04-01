import React, { useContext } from "react";
import government from "../../assets/images/government.png";
import user from "../../assets/images/user.png";
import officer from "../../assets/images/officer.png";
import metamask from "../../assets/images/metamask.png";
import { connectWallet, getContactOwner } from "../../utils/contractMethods";
import { CryptoContext } from "../../context/CryptoContext";

const Auth = ({ setactiveTab, setgovernment, setisLoggedIn }) => {
  const { setcurrentAccount } = useContext(CryptoContext);

  const handleConnect = async () => {
    try {
      const account = await connectWallet();
      setcurrentAccount(account);
      if ( account ) {
        setactiveTab("crypto");
        const gov = await getContactOwner();
        setgovernment(gov.toLowerCase());
        setisLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f4f4f4] w-full rounded shadow-md pt-1">
      <h1 className="mt-8 text-2xl text-white bg-[#220F68] rounded-r-full py-3 pr-8 pl-4 w-fit">
        Sign In As
      </h1>
      <div className="grid grid-cols-3 gap-5 w-full p-4 mt-8">
        <div className="bg-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-md">
          <img src={government} alt="government" width={120} height={120} />
          <p className="text-2xl font-bold my-2">Government</p>
          <button
            className="border-none outline-none px-6 py-2 text-white text-xl rounded cursor-pointer flex items-center justify-center"
            style={{ background: "rgb(34, 15, 104)" }}
            onClick={handleConnect}
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
            onClick={handleConnect}
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
            onClick={handleConnect}
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
