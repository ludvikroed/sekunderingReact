import React, { useState, useEffect } from "react";
import "./radioButtons.css";

function SportSelecter({ sport, setSport }) {

  const [alleColor, setAlleColor] = useState("#808080");
  const [skiskytingColor, setSkiskytingColor] = useState("#DCDCDC");
  const [langrennColor, setLangrennColor] = useState("#DCDCDC");
  const [FriidrettColor, setFriidrettColor] = useState("#DCDCDC");
  const [SykkelColor, setSykkelColor] = useState("#DCDCDC");
  const [multisportColor, setMultisportColor] = useState("#DCDCDC");
  const [OrienteringColor, setOrienteringColor] = useState("#DCDCDC");


  const handleSportChange = (event) => {
    setSport(event.target.value);

    if (event.target.value === "Alle") {
      setAlleColor("#808080");
    } else {
      setAlleColor("#DCDCDC");
    }
    if (event.target.value === "Skiskyting") {
      setSkiskytingColor("#808080");
    } else {
      setSkiskytingColor("#DCDCDC");
    }
    if (event.target.value === "Langrenn") {
      setLangrennColor("#808080");
    } else {
      setLangrennColor("#DCDCDC");
    }
    if (event.target.value === "Friidrett") {
      setFriidrettColor("#808080");
    } else {
      setFriidrettColor("#DCDCDC");
    }
    if (event.target.value === "Sykkel") {
      setSykkelColor("#808080");
    } else {
      setSykkelColor("#DCDCDC");
    }
    if (event.target.value === "Orientering") {
      setOrienteringColor("#808080");
    } else {
      setOrienteringColor("#DCDCDC");
    }
    if (event.target.value === "Multisport") {
      setMultisportColor("#808080");
    } else {
      setMultisportColor("#DCDCDC");
    }
  };

    return (
      
    <div className="radio-container" style={{ overflowX: "scroll" }}>
      <div className="first-row">
        <label
          className="label-alle-renn"
          style={{ backgroundColor: alleColor, width: 30 }}
        >
          <input
            type="radio"
            value="Alle"
            checked={sport === "Alle"}
            onChange={handleSportChange}
          />
          Alle
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: langrennColor, width: 64 }}
        >
          <input
            type="radio"
            value="Langrenn"
            checked={sport === "Langrenn"}
            onChange={handleSportChange}
          />
          Langrenn
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: skiskytingColor, width: 73 }}
        >
          <input
            type="radio"
            value="Skiskyting"
            checked={sport === "Skiskyting"}
            onChange={handleSportChange}
          />
          Skiskyting
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: SykkelColor, width: 47 }}
        >
          <input
            type="radio"
            value="Sykkel"
            checked={sport === "Sykkel"}
            onChange={handleSportChange}
          />
          Sykkel
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: FriidrettColor, width: 60 }}
        >
          <input
            type="radio"
            value="Friidrett"
            checked={sport === "Friidrett"}
            onChange={handleSportChange}
          />
          Friidrett
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: multisportColor, width: 73 }}
        >
          <input
            type="radio"
            value="Multisport"
            checked={sport === "Multisport"}
            onChange={handleSportChange}
          />
          Multisport
        </label>
        <label
          className="label-alle-renn"
          style={{ backgroundColor: OrienteringColor, width: 79 }}
        >
          <input
            type="radio"
            value="Orientering"
            checked={sport === "Orientering"}
            onChange={handleSportChange}
          />
          Orientering
        </label>
      </div>
    </div>
  );
}

export default SportSelecter;
