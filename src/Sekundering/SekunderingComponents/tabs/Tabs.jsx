import React, { useState, useEffect } from "react";
import "./Tabs.css";
import { useNavigate, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    // Determine which tab to activate based on the current URL
    if (location.pathname === "/sekundering/resultater") {
      setActiveTab(1);
    } else if (location.pathname === "/sekundering/innstillinger") {
      setActiveTab(2);
    } else {
      setActiveTab(0);
    }
  }, [location.pathname]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 1) {
      navigate("/sekundering/resultater");
    } else if (index === 2) {
      navigate("/sekundering/innstillinger");
    } else {
      navigate("/sekundering");
    }
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === 0 ? "active" : ""}`}
        onClick={() => handleTabClick(0)}
      >
        Sekundering
      </div>
      <div
        className={`tab ${activeTab === 1 ? "active" : ""}`}
        onClick={() => handleTabClick(1)}
      >
        Resultater
      </div>
      <div
        className={`tab ${activeTab === 2 ? "active" : ""}`}
        onClick={() => handleTabClick(2)}
      >
        Innstillinger
      </div>
    </div>
  );
};

export default Tabs;
