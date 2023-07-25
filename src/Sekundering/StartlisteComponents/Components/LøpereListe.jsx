import React from "react";
import "./checbox.css";

function LøpereListe({
  groupedData,
  selectedKlasse,
  checkedLøpere,
  setCheckedLøpere,
  hvisStarttider,
  hvisStartnummer,
  hvisKlasse,
  hvisKlubb,
  searchQuery,
}) {

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedLøpere({ ...checkedLøpere, [name]: true });
    } else {
      const { [name]: value, ...rest } = checkedLøpere;
      setCheckedLøpere(rest);
    }
  };

  const filteredLøpere =
    selectedKlasse !== "Alle"
      ? groupedData[selectedKlasse].filter((data) =>
          `${data["@fornavn"]} ${data["@etternavn"]}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : Object.keys(groupedData)
          .flatMap((klasse) => groupedData[klasse])
          .filter((data) =>
            `${data["@fornavn"]} ${data["@etternavn"]}`
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );

  return (
    <div>
      <p>Viser klasse: {selectedKlasse}</p>
      {filteredLøpere.map((data, index) => (
        <div className="løper" key={index}>
          <label className="container-names">
            <input
              type="checkbox"
              name={`${data["@fornavn"]} ${data["@etternavn"]}, ${data["@startno"]}, ${data["@starttid"]}, ${data["@team"]}, ${data["@klasse"]}`}
              checked={
                checkedLøpere[
                  `${data["@fornavn"]} ${data["@etternavn"]}, ${data["@startno"]}, ${data["@starttid"]}, ${data["@team"]}, ${data["@klasse"]}`
                ] || false
              }
              onChange={handleCheckboxChange}
            />
            {`${data["@fornavn"]} ${data["@etternavn"]}`}
            <span className="checkmark-names"></span>
          </label>
          {hvisStarttider && <p>Starttid: {data["@starttid"]}</p>}
          {hvisStartnummer && <p>Startnummer: {data["@startno"]}</p>}
          {hvisKlubb && <p>Klubb: {data["@team"]}</p>}
          {hvisKlasse && <p>Klasse: {data["@klasse"]}</p>}
        </div>
      ))}
    </div>
  );
}

export default LøpereListe;
