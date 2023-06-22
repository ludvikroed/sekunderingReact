import React, { useState } from "react";
import "./Tabs.css";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  let navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 1) {
      navigate("/sekundering/info");
    } else {
      navigate("/sekundering/");
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
        Info og resultater
      </div>
    </div>
  );
};

export default Tabs;
