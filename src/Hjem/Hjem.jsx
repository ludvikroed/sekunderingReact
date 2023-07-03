import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./hjem.css"; // Import the CSS file
import "./footer.css"

function Hjem() {
  return (
    <>
      <Helmet>
        <title>Sekundering - Hvordan vil du velge utdøvere?</title>
        <meta
          name="description"
          content="Oppdag konkurranser på EQtiming, velg utøvere innen ulike idretter, sekunder utøvere, og legg manuelt til navn og tider."
        />
        <meta
          name="keywords"
          content="Sekundering, Sekunderings App, Sekunderingsprogram, Sekundering med EQtiming, Manuell sekundering"
        />
        <link rel="canonical" href="https://www.sekundering.no" />
      </Helmet>
      <header>
        <h1 className="header-hjem">SEKUNDERING</h1>
        <h2>Hvordan vil du velge utøvere</h2>
      </header>
      <main>
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
      </main>
      <footer>
        <p>
          På dette nettstedet kan du sekundere personer som driver med idrett.
          Hvis konkurransen er på EQ Timing kan du finne startlisten her og
          velge hvem du vil sekundere. Du kan også legge inn navn starttider å
          annen informasjon manuelt hvis konkurransen ikke er på EQ Timing
        </p>
        <div className=".footer-email">
          <p>
            Hvis du har noen problemer eller noen tilbakemeldinger kan du sende
            mail til lbroed@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}

export default Hjem;
