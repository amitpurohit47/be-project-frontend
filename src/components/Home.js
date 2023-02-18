import React, { useContext } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LandContext } from "../context/LandContext";
import { connectWallet } from "../utils/contractMethods";
import { toast } from "react-toastify";

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
    <Container style={centerStyle}>
      <Header as="h1" textAlign="center" style={{ fontFamily: "Arial" }}>
        Welcome to Asset Management System
      </Header>
      {currentAccount && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/land">
            <Button primary size="huge" style={buttonStyle}>
              Land Assets
            </Button>
          </Link>
          <Link to="/crypto">
            <Button primary size="huge" style={buttonStyle}>
              Crypto Assets
            </Button>
          </Link>
        </div>
      )}
      {!currentAccount && (
        <Button
          secondary
          size="huge"
          style={buttonStyle}
          onClick={handleConnect}
        >
          Connect Wallet
        </Button>
      )}
      <footer
        style={{
          padding: "20px",
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        Managed by {manager}
      </footer>
    </Container>
  );
}

export default Home;
