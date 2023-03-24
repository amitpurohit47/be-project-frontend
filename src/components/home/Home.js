import React from "react";
import Landing from "./Landing";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Background from "./Background";
import Navbar from "../utils/Navbar";

function Home() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Navbar />
        <Background />
        <section data-scroll-section>
          <Landing />
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default Home;
