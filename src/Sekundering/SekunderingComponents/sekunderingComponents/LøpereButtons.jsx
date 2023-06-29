import React, { useState, Fragment, useEffect } from "react";
import { LøperPasserer } from "./LøperPasserer";
import "./Sekundering.css";

function LøpereButtons({
  løpereData,
  setLøpereData,
  selectedLøper,
  setSelectedLøper,
  showDropdown,
  setVisTider,
}) {
  useEffect(() => {
    const storedVisAntallPasseringer = localStorage.getItem(
      "visAntallPasseringer"
    );
    const parsedVisAntallPasseringer = storedVisAntallPasseringer
      ? JSON.parse(storedVisAntallPasseringer)
      : false;
    setVisAntallPasseringer(parsedVisAntallPasseringer);

    const storedVisKlasse = localStorage.getItem("visKlasse");
    const parsedVisKlasse = storedVisKlasse
      ? JSON.parse(storedVisKlasse)
      : false;
    setVisKlasse(parsedVisKlasse);

    const storedVisKlubb = localStorage.getItem("visKlubb");
    const parsedVisKlubb = storedVisKlubb ? JSON.parse(storedVisKlubb) : false;
    setVisklubb(parsedVisKlubb);

    const storedVisStartnummer = localStorage.getItem("visStartnummer");
    const parsedVisStartnummer = storedVisStartnummer
      ? JSON.parse(storedVisStartnummer)
      : false;
    setVisStartnummer(parsedVisStartnummer);
  }, [showDropdown]);

  const [showComponent, setShowComponent] = useState(false);

  const [visKlubb, setVisklubb] = useState(() => {
    const løpereJson = localStorage.getItem("visKlubb");
    return løpereJson ? JSON.parse(løpereJson) : false;
  });

  const [visStartnummer, setVisStartnummer] = useState(() => {
    const løpereJson = localStorage.getItem("visStartnummer");
    return løpereJson ? JSON.parse(løpereJson) : false;
  });

  const [visKlasse, setVisKlasse] = useState(() => {
    const løpereJson = localStorage.getItem("visKlasse");
    return løpereJson ? JSON.parse(løpereJson) : false;
  });

  const [visAntallPasseringer, setVisAntallPasseringer] = useState(() => {
    const løpereJson = localStorage.getItem("visAntallPasseringer");
    return løpereJson ? JSON.parse(løpereJson) : false;
  });

  if (!løpereData) {
    return <p>noe har gått feil</p>; // or some other fallback component
  }

  const handleButtonClick = (index) => {
    setSelectedLøper(index);
    setShowComponent(true);
    setVisTider(true);
  };

  return (
    <div className="button-grid">
      {løpereData.map((løper, index) => (
        <Fragment key={index}>
          <button
            className="button-sekundering"
            onClick={() => handleButtonClick(index)}
          >
            {løper.navn}{" "}
            {visAntallPasseringer && (
              <>
                <hr />
                {"Passeringer "} {løper.antallPasseringer}
              </>
            )}
            {visStartnummer && (
              <>
                <hr />
                {"Startnummer: "} {løper.startNummer}
              </>
            )}
            {visKlasse && (
              <>
                <hr /> {"Klasse: "} {løper.klasse}
              </>
            )}
            {visKlubb && (
              <>
                <hr />
                {"Klubb: "} {løper.klubb}
              </>
            )}
          </button>
        </Fragment>
      ))}
      {showComponent && (
        <LøperPasserer
          index={selectedLøper}
          løpereData={løpereData}
          setLøpereData={setLøpereData}
          setShowComponent={setShowComponent}
        />
      )}
    </div>
  );
}

export default LøpereButtons;
