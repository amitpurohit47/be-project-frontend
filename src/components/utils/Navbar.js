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
          style={{ flex: 0.5, fontFamily: "Hanken Grotesk, sans-serif" }}
        >
          <li>
            <Link to={"/dashboard"}>Our App</Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About CryptoBridge
          </li>
          {/* <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("products").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Our Products
          </li>
          <li
            className="cursor-pointer"
            onClick={() =>
              document.getElementById("faq").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            FAQ
          </li> */}
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
