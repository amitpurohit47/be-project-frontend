import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        style={{ flex: 0.8 }}
      >
        <li>About CryptoBridge</li>
        <li>Our Products</li>
        <li>FAQ</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
