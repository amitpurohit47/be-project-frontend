import React from "react";
import ReactDOM from "react-dom/client";
import { LandProvider } from "./context/LandContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LandProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </LandProvider>
);
