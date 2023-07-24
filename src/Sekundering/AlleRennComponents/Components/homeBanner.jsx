import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HomeBanner() {
    const navigate = useNavigate();
  return (
    <div>
      <button className="home-button" onClick={() => navigate("/")}>
        Sekundering.no - Hjem
      </button>
    </div>
  );
}
