import React, { useState } from "react";
import "./FjernPasseringer.css";

function FjernPasseringer() {
  const [fjernPasseringTrue, setFjernPasseringTrue] = useState(false);
  const [visAdvarsel, setVisAdvarsel] = useState(false);
  const [ønsketFjernetPassering, setØnsketFjernetPassering] = useState(null);

  const løpereData = JSON.parse(sessionStorage.getItem("løpereData"));

  function fjernPasseringNow() {
    const copyLøpereData = [...løpereData];
    const originalKeys = Object.keys(
      copyLøpereData[fjernPasseringTrue - 1]
    ).filter(
      (key) => key.startsWith("passering") && /^\d+$/.test(key.slice(9))
    );

    function splitListByG(list) {
      let result = [];
      for (let i = 0; i < list.length; i++) {
        let items = list[i].split("g");
        result = result.concat(parseInt(items[1]));
      }
      return result;
    }
    function deleteNumbers(list, number) {
      const filteredList = list.filter((item) => item > number);
      return filteredList;
    }
    function endreOrgListe(orgListe, tall) {
      const newObject = { ...orgListe };
      let i = 0;
      while (tall.length > i) {
        newObject["passering" + (tall[i] - 1)] =
          newObject["passering" + tall[i]];
        i++;
      }

      return newObject;
    }
    const splitList = splitListByG(originalKeys);
    console.log(splitList);
    const listMedFjernaTall = deleteNumbers(splitList, ønsketFjernetPassering);
    const list = endreOrgListe(
      copyLøpereData[fjernPasseringTrue - 1],
      listMedFjernaTall
    );

    copyLøpereData[fjernPasseringTrue - 1] = list;
    copyLøpereData[fjernPasseringTrue - 1]["antallPasseringer"] -= 1;
    console.log("passering" + splitList[splitList.length - 1]);

    delete copyLøpereData[fjernPasseringTrue - 1][
      "passering" + splitList[splitList.length - 1]
    ];
    delete copyLøpereData[fjernPasseringTrue - 1][
      "passering" + (splitList[splitList.length - 1] - 0.5)
    ];
    console.log(løpereData);
    console.log(copyLøpereData);
    sessionStorage.setItem("løpereData", JSON.stringify(copyLøpereData));
    setFjernPasseringTrue(false);
    setVisAdvarsel(false);
  }

  return (
    <div>
      <h2>Fjern passeringer</h2>
      {fjernPasseringTrue ? (
        visAdvarsel ? (
          <div>
            <h2>Advarsel</h2>
            <h3>
              Du vi fjerne denne passeringen og alle passeringene etter denne
              vil bli flyttet fram ett hakk.
            </h3>
            <button
              className="button-sekundering"
              onClick={() => {
                setFjernPasseringTrue(false);
                setVisAdvarsel(false);
              }}
              style={{ marginBottom: "5px", maxWidth: "300px" }}
            >
              <h2>Angre</h2>
            </button>
            <button
              onClick={() => {
                fjernPasseringNow();
              }}
              className="button-sekundering"
              style={{ maxWidth: "300px" }}
            >
              <h2>Fjern passering</h2>
              <h2 style={{ color: "red" }}>
                !Dette er ikke mulig å gjøre om på!
              </h2>
            </button>
          </div>
        ) : (
          <div>
            <h4>
              Hvis du vil fjerne en passering til{" "}
              {løpereData[fjernPasseringTrue - 1]["navn"]}
              {", "}
              trykk på hvilken her:
            </h4>
            <p>
              Gå til siden med resultater for å se nøyere på passeringene til de
              forskjellige løperene.
            </p>
            {Object.keys(løpereData[fjernPasseringTrue - 1])
              .filter((key) => key.startsWith("passering"))
              .map((key, index) => {
                const splitKey = key.split("g");
                return splitKey[1] % 1 === 0 ? (
                  <div key={index}>
                    <button
                      className="button-passeringer"
                      onClick={() => {
                        setVisAdvarsel(true);
                        setØnsketFjernetPassering(splitKey[1]);
                      }}
                    >
                      Passering: {splitKey[1]}
                    </button>
                  </div>
                ) : null;
              })}
          </div>
        )
      ) : (
        <div>
          <h4>Trykk på den løperen du vil fjerne en passering fra:</h4>
          <ul>
            {løpereData.map((data, index) => {
              return (
                <li key={index}>
                  <button
                    className="button-navn"
                    onClick={() => {
                      setFjernPasseringTrue(index + 1);
                    }}
                  >
                    {data["navn"]}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FjernPasseringer;
