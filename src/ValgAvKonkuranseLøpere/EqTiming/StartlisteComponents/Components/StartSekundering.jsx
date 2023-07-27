import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function StartSekunderingButton({ checkedLøpere }) {
  let navigate = useNavigate();
  const [hvisError, setHvisError] = useState(false);
  
  useEffect(() => {
    const length = Object.keys(checkedLøpere).length;
    if (length < 2) {
      setHvisError(true);
    } else {
      setHvisError(false);
    }
  }, [checkedLøpere]);

  const startSekundering = () => {
    setHvisError(false);
    sessionStorage.clear();
    sessionStorage.setItem("dataFraStartliste", JSON.stringify(checkedLøpere));
    navigate("/sekundering/", { state: checkedLøpere });
  };

  return (
      <div>
        {hvisError ? (
          <div className="fixed-button">
            Du må velge minst to løpere for å starte sekundering.
          </div>
        ) : (
          <button className="fixed-button" onClick={startSekundering}>
            Start sekundering
          </button>
        )}
      </div>
  );
}

export default StartSekunderingButton;
