import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AlleRenn from "./Sekundering/AlleRennComponents/AlleRenn.jsx";
import Startliste from "./Sekundering/StartlisteComponents/Startliste";
import Sekundering from "./Sekundering/SekunderingComponents/Sekundering.jsx";
import Innstillinger from "./Sekundering/SekunderingComponents/innstillinger/innstillinger.jsx";
import Tabs from "./Sekundering/SekunderingComponents/tabs/Tabs.jsx";
import Resultater from "./Sekundering/SekunderingComponents/resultater/Resultater.jsx";
import Info from "./Hjem/Info.jsx";
import Hjem from "./Hjem/Hjem.jsx";
import ManuellInnlegging from "./Sekundering/ManuellInnlegging/Manuellinnlegging.jsx";
import AlleRitt from "./Sekundering/ritt/AlleRittComponents/AlleRitt.jsx";
import StartlisteRitt from "./Sekundering/ritt/startlisteRitt/startlisteRitt.jsx";
import Redirect from "./Redirect.jsx";

const App = () => {
  return (
    <Router>
      <Redirect />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <h1>404 Not Found</h1>
              <p>Siden du leter etter finnes ikke</p>
            </>
          }
        />
        <Route path="/" element={<Hjem />} />
        <Route path="/info" element={<Info />} />
        <Route path="/manuell" element={<ManuellInnlegging />} />
        <Route path="/renn" element={<AlleRenn />} />
        <Route path="/renn/startliste/:id" element={<Startliste />} />
        <Route path="/ritt" element={<AlleRitt />} />
        <Route path="/ritt/startliste/:rittId" element={<StartlisteRitt />} />
        <Route
          path="/sekundering"
          element={
            <>
              <Tabs />
              <Sekundering />
            </>
          }
        />
        <Route
          path="/sekundering/resultater"
          element={
            <>
              <Tabs />
              <Resultater />
            </>
          }
        />
        <Route
          path="/sekundering/innstillinger"
          element={
            <>
              <Tabs />
              <Innstillinger />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
