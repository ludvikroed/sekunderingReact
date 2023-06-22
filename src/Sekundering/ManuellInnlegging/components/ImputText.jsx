import React, { useState, useEffect } from "react";
import "./manuellinnlegging.css";
function InputText({ løperData, setLøperData, forFåLøpere, setForFåLøpere }) {
  const [antallLøpere, setAntallLøpere] = useState(2);
  const [startnummer, setStartnummer] = useState(false);
  const [klasse, setKlasse] = useState(false);
  const [klubb, setKlubb] = useState(false);
  // Update løperData when antallLøpere changes
  useEffect(() => {
    setLøperData(
      Array(antallLøpere).fill({
        navn: "",
        starttid: "",
        startnummer: "",
        klasse: "",
        klubb: "",
      })
    );
  }, [antallLøpere]);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  useEffect(() => {
    // Check if all the fields are filled out whenever løperData, antallLøpere, startnummer, klasse, or klubb changes
    const isAllFieldsFilled = løperData.every(
      (løper) =>
        løper.navn &&
        løper.starttid &&
        (!startnummer || løper.startnummer) &&
        (!klasse || løper.klasse) &&
        (!klubb || løper.klubb)
    );
    setAllFieldsFilled(isAllFieldsFilled);
  }, [løperData, antallLøpere, startnummer, klasse, klubb]);

  const handleLøperInputChange = (index, field, value) => {
    const updatedLøperData = [...løperData];
    updatedLøperData[index] = {
      ...updatedLøperData[index],
      [field]: value,
    };
    setLøperData(updatedLøperData);
  };

  const renderLøperFields = () => {
    const løperFields = [];
    for (let i = 0; i < antallLøpere; i++) {
      løperFields.push(
        <div key={i}>
          <p>Navn løper {i + 1}</p>
          <input
            style={{ width: "96%" }}
            type="text"
            placeholder="Navn"
            onChange={(e) => handleLøperInputChange(i, "navn", e.target.value)}
          />
          <p>Starttid løper {i + 1}</p>
          <input
            style={{ width: "96%" }}
            type="text"
            pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
            placeholder="tt:mm:ss"
            onChange={(e) =>
              handleLøperInputChange(i, "starttid", e.target.value)
            }
          />
          {startnummer && (
            <>
              <p>Startnummer løper {i + 1}</p>
              <input
                style={{ width: "96%" }}
                type="text"
                placeholder="Startnummer"
                onChange={(e) =>
                  handleLøperInputChange(i, "startnummer", e.target.value)
                }
              />
            </>
          )}
          {klasse && (
            <>
              <p>Klasse løper {i + 1}</p>
              <input
                style={{ width: "96%" }}
                type="text"
                placeholder="Klasse"
                onChange={(e) =>
                  handleLøperInputChange(i, "klasse", e.target.value)
                }
              />
            </>
          )}
          {klubb && (
            <>
              <p>Klubb løper {i + 1}</p>
              <input
                style={{ width: "96%" }}
                type="text"
                placeholder="Klubb"
                onChange={(e) =>
                  handleLøperInputChange(i, "klubb", e.target.value)
                }
              />
            </>
          )}
        </div>
      );
    }
    return løperFields;
  };

  return (
    <div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={startnummer}
            onChange={() => setStartnummer(!startnummer)}
          />
          <span className="checkmark"></span>
          Startnummer
        </label>
      </div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={klasse}
            onChange={() => setKlasse(!klasse)}
          />
          <span className="checkmark"></span>
          Klasse
        </label>
      </div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={klubb}
            onChange={() => setKlubb(!klubb)}
          />
          <span className="checkmark"></span>
          Klubb
        </label>
      </div>

      {renderLøperFields()}

      <p>
        {allFieldsFilled
          ? ""
          : "Du må fylle alle feltene for å starte å sekundere"}
      </p>
      <div>
        <button
          className="legg-eller-fjern-løper-button"
          onClick={() => {
            if (forFåLøpere) {
              setForFåLøpere(false);
            }
            setAntallLøpere(antallLøpere + 1);
          }}
        >
          Legg til flere løpere
        </button>
        <button
          className="legg-eller-fjern-løper-button"
          onClick={() => {
            setAntallLøpere(antallLøpere - 1);
            if (antallLøpere === 2) {
              setForFåLøpere(true);
              setAntallLøpere(2);
            }
          }}
        >
          Fjern løpere
        </button>
        <p>Antall løpere: {antallLøpere}</p>
      </div>
      <div className="padding-bottom"></div>
    </div>
  );
}

export default InputText;
