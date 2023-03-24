import React from "react";
import blob from "../../assets/images/blobanimation.svg";

const Background = () => {
  return (
    <div
      className="overflow-hidden fixed top-0 left-0 bottom-0 right-0 w-screen h-screen"
      style={{
        backgroundColor: "rgba(34,15,104,255)",
        zIndex: "-1"
      }}
    >
      <img
        src={blob}
        alt="blob"
        style={{
          transform: "translate(70%, -50%) scale(1.5)",
          postion: "absolute",
          userSelect: "none",
        }}
      />
      <div
        className="w-none h-none absolute"
        style={{
          borderTop: "250px solid transparent",
          borderLeft: "500px solid rgba(59,42,142,255)",
          bottom: "0",
          left: "-5%",
          zIndex: "0",
        }}
      ></div>
    </div>
  );
};

export default Background;
