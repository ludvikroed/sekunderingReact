import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { dataForSekunderingslagring } from "./sekunderingComponents/dataForSekunderingslagring";
import { OnStart } from "./sekunderingComponents/OnStart";
import SekunderingResize from "./sekunderingComponents/SekunderingResize";
import Helmet from "react-helmet";
import Tabs from "./tabs/Tabs";

function Sekundering() {
  // skru av så man ikke kan scrolle
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [løpereData, setLøpereData] = useState(() => {
    const løpereJson = sessionStorage.getItem("løpereData");
    return løpereJson ? JSON.parse(løpereJson) : [];
  });

  const location = useLocation();

  useEffect(() => {
    const loadData = async () => {
      const data = location.state;
      const reruns = sessionStorage.getItem("reruns");
      const lagreSekunderingTall = await dataForSekunderingslagring();
      const currentDate = new Date();

      if (reruns) {
        const løpereDataLocalStorage = sessionStorage.getItem("løpereData");
        setLøpereData(JSON.parse(løpereDataLocalStorage));
      } else {
        try {
          let functionData = data[0];
          delete data[1];
          functionData = await OnStart(data);
          if (functionData) {
            setLøpereData(functionData.løpere);
            sessionStorage.setItem(
              "løpereData",
              JSON.stringify(functionData.løpere)
            );
            sessionStorage.setItem(
              "firstLøpereData",
              JSON.stringify(functionData.løpere)
            );
            sessionStorage.setItem("reruns", JSON.stringify(true));
            localStorage.setItem(
              lagreSekunderingTall + "lagretSekundering",
              JSON.stringify({ løpere: functionData.løpere, dato: currentDate })
            );
            sessionStorage.setItem("dataKey", lagreSekunderingTall);
          }
        } catch (error) {
          setLøpereData(data[0]["løpere"]);
          sessionStorage.setItem(
            "løpereData",
            JSON.stringify(data[0]["løpere"])
          );
          sessionStorage.setItem(
            "firstLøpereData",
            JSON.stringify(data[0]["løpere"])
          );
          sessionStorage.setItem("reruns", JSON.stringify(true));
          localStorage.setItem(
            lagreSekunderingTall + "lagretSekundering",
            JSON.stringify({ løpere: data[0]["løpere"], dato: currentDate })
          );
          sessionStorage.setItem("dataKey", lagreSekunderingTall);
        }
      }
      const isSessionStorageEmpty = sessionStorage.length === 0;
      if (isSessionStorageEmpty) {
        setErrorMessage(
          <div>
            Det ser ut til at noe har gått feil med innlasting av tider og navn.{" "}
            <div>
              <Link to="/">Trykk her for å gå til startsiden</Link>
            </div>
            <div>
              <Link to="/renn">
                {" "}
                Trykk her for å velge nye navn fra EQTiming.
              </Link>
            </div>
            <div>
              <Link to="/manuell">
                Trykk her for å legge inn tider og navn manuelt
              </Link>
            </div>
          </div>
        );
      }
    };
    loadData();
  }, [location.state]);
  useEffect(() => {
    const domFunksjon = () => {
      const dataKey = sessionStorage.getItem("dataKey");
      const oldData = JSON.parse(
        localStorage.getItem(dataKey + "lagretSekundering")
      );

      oldData["løpere"] = løpereData;
      localStorage.setItem(
        dataKey + "lagretSekundering",
        JSON.stringify(oldData)
      );
    };
    try {
      domFunksjon();
    } catch {}
  }, [location.state, løpereData]);

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <Helmet>
        <title>Sekundering av utdøvere</title>
        <meta name="description" content="Sekunder løpere" />
        <meta
          name="keywords"
          content="Sekundering, Sekunderings App, Sekunderingsprogram, Sekundering med EQtiming, Manuell sekundering"
        />
        <link rel="canonical" href="https://www.sekundering.no/sekundering" />
      </Helmet>
      <header>
        <Tabs />
      </header>
      <main>
        <div className="sekundering">
          <SekunderingResize
            errorMessage={errorMessage}
            løpereData={løpereData}
            setLøpereData={setLøpereData}
          />
        </div>
      </main>
    </>
  );
}

export default Sekundering;
