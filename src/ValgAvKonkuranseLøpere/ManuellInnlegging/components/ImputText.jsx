import React, { useState, useEffect } from "react";
import "./manuellinnlegging.css";
import TimeInputWithSeconds from "./timeInput";

function InputText({ løperData, setLøperData, alleFeltFylt, setAlleFeltFylt }) {
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

  const handleLøperInputChange = (index, field, value) => {
    const updatedLøperData = { ...løperData };
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

  useEffect(() => {
    const data = { ...riktigFormatTid };
    for (let i = 0; i < antallLøpere; i++) {
      data[i] = data[i] || { borderColor: false };
    }
    setRiktigFormatTid(data);
  }, [antallLøpere]);

  const [hvilkeFeltFylt, setHvilkeFeltFylt] = useState({});

  useEffect(() => {
    const data = { ...hvilkeFeltFylt };
    for (let i = 0; i < antallLøpere; i++) {
      data[i] = data[i] || {
        navn: false,
        klasse: false,
        klubb: false,
        startnummer: false,
        starttid: false,
      };
    }
    delete data[antallLøpere];
    setHvilkeFeltFylt(data);
  }, [antallLøpere]);

  const erFylt = (felt, index, type) => {
    const data = { ...hvilkeFeltFylt };
    if (felt !== "") {
      data[index][type] = true;
    } else {
      data[index][type] = false;
    }

    setHvilkeFeltFylt(data);
  };

  const erAlleFeltFylt = () => {
    let fylt = true;
    try {
      for (let i = 0; i < antallLøpere; i++) {
        if (!hvilkeFeltFylt[i]["navn"]) {
          fylt = false;
          break; // No need to continue the loop if fylt is already false
        }
      }
    } catch (error) {}
    setAlleFeltFylt(fylt);
  };
  erAlleFeltFylt();

  const renderLøperFields = () => {
    const løperFields = [];
    for (let i = 0; i < antallLøpere; i++) {
      løperFields.push(
        <div className="enkelt-løper" key={i}>
          <h2 className="løper-nummer">Løper {i + 1}:</h2>
          <p>Navn:</p>
          <input
            style={{
              width: viewportWidth,
              borderWidth: "4px",
              borderColor:
                hvilkeFeltFylt[i]?.navn === true ? "green" : "red" || "red",
            }}
            type="text"
            placeholder="Navn"
            onChange={(e) => {
              handleLøperInputChange(i, "navn", e.target.value);
              erFylt(e.target.value, i, "navn");
            }}
          />
          <div className="starttid">
            <TimeInputWithSeconds
              index={i}
              løperData={løperData}
              setLøperData={setLøperData}
            />
          </div>
          <div>{}</div>
          {startnummer && (
            <>
              <p>Startnummer:</p>
              <input
                style={{
                  width: viewportWidth,
                  borderWidth: "4px",
                  borderColor:
                    hvilkeFeltFylt[i]?.startnummer === true
                      ? "green"
                      : "red" || "red",
                }}
                type="text"
                placeholder="Startnummer"
                onChange={(e) => {
                  handleLøperInputChange(i, "startnummer", e.target.value);
                  erFylt(e.target.value, i, "startnummer");
                }}
              />
            </>
          )}
          {klasse && (
            <>
              <p>Klasse:</p>
              <input
                style={{
                  width: viewportWidth,
                  borderWidth: "4px",
                  borderColor:
                    hvilkeFeltFylt[i]?.klasse === true
                      ? "green"
                      : "red" || "red",
                }}
                type="text"
                placeholder="Klasse"
                onChange={(e) => {
                  handleLøperInputChange(i, "klasse", e.target.value);
                  erFylt(e.target.value, i, "klasse");
                }}
              />
            </>
          )}
          {klubb && (
            <>
              <p>Klubb:</p>
              <input
                style={{
                  width: viewportWidth,
                  borderWidth: "4px",
                  borderColor:
                    hvilkeFeltFylt[i]?.klubb === true
                      ? "green"
                      : "red" || "red",
                }}
                type="text"
                placeholder="Klubb"
                onChange={(e) => {
                  handleLøperInputChange(i, "klubb", e.target.value);
                  erFylt(e.target.value, i, "klubb");
                }}
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
      <div className="enkelt-løper">
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
      </div>
      {renderLøperFields()}
      <p>
        Du kan starte å sekundere når alle navn og tider er fylt
      </p>
      <div>
        <button
          className="legg-eller-fjern-løper-button"
          onClick={() => {
            setAntallLøpere(antallLøpere + 1);
          }}
        >
          Legg til løpere
        </button>
        <button
          className="legg-eller-fjern-løper-button"
          onClick={() => {
            setAntallLøpere(antallLøpere - 1);
            if (antallLøpere === 2) {
              setAntallLøpere(2);
            }
          }}
        >
          Fjern løpere
        </button>
      </div>
      <div className="padding-bottom"></div>
    </div>
  );
}

export default InputText;
