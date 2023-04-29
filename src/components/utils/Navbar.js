import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 flex items-center justify-center w-full mx-auto bg-gradient-to-b from-black to-transparent"
      style={{ zIndex: 99 }}
    >
      <div className="flex items-center justify-between w-4/5">
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
          className="list-none flex items-center justify-around text-white text-xl font-bold"
          style={{ flex: 0.7, fontFamily: "Hanken Grotesk, sans-serif" }}
        >
          <li>
            <Link to={"/dashboard"}>Sign In</Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About
          </li>
          {/* <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("products").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Products
          </li> */}
         
          <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("metamask").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Metamask
          </li> 
          <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("team").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Team
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
