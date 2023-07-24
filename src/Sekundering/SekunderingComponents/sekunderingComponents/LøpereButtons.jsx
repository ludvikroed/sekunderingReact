import React, { useState, Fragment, useEffect } from "react";
import { LøperPasserer } from "./LøperPasserer";
import "./Sekundering.css";
import CountdownTimer from "./CountdownTimer";

function LøpereButtons({
  løpereData,
  setLøpereData,
  selectedLøper,
  setSelectedLøper,
  showDropdown,
  setVisTider,
  errorMessage,
  dataForNedtelling,
  setDataForNedtelling,
  setVisPasseringer,
}) {
  const [updateTimer, setUpdateTimer] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

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

    const storedVisDiffTilLeder = localStorage.getItem("visDiffTilLeder");
    const parsedVisDiffTilLeder = storedVisDiffTilLeder
      ? JSON.parse(storedVisDiffTilLeder)
      : false;
    setVisDiffTilLeder(parsedVisDiffTilLeder);
  }, [showDropdown]);

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
    return løpereJson ? JSON.parse(løpereJson) : true;
  });

  const [visDiffTilLeder, setVisDiffTilLeder] = useState(() => {
    const løpereJson = localStorage.getItem("visDiffTilLeder");
    return løpereJson ? JSON.parse(løpereJson) : true;
  });

  if (!løpereData) {
    return <p>noe har gått feil</p>; // or some other fallback component
  }

  const handleButtonClick = (index) => {
    setSelectedLøper(index);
    setShowComponent(true);
    setVisTider(true);
    setUpdateTimer(updateTimer + 1);
    setVisPasseringer(true)
  };

  function timeSinceMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const diffInMs = now.getTime() - midnight.getTime();
    const diffInSec = diffInMs / 1000;
    return diffInSec.toFixed(1);
  }

  return (
    <div className="button-grid">
      {errorMessage}
      {løpereData.map((løper, index) => (
        <Fragment key={index}>
          <button
            className="button-sekundering"
            onClick={() => handleButtonClick(index)}
          >
            {løper.navn}
            {visDiffTilLeder && (
              <>
                <hr />
                Tid til leder på neste passering
                {(() => {
                  try {
                    if (dataForNedtelling["flestPasseringer"].includes(index)) {
                      return <p>Ingen har passert på neste</p>;
                    } else {
                      return (
                        <>
                          <CountdownTimer
                            updateTimer={updateTimer}
                            initialValue={Math.round(
                              timeSinceMidnight() -
                                løper.startTidSekunder -
                                dataForNedtelling["passeringer"][
                                  "passering" + (løper.antallPasseringer + 1)
                                ]
                            )}
                          />
                        </>
                      );
                    }
                  } catch (error) {
                    return <p>ingen har passert</p>;
                  }
                })()}
              </>
            )}
            {visAntallPasseringer && (
              <>
                <hr />
                {"Passeringer: "} {løper.antallPasseringer}
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
                <hr /> {"Klasse: "}
                {løper.klasse}
              </>
            )}
            {visKlubb && (
              <>
                <hr />
                {"Klubb: "}
                {løper.klubb}
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
          dataForNedtelling={dataForNedtelling}
          setDataForNedtelling={setDataForNedtelling}
        />
      )}
    </div>
  );
}
export default LøpereButtons;
