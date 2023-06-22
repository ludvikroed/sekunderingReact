import React from "react";
import "./Sekundering.css";
import AngreSekundering from "./AngreSekundering";

function RenderTider({
  index,
  løpereData,
  setLøpereData,
  visTider,
  setVisTider,
}) {

  if (index == null) {
    return (
      <div>
        Trykk på knappene når en løper passerer. Hvis du lurer på hvordan
        programmet funger, bla opp og trykk på innstillger.
      </div>
    );
  } else if (!visTider) {
    return <p>Passeringen ble fjerna</p>;
  }

  const løperKlick = løpereData[index];
  const løperKlickIndex = index;
  const antallPasseringerForLøper = løperKlick["antallPasseringer"];

  const løperKlickPassering =
    løperKlick["passering" + antallPasseringerForLøper];
  const løperKlickStartTidSek = løperKlick["startTidSekunder"];

  const antallPasseringerListe = løpereData.map((runner, index) => {
    if (antallPasseringerForLøper <= runner["antallPasseringer"]) {
      return index;
    }
    return null;
  });
  const antallPasseringerListeWithoutNull = antallPasseringerListe.filter(
    (value) => value !== null
  );
  const antallLøpereMedSammePasseringer =
    antallPasseringerListeWithoutNull.length;

  if (antallLøpereMedSammePasseringer === 1) {
    return (
      <div style={{ paddingBottom: "40px" }}>
        {løpereData[løperKlickIndex]["navn"]} har passert. Du vil få opp tider
        når flere løpere passerer.
        <AngreSekundering
          index={index}
          løpereData={løpereData}
          setLøpereData={setLøpereData}
          setVisTider={setVisTider}
          visTider={visTider}
        />
      </div>
    );
  }

  if (antallLøpereMedSammePasseringer > 1) {
    const forskjellForLøperKnapp = løperKlickPassering - løperKlickStartTidSek;
    const svar = løpereData.map((runner, index) => {
      if (
        antallPasseringerListeWithoutNull.includes(index) &&
        runner["navn"] !== løperKlick["navn"]
      ) {
        const forskjellForAndre =
          runner["passering" + antallPasseringerForLøper] -
          runner["startTidSekunder"];
        const forskjellPåLøpere = forskjellForAndre - forskjellForLøperKnapp;

        const sekunder = " sekunder ";
        let bakEllerForan;
        if (forskjellPåLøpere > 0) {
          bakEllerForan = "foran ";
        } else if (forskjellPåLøpere < 0) {
          bakEllerForan = "bak ";
        } else {
          bakEllerForan = "foran ";
        }
        const forskjellPåLøpereAbs = Math.abs(forskjellPåLøpere);
        const forskjellPåLøpereAbsEn = forskjellPåLøpereAbs.toFixed(1);
        return (
          <p key={index}>
            {forskjellPåLøpereAbsEn}
            {sekunder}
            {bakEllerForan}
            {runner["navn"]}
          </p>
        );
      }
    });

    return (
      <div>
        <div className="header">
          <h2>{løpereData[index]["navn"]} er</h2>
        </div>
        <div>{svar}</div>
        <AngreSekundering
          index={index}
          løpereData={løpereData}
          setLøpereData={setLøpereData}
          setVisTider={setVisTider}
          visTider={visTider}
        />
      </div>
    );
  }
  return løpereData[index]["antallPasseringer"];
}

export default RenderTider;