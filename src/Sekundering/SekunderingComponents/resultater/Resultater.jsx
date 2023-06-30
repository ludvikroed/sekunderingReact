import React, { useState } from "react";
import "./Resultater.css";
import Tabs from "../../../Tabs";

const Resultater = () => {
  const storedData = sessionStorage.getItem("løpereData");
  const data = storedData ? JSON.parse(storedData) : [];

  let antallPasseringerList = [];
  let passeringerLøpereList = [];
  for (const i of data) {
    antallPasseringerList.push(i.antallPasseringer);
    const passeringKeys = Object.keys(i).filter((key) =>
      /^passering\d+$/.test(key)
    );

    const passeringValues = passeringKeys.reduce((acc, key) => {
      const match = key.match(/^passering(\d+)$/);
      if (match && Number.isInteger(Number(match[1]))) {
        acc.push(i[key]);
      }
      return acc;
    }, []);

    passeringerLøpereList.push([passeringValues, i]);
  }
  const antallPasseringer = Math.max(...antallPasseringerList);
  const antallLøpere = passeringerLøpereList.length;

  const ferdigLøpereList = {};
  for (let i = 0; i < antallLøpere; i++) {
    const løperData = passeringerLøpereList[i];
    for (let j = 0; j < løperData[0].length; j++) {
      if (!ferdigLøpereList["passering" + (j + 1)]) {
        ferdigLøpereList["passering" + (j + 1)] = [];
      }
      ferdigLøpereList["passering" + (j + 1)].push([
        løperData[0][j],
        løperData[1],
      ]);
    }
  }

  for (let i = 0; i < Object.keys(ferdigLøpereList).length; i++) {
    const passeringKey = "passering" + (i + 1);
    ferdigLøpereList[passeringKey].sort(
      (a, b) => parseFloat(a[0]) - parseFloat(b[0])
    );
  }

  const ferdigLøpereArray = Object.values(ferdigLøpereList);

  const [showKlasse, setShowKlasse] = useState(true);
  const [showKlubb, setShowKlubb] = useState(true);
  const [showStartnummer, setShowStartnummer] = useState(true);

  const toggleKlasse = () => {
    setShowKlasse(!showKlasse);
  };

  const toggleKlubb = () => {
    setShowKlubb(!showKlubb);
  };
  const toggleStartnummer = () => {
    setShowStartnummer(!showStartnummer);
  };

  return (
    <>
    <Tabs/>
      <div className="dark-theme">
        <div className="checkbox-container">
          <div className="checkbox-div">
            <label className="container-checkbox">
              Vis Klasse
              <input
                className="my-checkbox"
                type="checkbox"
                checked={showKlasse}
                onChange={toggleKlasse}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-div">
            <label className="container-checkbox">
              Vis Klubb
              <input
                className="my-checkbox"
                type="checkbox"
                checked={showKlubb}
                onChange={toggleKlubb}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-div">
            <label className="container-checkbox">
              Vis Startnummer
              <input
                className="my-checkbox"
                type="checkbox"
                checked={showStartnummer}
                onChange={toggleStartnummer}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="resultater-container">
          {ferdigLøpereArray.map((passering, index1) => (
            <div key={index1}>
              <h2>Passering {index1 + 1}</h2>
              <div className="tabell">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Navn</th>
                      <th>Tid bak</th>
                      {showStartnummer && <th>Startnummer</th>}
                      {showKlubb && <th>Klubb</th>}
                      {showKlasse && <th>Klasse</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {passering.map((data, index2) => (
                      <tr key={index2}>
                        <td>{index2 + 1}</td>
                        <td>{data[1].navn}</td>
                        <td>{(data[0] - passering[0][0]).toFixed(1)}</td>
                        {showStartnummer && <td>{data[1].startNummer}</td>}
                        {showKlubb && <td>{data[1].klubb}</td>}
                        {showKlasse && <td>{data[1].klasse}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resultater;
