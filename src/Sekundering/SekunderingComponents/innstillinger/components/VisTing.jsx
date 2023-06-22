import React, { useState } from "react";

const VisTing = () => {
  const [visAntallPasseringer, setVisAntallPasseringer] = useState(() => {
    const storedVisAntallPasseringer = localStorage.getItem(
      "visAntallPasseringer"
    );
    return storedVisAntallPasseringer
      ? JSON.parse(storedVisAntallPasseringer)
      : false;
  });

  const [visKlasse, setVisKlasse] = useState(() => {
    const storedVisKlasse = localStorage.getItem("visKlasse");
    return storedVisKlasse ? JSON.parse(storedVisKlasse) : false;
  });

  const [visStartnummer, setVisStartnummer] = useState(() => {
    const storedVisStartnummer = localStorage.getItem("visStartnummer");
    return storedVisStartnummer ? JSON.parse(storedVisStartnummer) : false;
  });

  const [visKlubb, setVisKlubb] = useState(() => {
    const storedVisKlubb = localStorage.getItem("visKlubb");
    return storedVisKlubb ? JSON.parse(storedVisKlubb) : false;
  });

  const visAntallPasseringerFunc = (event) => {
    localStorage.setItem(
      "visAntallPasseringer",
      JSON.stringify(event.target.checked)
    );
    setVisAntallPasseringer(event.target.checked);
  };

  const visKlasseFunc = (event) => {
    localStorage.setItem("visKlasse", JSON.stringify(event.target.checked));
    setVisKlasse(event.target.checked);
  };

  const visStartnummerFunc = (event) => {
    localStorage.setItem(
      "visStartnummer",
      JSON.stringify(event.target.checked)
    );
    setVisStartnummer(event.target.checked);
  };

  const visKlubbFunc = (event) => {
    localStorage.setItem("visKlubb", JSON.stringify(event.target.checked));
    setVisKlubb(event.target.checked);
  };

  return (
    <>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={visAntallPasseringer}
            onChange={visAntallPasseringerFunc}
          />
          <span className="checkmark"></span>
          Vis antall passeringer på sekunderingsknapper
        </label>
      </div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={visStartnummer}
            onChange={visStartnummerFunc}
          />
          <span className="checkmark"></span>
          Vis startnummer på sekunderingsknapper
        </label>
      </div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={visKlubb}
            onChange={visKlubbFunc}
          />
          <span className="checkmark"></span>
          Vis klubb på sekunderingsknapper
        </label>
      </div>
      <div className="checkbox-div">
        <label className="container-checkbox">
          <input
            className="my-checkbox"
            type="checkbox"
            checked={visKlasse}
            onChange={visKlasseFunc}
          />
          <span className="checkmark"></span>
          Vis klasse på sekunderingsknapper
        </label>
      </div>
    </>
  );
};

export default VisTing;
