import React from "react";

import AlleRenn from "./Sekundering/AlleRennComponents/AlleRenn.jsx";
import Startliste from "./Sekundering/StartlisteComponents/Startliste";
import Sekundering from "./Sekundering/SekunderingComponents/Sekundering.jsx";
import Innstillinger from "./Sekundering/SekunderingComponents/innstillinger/innstillinger.jsx";
import Tabs from "./Sekundering/SekunderingComponents/tabs/Tabs.jsx";
import Resultater from "./Sekundering/SekunderingComponents/resultater/Resultater.jsx";
import Info from "./Hjem/Info.jsx";
import "./alle.css";
import Hjem from "./Hjem/Hjem.jsx";
import ManuellInnlegging from "./Sekundering/ManuellInnlegging/Manuellinnlegging.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="info" element={<Info />} />
        <Route path="/manuell" element={<ManuellInnlegging />} />
        <Route path="/renn" element={<AlleRenn />} />
        <Route path="/renn/startliste/:id" element={<Startliste />} />
        <Route
          path="/sekundering"
          element={
            <div>
              <Tabs />
              <Sekundering />
            </div>
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
