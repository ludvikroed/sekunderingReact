import DateSelecter from "./Components/DateSelcter";
import React, { useState, useEffect } from "react";
import SportSelecter from "./Components/SportSelecter";
import RenderRenn from "./Components/renderRenn";
import { CallApiAndSort } from "./Components/CallApiAndSort";
import Loading from "./Components/Loading";

import Søk from "./Components/Søk";
import "./lastNyeRenn.css";
import "./spinner.css";
import "./søk.css";

const AlleRenn = () => {
  const [dag, setDag] = useState(new Date());
  const [sport, setSport] = useState("Alle");
  const [renn, setRenn] = useState([]);
  const [lastNyeRenn, setLastNyeRenn] = useState(0);
  const [søk, setSøk] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedSøk, setIsCheckedSøk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      });
  }, [lastNyeRenn]);

  return (
    <>
      <div className="alle-søke-oppsjoner">
        <SportSelecter sport={sport} setSport={setSport} />
        <hr />
        <div className="søke-opsjoner">
          <div>
            <label className="container-checkbox">
              <input
                className="my-checkbox"
                type="checkbox"
                checked={isCheckedSøk}
                onChange={handleChangeSøk}
              />
              <span className="checkmark"></span>
              Hvis søke opsjoner
            </label>
            {isCheckedSøk && (
              <div>
                <DateSelecter
                  setDag={setDag}
                  dag={setDag}
                  setIsChecked={setIsChecked}
                  isChecked={isChecked}
                />
                <Søk setSøk={setSøk} />
              </div>
            )}

            <button className="last-nye-renn-button" onClick={lastNyeRennFunc}>
              Last inn nye renn
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="alle-renn-scroller">
          <RenderRenn renn={renn} />
        </div>
      )}
    </>
  );
};

export default AlleRenn;


