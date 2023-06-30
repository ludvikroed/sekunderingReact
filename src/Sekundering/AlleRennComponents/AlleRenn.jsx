import DateSelecter from "./Components/DateSelcter";
import React, { useState, useEffect } from "react";
import SportSelecter from "./Components/SportSelecter";
import RenderRenn from "./Components/renderRenn";
import { CallApiAndSort } from "./Components/CallApiAndSort";
import Loading from "./Components/Loading";
import Helmet from "react-helmet";

import Søk from "./Components/Søk";
import "./spinner.css";
import "./søk.css";
import "./søke-knapper.css";

const AlleRenn = () => {
  const [dag, setDag] = useState(new Date());
  const [sport, setSport] = useState("Alle");
  const [renn, setRenn] = useState([]);
  const [lastNyeRenn, setLastNyeRenn] = useState(0);
  const [søk, setSøk] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedSøk, setIsCheckedSøk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(false);

  function handleChangeSøk() {
    setIsCheckedSøk(!isCheckedSøk);
  }

  const lastNyeRennFunc = () => {
    let ny = lastNyeRenn + 1;
    setLastNyeRenn(ny);
  };

  useEffect(() => {
    setIsLoading(true);
    CallApiAndSort(dag, sport, søk, isChecked)
      .then((response) => {
        setRenn(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        serError(true);
      });
  }, [lastNyeRenn]);
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>feil med lasting av konkurannser</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>konkurranser EQtiming</title>
        <meta name="description" content="konkurranser fra EQtiming" />
        <meta
          name="keywords"
          content="Sekundering, Sekunderings App, Sekunderingsprogram, Sekundering med EQtiming, Manuell sekundering"
        />
        <link rel="canonical" href="https://www.sekundering.no/renn" />
      </Helmet>
      <header>
        <div className="alle-søke-oppsjoner">
          <SportSelecter sport={sport} setSport={setSport} />
          <hr />
          <div className="søke-knapper">
            <label className="container-checkbox">
              <input
                className="my-checkbox"
                type="checkbox"
                checked={isCheckedSøk}
                onChange={handleChangeSøk}
              />
              <span className="checkmark"></span>
              Vis søkeopsjoner
            </label>
            <button className="last-nye-renn-button" onClick={lastNyeRennFunc}>
              Last konkurannser
            </button>
          </div>
          {isCheckedSøk && (
            <div
              className={`søke-klapper-wrap ${
                isCheckedSøk ? "søke-klapper-wrap-wrap" : ""
              }`}
            >
              <DateSelecter
                setDag={setDag}
                setIsChecked={setIsChecked}
                isChecked={isChecked}
                dag={dag}
              />
              <Søk setSøk={setSøk} />
            </div>
          )}
        </div>
      </header>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="alle-renn-scroller">
            <RenderRenn
              renn={renn}
              dag={dag}
              isCheckedSøk={isCheckedSøk}
              isChecked={isChecked}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default AlleRenn;
