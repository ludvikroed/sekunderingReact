import React, { useState } from "react";
import "./Tabs.css";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  let navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 0) {
      navigate("/sekundering/");
    } else if (index === 1) {
      navigate("/sekundering/resultater");
    } else if (index === 2){
      navigate("/sekundering/innstillinger");
    }
    console.log(activeTab)
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
        onClick={() => {
          handleTabClick(2);
          setActiveTab(2);
        }}
      >
        Innstillinger
      </div>
    </div>
  );
};

export default Tabs;
