import React from "react";
import { Link } from "react-router-dom";
import "./hjem.css"; // Import the CSS file

function Hjem() {
  return (
    <div>
      <div className="container-link-button">
        <h1 className="header-hjem">SEKUNDERING</h1>
        <p>Hvordan vil du velge utdøvere</p>
        <div>
          <Link to="/renn" className="link-button">
            Finn konkurransen på EQ Timing
          </Link>
        </div>
        <div>
          <Link to="/manuell" className="link-button">
            Legg inn navn og tider manuelt
          </Link>
        </div>
      </div>
      <footer>
        <Link to="/info" className="footer">
          info
        </Link>
      </footer>
    </div>
  );
}

export default Hjem;
