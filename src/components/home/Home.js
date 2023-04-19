import React from "react";
import Landing from "./Landing";
import Background from "./Background";
import Navbar from "../utils/Navbar";
import About from "./About";

function Home() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Background />
      <Landing />
      <About />
    </div>
  );
}

export default Home;
