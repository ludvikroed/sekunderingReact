import React, { useEffect, useState } from "react";
import Syklister from "./components/Syklister";

const AlleRitt = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [ferdigHtml, setFerdigHtml] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch(
          "https://appapi.sekundering.repl.co/ritt/"
        );
        const html = await response.text();
        setHtmlContent(html);
        setFerdigHtml(ferdigHtml);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchHTML();
  }, []);

  return (
    <div>
      <div>
        <Syklister orgHtml={htmlContent} setError={setError} />
      </div>
    </div>
  );
};

export default AlleRitt;
