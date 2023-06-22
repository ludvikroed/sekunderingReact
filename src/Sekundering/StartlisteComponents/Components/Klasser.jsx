import React from "react";
import "./Klasser.css";

function Klasser({ klasser, handleKlasseClick, selectedKlasse }) {
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    handleKlasseClick(selectedOption);
  };

  const dropdownOptions = klasser.map((klasse, index) => (
    <option key={index} value={klasse}>
      {klasse}
    </option>
  ));

  return (
    <div className="klasser-container">
      <h2>Velg klasse</h2>
      <div>
        <select value={selectedKlasse} onChange={handleDropdownChange}>
          {dropdownOptions}
        </select>
      </div>
    </div>
  );
}

export default Klasser;
