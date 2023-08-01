import React, { useState } from "react";
import Resultater from "./resultater";
const VisResultater = ({ item }) => {
  const [visDropdown, setVisDropdown] = useState(false);
  

  const toggleDropdown = () => {
    setVisDropdown(!visDropdown);
  };


  return (
    <div>
      <button className="resultater-starttider-button" onClick={toggleDropdown}>
        Vis resultater
      </button>
      {visDropdown && (
        <div>
          <Resultater data={item["løpere"]}/>
        </div>
      )}
    </div>
  );
};

export default VisResultater;
