import React from "react";

function AngreSekundering({
  index,
  løpereData,
  setLøpereData,
  visTider,
  setVisTider,
  dataForNedtelling,
  setDataForNedtelling,
}) {
  function AngreSekunderingButton() {
    const løpereDatacopy = [...løpereData];
    const antallPasseringer = løpereDatacopy[index]["antallPasseringer"];
    løpereDatacopy[index]["antallPasseringer"] -= 1;
    delete løpereDatacopy[index]["passering" + antallPasseringer];
    delete løpereDatacopy[index]["passering" + (antallPasseringer - 0.5)];
    setLøpereData(løpereDatacopy);
    sessionStorage.setItem("løpereData", JSON.stringify(løpereDatacopy));
    setVisTider(false);

    const dataForNedtellingCopy = { ...dataForNedtelling };
    console.log(dataForNedtellingCopy["flestPasseringer"]);

    const flestPasseringer = dataForNedtellingCopy["flestPasseringer"];
    if (flestPasseringer.includes(index)) {
      const updatedFlestPasseringer = flestPasseringer.filter(
        (value) => value !== index
      );
      dataForNedtellingCopy["flestPasseringer"] = updatedFlestPasseringer;
      console.log("Value removed from the array");
    } else {
      console.log("Value not found in the array");
    }
    console.log(dataForNedtellingCopy["flestPasseringer"]);

    setDataForNedtelling(dataForNedtellingCopy);
  }

  return (
    <div>
      {(visTider && (
        <button className="button-sekundering" onClick={AngreSekunderingButton}>
          Angre denne passeringen
        </button>
      )) || <p>Du fjerna passeringen.</p>}
    </div>
  );
}

export default AngreSekundering;
