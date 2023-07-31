import React, { useState } from "react";
import Helmet from "react-helmet";
import ImputText from "./components/ImputText";
import StartSekunderingButton from "./components/StartSekunderingButton";
import Logo from "../../Diverse/Logo/logo";

function ManuellInnlegging() {
  const [løperData, setLøperData] = useState([]);
  const [alleFeltFylt, setAlleFeltFylt] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Sekundering.no - Legg inn starttider og løpere
        </title>
        <meta
          name="description"
          content="Oppdag konkurranser på EQtiming, velg utøvere innen ulike idretter, sekunder utøvere, og legg manuelt til navn og tider."
        />
        <meta
          name="keywords"
          content="Sekundering, Sekunderingsverktøy, Sekunderings App, Sekunderingsprogram, Sekundering med EQtiming, Manuell sekundering"
        />
        <link rel="canonical" href="https://www.sekundering.no/manuell" />
      </Helmet>
      <header>
        <Logo />
        <h1 className="manuell-overskrift">
          Manuell innlegging av starttider og løpere
        </h1>
      </header>
      <main>
        <ImputText
          løperData={løperData}
          setLøperData={setLøperData}
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
