import React, { useEffect, useState } from "react";
import Logo from "../Logo/logo";
import Helmet from "react-helmet";
import { getLagretData } from "./getLagretData";
import { useNavigate } from "react-router-dom";
import "./lager.css";
import { Link } from "react-router-dom";

const Lager = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const lagretData = getLagretData();
    setData(lagretData);
  }, []);

  const startSekundering = (item) => {
    sessionStorage.clear();
    const løpereData = item["løpere"];
    const finalData = [
      { antallLøperer: løpereData.length, løpere: løpereData },
      "manuell",
    ];
    navigate("/sekundering/", {
      state: finalData,
    });
  };

 const slettSekundering = (key) => {
   localStorage.removeItem(key);
   setData((prevData) => prevData.filter((item) => item["key"] !== key));
 };

  return (
    <>
      <Helmet>
        <title>
          Sekundering.no - Finn tidligere sekunderinger
        </title>
        <meta
          name="description"
          content="Oppdag konkurranser på EQtiming, velg utøvere innen ulike idretter, sekunder utøvere, og legg manuelt til navn og tider."
        />
        <meta
          name="keywords"
          content="Sekundering, Sekunderingsverktøy, Sekunderings App, Sekunderingsprogram, Sekundering med EQtiming, Manuell sekundering"
        />
        <link rel="canonical" href="https://www.sekundering.no/lager" />
      </Helmet>

      <header className="lager-header">
        <Logo />
        <h1 className="lager-title">Lagrede sekunderinger</h1>
        <h2 className="lager-subtitle">
          Lagrede sekunderinger er spesefikt til enhet og nettleser.
        </h2>
      </header>

      <main className="lager-main">
        <p className="lager-description">
          Når du starter en sekundering med startliste fra EQ Timing eller
          manuelt vil denne automatsik bli lagret her.
        </p>
        {data.length === 0 ? (
          <div>
            <p>Nettsiden finner ingen lagrede sekunderinger</p>
            <p>Velg utdøvere du vil sekundere her:</p>
            <div className="container-link-button">
              <h2>
                <Link to="/renn" className="link-button">
                  Finn konkurransen på EQ Timing
                </Link>
              </h2>
              <h2>
                <Link to="/manuell" className="link-button">
                  Legg inn navn og tider manuelt
                </Link>
              </h2>
            </div>
          </div>
        ) : (
          data.map((item, index) => (
            <div key={index} className="lagret-sekundering-div">
              <button
                onClick={() => {
                  slettSekundering(item["key"]);
                }}
                className="slett-button"
              >
                Slett sekunderingen
              </button>
              <h2 className="sekundering-number">Sekundering {index + 1}:</h2>
              <p className="dato-lagd">
                Dato lagd: {item["dato"].split("T")[0]}
              </p>
              <p className="lopere-text">Løpere:</p>
              <div className="lopere-list">
                {item["løpere"].map((data, index) => (
                  <div key={index} className="loper-name">
                    {data["navn"]}
                  </div>
                ))}
              </div>
              <button
                onClick={() => startSekundering(item)}
                className="lager-button"
              >
                Start sekundering
              </button>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Lager;
