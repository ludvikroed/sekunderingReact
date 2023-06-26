import React, { useState } from "react";
import VisTing from "../innstillinger/components/VisTing";
function VelgHvaSkalVisesPåKnapper() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <button
        className="button-sekundering"
        style={{ minHeight: "30px" }}
        onClick={handleDropdownToggle}
      >
        Velg hva som vises på knapper
      </button>
      {showDropdown && (
        <div>
          <VisTing /> Du må laste inn siden på nytt for at endringene skal vises
        </div>
      )}
      <hr />
    </div>
  );
}

export default VelgHvaSkalVisesPåKnapper;
