import React, { useState } from "react";

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
        Velg hva som skal vises
      </button>
      {showDropdown && <div>hello</div>}
      <hr />
    </div>
  );
}

export default VelgHvaSkalVisesPåKnapper;