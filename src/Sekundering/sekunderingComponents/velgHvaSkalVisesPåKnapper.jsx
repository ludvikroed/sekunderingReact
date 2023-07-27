import React, { useState, useEffect } from "react";

function VelgHvaSkalVisesPåKnapper({ showDropdown, setShowDropdown }) {
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
    setVisKlubb(parsedVisKlubb);

    const storedVisStartnummer = localStorage.getItem("visStartnummer");
    const parsedVisStartnummer = storedVisStartnummer
      ? JSON.parse(storedVisStartnummer)
      : false;
    setVisStartnummer(parsedVisStartnummer);
  }, [showDropdown]);

  const [visAntallPasseringer, setVisAntallPasseringer] = useState(() => {
    const storedVisAntallPasseringer = localStorage.getItem(
      "visAntallPasseringer"
    );
    return storedVisAntallPasseringer
      ? JSON.parse(storedVisAntallPasseringer)
      : false;
  });

  const [visKlasse, setVisKlasse] = useState(() => {
    const storedVisKlasse = localStorage.getItem("visKlasse");
    return storedVisKlasse ? JSON.parse(storedVisKlasse) : false;
  });

  const [visStartnummer, setVisStartnummer] = useState(() => {
    const storedVisStartnummer = localStorage.getItem("visStartnummer");
    return storedVisStartnummer ? JSON.parse(storedVisStartnummer) : false;
  });

  const [visKlubb, setVisKlubb] = useState(() => {
    const storedVisKlubb = localStorage.getItem("visKlubb");
    return storedVisKlubb ? JSON.parse(storedVisKlubb) : false;
  });

  const [visDiffTilLeder, setVisDiffTilLeder] = useState(() => {
    const løpereJson = localStorage.getItem("visDiffTilLeder");
    return løpereJson ? JSON.parse(løpereJson) : false;
  });

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const visAntallPasseringerFunc = (event) => {
    localStorage.setItem(
      "visAntallPasseringer",
      JSON.stringify(event.target.checked)
    );
    setVisAntallPasseringer(event.target.checked);
  };

  const visKlasseFunc = (event) => {
    localStorage.setItem("visKlasse", JSON.stringify(event.target.checked));
    setVisKlasse(event.target.checked);
  };

  const visDiffTilLederFunc = (event) => {
    localStorage.setItem(
      "visDiffTilLeder",
      JSON.stringify(event.target.checked)
    );
    setVisDiffTilLeder(event.target.checked);
  };

  const visStartnummerFunc = (event) => {
    localStorage.setItem(
      "visStartnummer",
      JSON.stringify(event.target.checked)
    );
    setVisStartnummer(event.target.checked);
  };

  const visKlubbFunc = (event) => {
    localStorage.setItem("visKlubb", JSON.stringify(event.target.checked));
    setVisKlubb(event.target.checked);
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
          <div>
            <div className="checkbox-div">
              <label className="container-checkbox">
                <input
                  className="my-checkbox"
                  type="checkbox"
                  checked={visDiffTilLeder}
                  onChange={visDiffTilLederFunc}
                />
                <span className="checkmark"></span>
                Vis tid til leder på neste passering
              </label>
            </div>
            <div className="checkbox-div">
              <label className="container-checkbox">
                <input
                  className="my-checkbox"
                  type="checkbox"
                  checked={visAntallPasseringer}
                  onChange={visAntallPasseringerFunc}
                />
                <span className="checkmark"></span>
                Vis antall passeringer
              </label>
            </div>
            <div className="checkbox-div">
              <label className="container-checkbox">
                <input
                  className="my-checkbox"
                  type="checkbox"
                  checked={visStartnummer}
                  onChange={visStartnummerFunc}
                />
                <span className="checkmark"></span>
                Vis startnummer
              </label>
            </div>
            <div className="checkbox-div">
              <label className="container-checkbox">
                <input
                  className="my-checkbox"
                  type="checkbox"
                  checked={visKlubb}
                  onChange={visKlubbFunc}
                />
                <span className="checkmark"></span>
                Vis klubb
              </label>
            </div>
            <div className="checkbox-div">
              <label className="container-checkbox">
                <input
                  className="my-checkbox"
                  type="checkbox"
                  checked={visKlasse}
                  onChange={visKlasseFunc}
                />
                <span className="checkmark"></span>
                Vis klasse
              </label>
            </div>
          </div>
          Lukk for å utføre endringer
        </div>
      )}
      <hr />
    </div>
  );
}

export default VelgHvaSkalVisesPåKnapper;
