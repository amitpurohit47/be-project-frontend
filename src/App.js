import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import UserDashBoard from "./components/dashboard/UserDashBoard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
