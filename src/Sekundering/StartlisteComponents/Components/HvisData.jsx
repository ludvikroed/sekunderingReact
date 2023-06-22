import React, { useState } from "react";

const HvisData = ({
  hvisStarttider,
  setHvisStarttider,
  hvisStartnummer,
  setHvisStartnummer,
  hvisKlasse,
  setHvisKlasse,
  hvisKlubb,
  setHvisKlubb,
}) => {
  return (
    <div>
      <h3>Velg hva som vises på knapper</h3>
      <div className="dropdown-content">
        <hr />
        <label className="container-names">
          <input
            checked={hvisStartnummer}
            type="checkbox"
            name="Hvis-startnummer"
            value="Hvis-startnummer"
            onChange={(e) => setHvisStartnummer(e.target.checked)}
          />
          Vis startnummer
          <span className="checkmark-names"></span>
        </label>
        <hr />
        <label className="container-names">
          <input
            checked={hvisKlasse}
            type="checkbox"
            name="Hvis-klasser"
            value="Hvis-klasser"
            onChange={(e) => setHvisKlasse(e.target.checked)}
          />
          Vis klasser
          <span className="checkmark-names"></span>
        </label>
        <hr />
        <label className="container-names">
          <input
            checked={hvisKlubb}
            type="checkbox"
            name="Hvis-klubb"
            value="Hvis-klubb"
            onChange={(e) => setHvisKlubb(e.target.checked)}
          />
          Vis klubb
          <span className="checkmark-names"></span>
        </label>
        <hr />
        <label className="container-names">
          <input
            checked={hvisStarttider}
            type="checkbox"
            name="Hvis-starttider"
            value="Hvis-starttider"
            onChange={(e) => setHvisStarttider(e.target.checked)}
          />
          Vis starttider
          <span className="checkmark-names"></span>
        </label>
        <hr />
      </div>
    </div>
  );
};

export default HvisData;
