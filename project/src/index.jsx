import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PortfolioScreen from "./components/portfolio/PortfolioScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioScreen />
  </React.StrictMode>
);
