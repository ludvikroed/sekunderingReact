import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StartSekunderingButton({ løperData, alleFeltFylt }) {
  let navigate = useNavigate();
  const [hvisError, setHvisError] = useState(false);

  function gøreTidTilSekunder(klokkeslett) {
    const [timer, minutter, sekunder] = klokkeslett.split(":");

    const timerISekunder = parseInt(timer) * 3600;
    const minutterIsekunder = parseInt(minutter) * 60;
    const sekunderSekunder = parseInt(sekunder);

    const klokkeslettISekunder =
      sekunderSekunder + timerISekunder + minutterIsekunder;
    return klokkeslettISekunder;
  }

  const startSekundering = () => {
    setHvisError(false);
    sessionStorage.clear();
    const dataObject = { ...løperData };

    const nyLøpereData = Object.keys(dataObject).map((key) => {
      const data = { ...dataObject[key] };
      data["startTidSekunder"] = gøreTidTilSekunder(data["starttid"]);
      data["antallPasseringer"] = 0;
      return data;
    });

    const allData = [
      { antallLøpere: nyLøpereData.length, løpere: nyLøpereData },
      "Manuell",
    ];
    console.log(nyLøpereData)

    navigate("/sekundering/", {
      state: allData,
    });
  };

  return (
    <div>
      {hvisError ? (
        <div className="fixed-button">
          Du må velge minst to løpere for å starte sekundering.
        </div>
      ) : (
        alleFeltFylt && (
          <button className="fixed-button" onClick={startSekundering}>
            Start sekundering
          </button>
        )
      )}
    </div>
  );
}

export default StartSekunderingButton;
