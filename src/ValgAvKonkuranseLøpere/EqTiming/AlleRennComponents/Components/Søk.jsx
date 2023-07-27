import React from "react";

function Søk({ setSøk}) {
  const handleInputChange = (event) => {
    setSøk(event.target.value);
  };

  return (
    <div className="søk-renn">
      <p >Søk:</p>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default Søk;
