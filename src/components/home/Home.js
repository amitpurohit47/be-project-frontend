import React from "react";
import Landing from "./Landing";
import Background from "./Background";
import Navbar from "../utils/Navbar";
import About from "./About";
import Team from "./Team";

function Home() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Background />
      <Landing />
      <About />
      <Team />
    </div>
  );
}

export default Home;
