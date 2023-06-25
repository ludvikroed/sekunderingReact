import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StartlisteRitt = () => {
  const { rittId } = useParams();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch(
          `https://appapi.sekundering.repl.co/ritt/startliste?rittId=${rittId}`
        );
        const data = await response.json();
        if (data.html_content) {
          setHtmlContent(data.html_content);
        } else if (data.error) {
          console.error("Error fetching HTML:", data.error);
        }
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };
    fetchHTML();
  }, []);


  const tbodyElements = htmlContent.ge

  return (
    <div>
      <pre>{htmlContent}</pre>
    </div>
  );
};

export default StartlisteRitt;
