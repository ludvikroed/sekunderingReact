import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { OnStart } from "./sekunderingComponents/OnStart";
import SekunderingResize from "./sekunderingComponents/SekunderingResize";

function Sekundering() {
  const [løpereData, setLøpereData] = useState(() => {
    const løpereJson = sessionStorage.getItem("løpereData");
    return løpereJson ? JSON.parse(løpereJson) : [];
  });
  const [dataSant, setDataSant] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    const reruns = sessionStorage.getItem("reruns");

    if (reruns) {
      const løpereDataLocalStorage = sessionStorage.getItem("løpereData");
      setLøpereData(JSON.parse(løpereDataLocalStorage));
    } else {
      let functionData;
      if (data[1] === "Manuell") {
        functionData = data[0];
      } else {
        functionData = OnStart(data);
      }

      try {
        delete data[1];
        functionData = OnStart(data);
      } catch (error) {
        console.error("An error occurred during OnStart:", error);
        setDataSant(false);
      }

      if (functionData === undefined) {
        setDataSant(false);
      } else {
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
      }
    }
  }, [location.state]);

  return (
    <div className="sekundering">
      {dataSant ? (
        <SekunderingResize
          løpereData={løpereData}
          setLøpereData={setLøpereData}
        />
      ) : (
        <>
          <p>Error: Failed to retrieve data.</p>
          <Link to="/">Gå til side for å velge renn</Link>
        </>
      )}
    </div>
  );
}

export default Sekundering;
