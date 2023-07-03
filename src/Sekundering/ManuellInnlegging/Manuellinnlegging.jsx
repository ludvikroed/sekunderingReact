import React, { useState } from "react";

import ImputText from "./components/ImputText";
import Innstruksjoner from "./components/Innstruksjoner";
import StartSekunderingButton from "./components/StartSekunderingButton";

function ManuellInnlegging() {
  const [løperData, setLøperData] = useState([]);
  const [forFåLøpere, setForFåLøpere] = useState(false);

  return (
    <>
      <header>
        <h1>Manuell innlegging av tider og løpere</h1>
      </header>
      <main>
        <Innstruksjoner />
        <ImputText
          løperData={løperData}
          setLøperData={setLøperData}
          forFåLøpere={forFåLøpere}
          setForFåLøpere={setForFåLøpere}
        />
        <StartSekunderingButton
          løperData={løperData}
          forFåLøpere={forFåLøpere}
        />
      </main>
    </>
  );
}
export default ManuellInnlegging;
