import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Login from "./Login";
import { CryptoContext } from "../../context/CryptoContext";

const Navbar = () => {
  const { currentAccount } = useContext(CryptoContext);

  const [openLogin, setopenLogin] = useState(false);
  const closeModal = () => setopenLogin(false);

  return (
    <nav
      className="flex items-center justify-between w-4/5"
      style={{ zIndex: 1 }}
    >
      <Link to={"/"}>
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" height={80} width={80} />
          <span
            style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}
          >
            CryptoBridge
          </span>
        </div>
      </Link>
      <ul
        className="list-none flex items-center justify-around text-white text-xl"
        style={{ flex: 0.6 }}
      >
        <Link to={"/crypto/create-contract"}>
          <li>Create Contract</li>
        </Link>
        <Link to={"/crypto/view-contract"}>
          <li>View Contracts</li>
        </Link>
        <Link>
          <li>Claim Assets</li>
        </Link>
        <Link>
          <li>Support</li>
        </Link>
        {!currentAccount && (
          <li
            className="relative cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setopenLogin((state) => !state);
            }}
          >
            Log In
            {openLogin && <Login closeModal={closeModal} />}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
