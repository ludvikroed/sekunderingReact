import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Klasser from "./Components/Klasser";
import LøpereListe from "./Components/LøpereListe";
import StartSekunderingButton from "./Components/StartSekundering";
import Loading from "../AlleRennComponents/Components/Loading";
import HvisData from "./Components/HvisData";
import Søk from "./Components/Søk";
import HomeBanner from "../AlleRennComponents/Components/homeBanner";

function Startliste() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedKlasse, setSelectedKlasse] = useState("Alle");
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({});
  const [checkedLøpere, setCheckedLøpere] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [laster, setLaster] = useState(true);
  const [error, setError] = useState(false);
  const [hvisStarttider, setHvisStarttider] = useState(() => {
    const starttiderJson = localStorage.getItem("visStarttiderStartliste");
    if (starttiderJson) {
      return JSON.parse(starttiderJson);
    } else {
      localStorage.setItem("visStarttiderStartliste", JSON.stringify(false));
      return false;
    }
  });

  const [hvisStartnummer, setHvisStartnummer] = useState(() => {
    const startnummerJson = localStorage.getItem("visStartnummerStartliste");
    if (startnummerJson) {
      return JSON.parse(startnummerJson);
    } else {
      localStorage.setItem("visStartnummerStartliste", JSON.stringify(false));
      return false;
    }
  });

  const [hvisKlasse, setHvisKlasse] = useState(() => {
    const klasseJson = localStorage.getItem("visKlasseStartliste");
    if (klasseJson) {
      return JSON.parse(klasseJson);
    } else {
      localStorage.setItem("visKlasseStartliste", JSON.stringify(false));
      return false;
    }
  });

  const [hvisKlubb, setHvisKlubb] = useState(() => {
    const klubbJson = localStorage.getItem("visKlubbStartliste");
    if (klubbJson) {
      return JSON.parse(klubbJson);
    } else {
      localStorage.setItem("visKlubbStartliste", JSON.stringify(false));
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "visStarttiderStartliste",
      JSON.stringify(hvisStarttider)
    );
  }, [hvisStarttider]);

  useEffect(() => {
    localStorage.setItem(
      "visStartnummerStartliste",
      JSON.stringify(hvisStartnummer)
    );
  }, [hvisStartnummer]);

  useEffect(() => {
    localStorage.setItem("visKlasseStartliste", JSON.stringify(hvisKlasse));
  }, [hvisKlasse]);

  useEffect(() => {
    localStorage.setItem("visKlubbStartliste", JSON.stringify(hvisKlubb));
  }, [hvisKlubb]);

  useEffect(() => {
    const url = "https://appapi.sekundering.repl.co/renn/?rennNavn=" + id;
    async function fetchData() {
      try {
        const result = await axios.get(url);
        setData(result.data);
        setLaster(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLaster(false);
        setError(true);
      }
    }
    fetchData();
  }, [id]);

  if (error) {
    return (
      <div>
        Det ser ut til at noe er feil. Dette kan skje av flere grunner. Det mest
        sansynlige er at nettsiden ikke får tilgang til dataen fra EQtiming
      </div>
    );
  }
  if (laster) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (data[0] === "error") {
    return (
      <div>
        <h1>Error</h1>
        <p>
          EQ timing sender ingen utdøvere til nettsiden. Gå på EQ timing å se om
          det er noen utdøvere der.
        </p>
      </div>
    );
  }

  let klasser = data[1];

  const handleKlasseClick = (klasse) => {
    setSelectedKlasse(klasse);
  };

  const handleCheckboxChange = (klasse, index) => {
    setCheckedCheckboxes((prevState) => ({
      ...prevState,
      [klasse]: {
        ...prevState[klasse],
        [index]: !prevState[klasse]?.[index],
      },
    }));
  };

  const groupedData = data[0].reduce((groups, data) => {
    const klasse = data["@klasse"];
    if (!groups[klasse]) {
      groups[klasse] = [];
    }
    groups[klasse].push(data);
    return groups;
  }, {});

  return (
    <div className="alle-startliste">
      <HomeBanner />
      <HvisData
        hvisStarttider={hvisStarttider}
        hvisStartnummer={hvisStartnummer}
        hvisKlasse={hvisKlasse}
        hvisKlubb={hvisKlubb}
        setHvisStarttider={setHvisStarttider}
        setHvisStartnummer={setHvisStartnummer}
        setHvisKlasse={setHvisKlasse}
        setHvisKlubb={setHvisKlubb}
      />
      <Klasser
        klasser={klasser}
        handleKlasseClick={handleKlasseClick}
        selectedKlasse={selectedKlasse}
        checkedCheckboxes={checkedCheckboxes}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Søk searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <LøpereListe
        hvisStarttider={hvisStarttider}
        hvisStartnummer={hvisStartnummer}
        hvisKlasse={hvisKlasse}
        hvisKlubb={hvisKlubb}
        groupedData={groupedData}
        selectedKlasse={selectedKlasse}
        checkedCheckboxes={checkedCheckboxes[selectedKlasse]}
        handleCheckboxChange={(index) =>
          handleCheckboxChange(selectedKlasse, index)
        }
        checkedLøpere={checkedLøpere}
        setCheckedLøpere={setCheckedLøpere}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <StartSekunderingButton checkedLøpere={checkedLøpere} />
    </div>
  );
}

export default Startliste;
