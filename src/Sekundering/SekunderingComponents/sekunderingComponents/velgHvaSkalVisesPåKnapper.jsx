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
      {showDropdown && <VisTing />}
      <hr />
    </div>
  );
}

export default VelgHvaSkalVisesPåKnapper;
