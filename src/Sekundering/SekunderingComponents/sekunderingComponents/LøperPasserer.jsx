import { useEffect, useState } from "react";
export function LøperPasserer({
  index,
  løpereData,
  setLøpereData,
  setShowComponent,
  dataForNedtelling,
  setDataForNedtelling,
}) {
  function timeSinceMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const diffInMs = now.getTime() - midnight.getTime();
    const diffInSec = diffInMs / 1000;
    return diffInSec.toFixed(1);
  }
  const time = timeSinceMidnight();

  useEffect(() => {
    // sekunderinge er under:
    const updatedLøpereData = [...løpereData];
    updatedLøpereData[index]["antallPasseringer"] += 0.5;
    const antallPasseringer = updatedLøpereData[index]["antallPasseringer"];
    updatedLøpereData[index]["passering" + antallPasseringer] = time;
    setLøpereData(updatedLøpereData);
    sessionStorage.setItem("løpereData", JSON.stringify(updatedLøpereData));
    setShowComponent(false);

    // greia for å telle ned på knapper er under:
    let maxPasseringer = -Infinity;
    let maxIndices = [];

    for (let i = 0; i < løpereData.length; i += 1) {
      if (løpereData[i].antallPasseringer > maxPasseringer) {
        maxPasseringer = løpereData[i].antallPasseringer;
        maxIndices = [i];
      } else if (løpereData[i].antallPasseringer === maxPasseringer) {
        maxIndices.push(i);
      }
    }
    const copyDataForNedtelling = { ...dataForNedtelling };
    const flestPasseringer = [];
    maxIndices.forEach((index) => {
      flestPasseringer.push(index);
    });
    copyDataForNedtelling.flestPasseringer = flestPasseringer;
    const passering = time - updatedLøpereData[index]["startTidSekunder"];

    if (copyDataForNedtelling["passeringer"] === undefined) {
      copyDataForNedtelling["passeringer"] = {};
      copyDataForNedtelling["passeringer"]["passering" + antallPasseringer] =
        passering;
    } else {
      if (
        copyDataForNedtelling["passeringer"][
          "passering" + antallPasseringer
        ] === undefined
      ) {
        copyDataForNedtelling["passeringer"]["passering" + antallPasseringer] =
          passering;
      } else {
        const initialValue =
          copyDataForNedtelling["passeringer"]["passering" + antallPasseringer];
        if (initialValue > passering){
          copyDataForNedtelling["passeringer"]["passering" + antallPasseringer] = passering
        }
      }
    }
    setDataForNedtelling(copyDataForNedtelling);
    //hvem som har passert mest og er føsrts i løypa.
    //hvem som ikke kan telle ned fordi det er ingen som har passert på neste
  }, []);

  // return something else here since this component is not being rendered anymore
  return null;
}
