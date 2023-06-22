import React from "react";

function AngreSekundering({
  index,
  løpereData,
  setLøpereData,
  visTider,
  setVisTider,
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
  }
  return (
    <div>
      {(visTider && (
        <button className="button-sekundering" onClick={AngreSekunderingButton}>
          Angre passeringen
        </button>
      )) || <p>Du fjerna passeringen.</p>}
    </div>
  );
}

export default AngreSekundering;