import React, { useContext } from "react";
import { Button, Container, Header } from "semantic-ui-react";
import { LandContext } from "../context/LandContext";
import { connectWallet } from "../utils/contractMethods";
import { toast } from "react-toastify";
import User from "./User";

const Land = () => {
  const { currentAccount, setCurrentAccount, manager, landOfficer } =
    useContext(LandContext);
  const handleConnect = async () => {
    try {
      const res = await connectWallet();
      setCurrentAccount(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container textAlign="center" style={{ marginTop: "4rem" }}>
      <Header as="h1">Land Assets Management</Header>
      {currentAccount ? (
        <Container>
          <Header as="h2">Welcome: {currentAccount}</Header>
          {currentAccount === manager ? (
            <Header as={"h3"}>Role: Manager</Header>

          ) : (
            currentAccount === landOfficer ? (
              <Header as={"h3"}>Role: Land Officer</Header>
            ) : (<User />)
          )}
        </Container>
      ) : (
        <Button primary onClick={handleConnect}>
          Connect Wallet
        </Button>
      )}
    </Container>
  );
};

export default Land;
