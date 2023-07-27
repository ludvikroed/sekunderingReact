import React from "react";
import FjernPasseringer from "./components/FjernPasseringer";
import Tabs from "../tabs/Tabs";
import Logo from "../../Diverse/logo";

const Innstillinger = () => {
  function resetData() {
    sessionStorage.removeItem("løpereData");
    const firstLøpereData = sessionStorage.getItem("firstLøpereData");
    sessionStorage.setItem("løpereData", firstLøpereData);
  }

  return (
    <>
      <header>
        <Logo />
        <Tabs />
      </header>
      <main>
        <section>
          <hr />
          <button
            className="button-sekundering"
            onDoubleClick={resetData}
            style={{ maxWidth: "500px" }}
          >
            <h2>Dobbel klikk her for å nullstille Sekundering.</h2>
            <h2>Du vil miste alle passeringer og resultater</h2>
            <h2 style={{ color: "red" }}>
              !Dette er ikke mulig å gjøre om på!
            </h2>
          </button>
        </section>
        <section>
          <hr />
          <FjernPasseringer />
          <hr />
        </section>
      </main>
    </>
  );
};

export default Innstillinger;
