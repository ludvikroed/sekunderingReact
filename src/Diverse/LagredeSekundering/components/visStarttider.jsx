import React, { useState } from "react";

const VisStarttider = ({ item }) => {
  const [visDropdown, setVisDropdown] = useState(false);
  const toggleDropdown = () => {
    setVisDropdown(!visDropdown);
  };

  return (
    <div>
      <button className="resultater-starttider-button" onClick={toggleDropdown}>
        Vis mer data
      </button>
      {visDropdown && (
        <div className="lopere-list">
          {item["løpere"].map((data, index) => (
            <div key={index} className="loper-name">
              <p> Navn: {data["navn"]}</p> <p>starttid: {data["startTid"]}</p>{" "}
              <p>Klubb: {data["klubb"]}</p>
              <p>Klasse: {data["klasse"]}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisStarttider;
