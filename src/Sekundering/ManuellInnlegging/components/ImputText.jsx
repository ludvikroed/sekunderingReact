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

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth - 48);

  useEffect(() => {
    // Function to update the viewport width when the window is resized
    const handleResize = () => {
      setViewportWidth(window.innerWidth - 48);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [riktigFormatTid, setRiktigFormatTid] = useState({});

  const riktigFormat = (klokkeslett, index) => {
    const data = { ...riktigFormatTid };

    const lengde = klokkeslett.length;
    const sisteTegn = klokkeslett[lengde - 1];

    let riktigFormat = true;
    

    if (lengde >= 1) {
      const tegn = klokkeslett[0];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 1");
        riktigFormat = false;
      }
    }
    if (lengde >= 2) {
      const tegn = klokkeslett[1];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 2");
        riktigFormat = false;
      }
    }
    if (lengde >= 3) {
      const tegn = klokkeslett[2];
      console.log(tegn, "here");

      if (!tegn === ":") {
        console.log("feil 3");
        riktigFormat = false;
      }
    }
    if (lengde >= 4) {
      const tegn = klokkeslett[3];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 4");
        riktigFormat = false;
      }
    }
    if (lengde >= 5) {
      const tegn = klokkeslett[4];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 5");
        riktigFormat = false;
      }
    }
    if (lengde >= 6) {
      const tegn = klokkeslett[5];
      const parsed = parseInt(tegn);

      if (!tegn === ":") {
        console.log("feil 6");
        riktigFormat = false;
      }
    }
    if (lengde >= 7) {
      const tegn = klokkeslett[6];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 7");
        riktigFormat = false;
      }
    }
    if (lengde === 8) {
      const tegn = klokkeslett[7];
      const parsed = parseInt(tegn);

      if (!parsed) {
        console.log("feil 8");
        riktigFormat = false;
      }
    }
    if (lengde > 8) {
      riktigFormat = false;
    }

    console.log(riktigFormat);
  };

  const renderLøperFields = () => {
    const løperFields = [];
    for (let i = 0; i < antallLøpere; i++) {
      løperFields.push(
        <div className="enkelt-løper" key={i}>
          <h2 className="løper-nummer">Løper {i + 1}:</h2>
          <p>Navn:</p>
          <input
            style={{ width: viewportWidth }}
            type="text"
            placeholder="Navn"
            onChange={(e) => handleLøperInputChange(i, "navn", e.target.value)}
          />
          <p>Starttid:</p>
          <input
            style={{ width: viewportWidth }}
            type="text"
            placeholder="tt:mm:ss"
            onChange={(e) => {
              handleLøperInputChange(i, "starttid", e.target.value);
              riktigFormat(e.target.value, i);
            }}
          />
          <div>{}</div>

          {startnummer && (
            <>
              <p>Startnummer:</p>
              <input
                style={{ width: viewportWidth }}
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
              <p>Klasse:</p>
              <input
                style={{ width: viewportWidth }}
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
              <p>Klubb:</p>
              <input
                style={{ width: viewportWidth }}
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
