import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkUser, getLandOfficer, getManager } from "../utils/contractMethods";

export const LandContext = React.createContext();

const { ethereum } = window;

export const LandProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [manager, setManager] = useState("");
  const [landOfficer, setLandOfficer] = useState("");
  const [isUser, setIsUser] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return toast.error("Please Install Metamask!");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else console.log("No accounts found");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    const fetchData = async () => {
      try {
        const mngr = await getManager();
        const landOff = await getLandOfficer();
        const checkuser = await checkUser(currentAccount);
        setManager(mngr);
        setLandOfficer(landOff);
        setIsUser(checkuser);
      } catch (error) {
        console.log(error);
      }
    };

    checkIfWalletIsConnected();
    if (currentAccount) {
      fetchData();
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount("");
      }
    };

    ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      if (ethereum.off) ethereum.off("accountsChanged", handleAccountsChanged);
    };
  }, [currentAccount]);

  return (
    <LandContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
        manager,
        landOfficer,
        isUser
      }}
    >
      <ToastContainer />
      {children}
    </LandContext.Provider>
  );
};
