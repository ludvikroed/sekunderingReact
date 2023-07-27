import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ManuellInnlegging from "./ValgAvKonkuranseLøpere/ManuellInnlegging/Manuellinnlegging.jsx";
import StartlisteRitt from "./ValgAvKonkuranseLøpere/RittResultater/ritt/startlisteRitt/startlisteRitt.jsx";
import Innstillinger from "./Sekundering/innstillinger/innstillinger.jsx";
import Sekundering from "./Sekundering/Sekundering.jsx";
import Startliste from "./ValgAvKonkuranseLøpere/EqTiming/StartlisteComponents/Startliste";
import Resultater from "./Sekundering/resultater/Resultater.jsx"
import AlleRitt from "./ValgAvKonkuranseLøpere/RittResultater/ritt/AlleRittComponents/AlleRitt.jsx";
import AlleRenn from "./ValgAvKonkuranseLøpere/EqTiming/AlleRennComponents/AlleRenn.jsx";
import Redirect from "./Diverse/Redirect.jsx";
import Logo from "./Diverse/logo.jsx";
import Hjem from "./Hjem/Hjem.jsx";



const App = () => {
  return (
    <Router>
      <Redirect />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Logo />
              <h1>404 Not Found</h1>
              <p>
                Siden du leter etter finnes ikke ellers har det skjedd en feil
              </p>
            </>
          }
        />
        <Route path="/" element={<Hjem />} />
        <Route path="/manuell" element={<ManuellInnlegging />} />
        <Route path="/renn" element={<AlleRenn />} />
        <Route path="/renn/startliste/:id" element={<Startliste />} />
        <Route path="/ritt" element={<AlleRitt />} />
        <Route path="/ritt/startliste/:rittId" element={<StartlisteRitt />} />
        <Route path="/sekundering" element={<Sekundering />} />
        <Route path="/sekundering/resultater" element={<Resultater />} />
        <Route path="/sekundering/innstillinger" element={<Innstillinger />} />
      </Routes>
    </Router>
  );
};

export default App;
