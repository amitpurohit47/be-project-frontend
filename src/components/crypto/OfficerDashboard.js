import React from "react";
import OfficerCard from "./OfficerCard";

const OfficerDashboard = () => {
  return (
    <div
      className="overflow-hidden relative grid place-items-center h-screen w-screen"
      style={{
        backgroundColor: "rgb(4, 0, 77)",
      }}
    >
      {/* <Navbar /> */}
      <div
        className="overflow-y-scroll h-screen"
        style={{
          backgroundColor: "rgba(34,15,104,255)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: "15rem",
          paddingRight: "15rem",
          paddingBottom: "4rem",
        }}
      >
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
      </div>
    </div>
  );
};

export default OfficerDashboard;
