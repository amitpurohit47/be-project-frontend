import React, { useContext } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LandContext } from "../../context/LandContext";
import { connectWallet } from "../../utils/contractMethods";
import { toast } from "react-toastify";
import Landing from "./Landing";

function Home() {
  const { currentAccount, setCurrentAccount, manager } =
    useContext(LandContext);

  const handleConnect = async () => {
    try {
      const res = await connectWallet();
      setCurrentAccount(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const buttonStyle = {
    margin: "20px",
  };

  return (
    <div style={centerStyle}>
      <Landing />
    </div>
  );
}

export default Home;
