import React, { useState, useEffect } from "react";
import LøpereButtons from "./LøpereButtons";
import RenderTider from "./RenderTider";
import VelgHvaSkalVisesPåKnapper from "./velgHvaSkalVisesPåKnapper";

const SekunderingResize = ({ løpereData, setLøpereData }) => {
  const [visTider, setVisTider] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [yPosition, setYPosition] = useState(window.innerHeight - 400);
  const [selectedLøper, setSelectedLøper] = useState(null);

  // skru av så man ikke kan scrolle
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
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
          color: "black"
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >Dra meg</div>
      <div
        className="constent-in-top-div"
        style={{ height: `${yPosition - 55}px` }}
      >
        
        <VelgHvaSkalVisesPåKnapper />
        <LøpereButtons
          løpereData={løpereData}
          setLøpereData={setLøpereData}
          selectedLøper={selectedLøper}
          setSelectedLøper={setSelectedLøper}
          setVisTider={setVisTider}
        />
      </div>
      
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
        />
      </div>
    </div>
  );
};

export default SekunderingResize;
