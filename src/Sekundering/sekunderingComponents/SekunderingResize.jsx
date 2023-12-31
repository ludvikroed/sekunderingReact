import React, { useState, useEffect } from "react";
import LøpereButtons from "./LøpereButtons";
import RenderTider from "./RenderTider";
import VelgHvaSkalVisesPåKnapper from "./velgHvaSkalVisesPåKnapper";

const SekunderingResize = ({ løpereData, setLøpereData, errorMessage }) => {
  const [visTider, setVisTider] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [yPosition, setYPosition] = useState(window.innerHeight - 400);
  const [selectedLøper, setSelectedLøper] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const [visPasseringer, setVisPasseringer] = useState(true);

  const [dataForNedtelling, setDataForNedtelling] = useState(() => {
    const løpereJson = sessionStorage.getItem("dataForNedtelling");
    return løpereJson ? JSON.parse(løpereJson) : {};
  });

  useEffect(() => {
    sessionStorage.setItem(
      "dataForNedtelling",
      JSON.stringify(dataForNedtelling)
    );
  }, [dataForNedtelling]);



  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY;
      setYPosition(deltaY);
    }
  };

  const handleTouchStart = () => {
    setDragging(true);
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touch = e.touches[0];
      const deltaY = touch.clientY;
      setYPosition(deltaY);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="hele">
      <div
        className="resizable-div"
        style={{
          top: `${yPosition}px`,
          color: "black",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        Dra meg
      </div>
      <div
        className="constent-in-top-div"
        style={{ height: `${yPosition - 55}px` }}
      >
        <section>
          <VelgHvaSkalVisesPåKnapper
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </section>
        <section>
          <LøpereButtons
            løpereData={løpereData}
            setLøpereData={setLøpereData}
            selectedLøper={selectedLøper}
            setSelectedLøper={setSelectedLøper}
            setVisTider={setVisTider}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            errorMessage={errorMessage}
            dataForNedtelling={dataForNedtelling}
            setDataForNedtelling={setDataForNedtelling}
            setVisPasseringer={setVisPasseringer}
          />
        </section>
      </div>
      <section>
        <div
          className="content-in-bottom-div"
          style={{
            top: `${yPosition + 33}px`,
          }}
        >
          <RenderTider
            className="render-tider"
            index={selectedLøper}
            løpereData={løpereData}
            setLøpereData={setLøpereData}
            visTider={visTider}
            setVisTider={setVisTider}
            dataForNedtelling={dataForNedtelling}
            setDataForNedtelling={setDataForNedtelling}
          />
        </div>
      </section>
    </div>
  );
};

export default SekunderingResize;
