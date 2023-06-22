import React from "react";
import { Link } from "react-router-dom";

import "./footer.css"
const Info = () => {
  return (
    <div>
      <Link to="/" className="footer">
        hjem
      </Link>
      <h1>Info</h1>
      <p>Denne nettsiden er lagd av Ludvik Blichfeldt Rød</p>
      <p>
        Hvis du har noen problemer eller noen tilbakemeldinger. send melding på
        Messenger til Ludvik Blichfeldt Rød
      </p>
    </div>
  );
};

export default Info;
