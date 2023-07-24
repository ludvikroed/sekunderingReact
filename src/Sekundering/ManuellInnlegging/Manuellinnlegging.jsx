import React, { useState } from "react";
import ImputText from "./components/ImputText";
import StartSekunderingButton from "./components/StartSekunderingButton";
import { useNavigate } from "react-router-dom";

function ManuellInnlegging() {
  const [løperData, setLøperData] = useState([]);
  const [alleFeltFylt, setAlleFeltFylt] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Manuell innlegging av starttider og løpere</h1>
      </header>
      <main>
        <button className="home-button" onClick={() => navigate("/")}>
          Hjem
        </button>
        <ImputText
          løperData={løperData}
          setLøperData={setLøperData}
          alleFeltFylt={alleFeltFylt}
          setAlleFeltFylt={setAlleFeltFylt}
        />
        <StartSekunderingButton
          løperData={løperData}
          alleFeltFylt={alleFeltFylt}
        />
      </main>
    </>
  );
}
export default ManuellInnlegging;
