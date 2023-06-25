import React, {useState} from "react";
const Syklister = ({ orgHtml, setError }) => {


  const consoleLogTbodies = (orgHtml) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(orgHtml, "text/html");
    const tbodyElements = doc.getElementsByTagName("tbody");
    const arrayKonkuranser = [];

    for (let i = 0; i < tbodyElements.length; i++) {
      const tbody = tbodyElements[i];
      arrayKonkuranser.push(tbody);
    }

    const ferdigHtml = arrayKonkuranser.map((data, index) => {
      const trElements = data.getElementsByTagName("tr");
      //console.log(trElements[0], "textContent");
      const trTexts = Array.from(trElements).map((tr) => {
        //console.log(tr)
        const elements = tr.children;
        const element1 = elements[0];
        const element2 = elements[1];
        const element3 = elements[2];

        const checkElementEmpty = (element) => {
          return element.textContent.trim() === "";
        };

        let urlNotDone;
        if (!checkElementEmpty(element1)) {
          urlNotDone = element1;
        } else if (!checkElementEmpty(element2)) {
          urlNotDone = element2;
        } else if (!checkElementEmpty(element3)) {
          urlNotDone = element3;
        }

        if (urlNotDone) {
          const aElement = urlNotDone.getElementsByTagName("a");
        }

        let link = "";
        let rittId = "error";
        let splitLink;

        if (urlNotDone) {
          const aElement = urlNotDone.getElementsByTagName("a")[0];
          if (aElement) {
            link = aElement.href;
            splitLink = link.split("/");
            rittId = splitLink[7];
          }
        }
        if (rittId === "error") {
          setError("finner ikke ideen til konkuranssen");
        }

        const elementTexts = Array.from(elements).map(
          (element) => element.textContent
        );
        return elementTexts.join(", ");
      });

      return (
        <ul key={index}>
          {trTexts.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      );
    });

    return ferdigHtml;
  };
  const ferdigHtml = consoleLogTbodies(orgHtml);

  return (
    <div>
      syklister
      {ferdigHtml}
    </div>
  );
};

export default Syklister;
