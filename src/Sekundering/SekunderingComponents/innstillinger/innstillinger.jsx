import React, { useEffect, useState } from "react";
import VisTing from "./components/VisTing";
import FjernPasseringer from "./components/FjernPasseringer";
import axios from "axios";

const Innstillinger = () => {
  function resetData() {
    sessionStorage.removeItem("løpereData");
    const firstLøpereData = sessionStorage.getItem("firstLøpereData");
    sessionStorage.setItem("løpereData", firstLøpereData);
  }

  return (
    <div>
      <hr />
      <VisTing />
      <hr />
      <button
        className="button-sekundering"
        onDoubleClick={resetData}
        style={{ maxWidth: "500px" }}
      >
        <h2>Dobbel klikk her for å nullstille Sekundering.</h2>
        <h2>Du vil miste alle passeringer og resultater</h2>
        <h2 style={{ color: "red" }}>!Dette er ikke mulig å gjøre om på!</h2>
      </button>
      <hr />
      <FjernPasseringer />
      <hr />
    </div>
  );
};

export default Innstillinger;
