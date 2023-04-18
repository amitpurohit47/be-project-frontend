import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export const CryptoContext = React.createContext();

const { ethereum } = window;

export const CryptoProvider = ({ children }) => {
  const [currentAccount, setcurrentAccount] = useState("");

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setcurrentAccount(accounts[0].toLowerCase());
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <CryptoContext.Provider
      value={{
        currentAccount,
        setcurrentAccount
      }}
    >
      <ToastContainer />
      {children}
    </CryptoContext.Provider>
  );
};
