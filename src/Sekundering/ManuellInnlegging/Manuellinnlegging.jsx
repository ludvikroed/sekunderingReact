import React, { useState } from "react";
import ImputText from "./components/ImputText";
import StartSekunderingButton from "./components/StartSekunderingButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../Hjem/logo";

function ManuellInnlegging() {
  const [løperData, setLøperData] = useState([]);
  const [alleFeltFylt, setAlleFeltFylt] = useState(false);

  return (
    <>
      <header>
        <Logo/>
        <h1 className="manuell-overskrift">Manuell innlegging av starttider og løpere</h1>
      </header>
      <main>
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
