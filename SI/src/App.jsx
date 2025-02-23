import React from "react";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
