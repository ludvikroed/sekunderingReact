import React from "react";
import "./Klasser.css";

function Klasser({ klasser, handleKlasseClick, selectedKlasse }) {
  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    handleKlasseClick(selectedOption);
  };

  const endraKlasse = klasser.map((klasse) => {
    return klasse[0];
  });
  // Remove duplicate items from klasser array
  const uniqueKlasser = [...new Set(endraKlasse)];
  uniqueKlasser.unshift("Alle")

  const dropdownOptions = uniqueKlasser.map((klasse, index) => (
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
