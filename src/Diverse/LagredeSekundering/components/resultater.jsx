import React, { useState } from "react";
import "./Resultater.css";

const Resultater = ({ data }) => {
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
  const editedPasseringerLøpereList = passeringerLøpereList.map(
    (data, index) => {
      const startTid = data[1]["startTidSekunder"];
      const endraTider = data[0].map((data) => {
        const tidSidenMidnatt = parseFloat(data);
        return tidSidenMidnatt - startTid;
      });
      return [endraTider, data[1]];
    }
  );

  const antallLøpere = editedPasseringerLøpereList.length;

  const ferdigLøpereList = {};
  for (let i = 0; i < antallLøpere; i++) {
    const løperData = editedPasseringerLøpereList[i];
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

  const ferdigLøpereArrayfeil = Object.values(ferdigLøpereList);

  const ferdigLøpereArray = ferdigLøpereArrayfeil.map((data, index) => {
    return data;
  });

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
  if (ferdigLøpereArray.length === 0) {
    return (
      <>
        <div>ingen resultater </div>
      </>
    );
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const secondsOneDecimal = remainingSeconds.toFixed(1);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(secondsOneDecimal).padStart(2, "0");
    if (seconds < 61) {
      return formattedSeconds;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  }

  return (
    <>
      <div>
        <section>
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
          </div>
        </section>
        <section>
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
                        {showStartnummer && <th>st.nr</th>}
                        {showKlubb && <th>Klubb</th>}
                        {showKlasse && <th>Klasse</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {passering.map((data, index2) => (
                        <tr key={index2}>
                          <td>{index2 + 1}</td>
                          <td>{data[1].navn}</td>
                          <td>{formatTime(data[0] - passering[0][0])}</td>
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
        </section>
      </div>
    </>
  );
};

export default Resultater;
