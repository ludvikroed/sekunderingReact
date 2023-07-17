import React, { useState } from "react";

const SpesefikData = ({ løpereData }) => {
  const [valgtLøper, setValgtLøper] = useState({});
  const valgtLøperNavn = valgtLøper["navn"];
  const passeringer = [];
  for (let i = 0; i < 10; i += 1) {
    const key = "passering" + i;
    if (key in valgtLøper) {
      passeringer.push(valgtLøper[key]);
    }
  }

  const formatTime = (time) => {
    const roundedTime = Math.round(time);
    const absTime = Math.abs(roundedTime);
    const minutes = Math.floor(absTime / 60);
    const seconds = absTime % 60;

    return `${time < 0 ? "-" : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <ul>
        {løpereData.map((data, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  setValgtLøper(løpereData[index]);
                }}
              >
                {data.navn}
              </button>
            </li>
          );
        })}
      </ul>
      {valgtLøper !== {} && (
        <>
          <h2>Data for {valgtLøperNavn}:</h2>
          <p>Startid: {valgtLøper["startTid"]}</p>
          <p>Antall passeringer: {valgtLøper["antallPasseringer"]}</p>
          <p>Passeringer:</p>
          {passeringer.map((data, index) => {
            return (
              <>
                <p>Passering{index + 1}:</p>
                <p>
                  Tid brukt fra start:{" "}
                  {formatTime(data - valgtLøper["startTidSekunder"])}
                </p>
              </>
            );
          })}
          <p>Tid er i minutter:sekunder</p>
        </>
      )}
    </div>
  );
};

export default SpesefikData;
