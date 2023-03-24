import React, { useContext } from "react";
import { CryptoContext } from "../../context/CryptoContext";
import { connectWallet, showError } from "../../utils/contractMethods";
import PrimaryButton from "../utils/PrimaryButton";
import SecondaryButton from "../utils/SecondaryButton";

const Login = ({ closeModal }) => {
  const { setcurrentAccount } = useContext(CryptoContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const account = await connectWallet();
      setcurrentAccount(account);
      closeModal();
    } catch (error) {
      showError(error);
      closeModal();
    }
  };

  return (
    <div
      className="w-[300px] h-[150px] absolute top-12 -left-32 z-50 rounded shadow-xl p-4"
      style={{ background: "rgb(59, 42, 142)" }}
    >
      <h1 className="text-center mb-4">Login As</h1>
      <div className="flex items-center justify-center">
        <PrimaryButton
          handleClick={handleLogin}
          style={{ marginRight: "20px" }}
        >
          User
        </PrimaryButton>
        <SecondaryButton handleClick={handleLogin}>Officer</SecondaryButton>
      </div>
    </div>
  );
};

export default Login;
