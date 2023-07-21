import React, { useEffect } from "react";

const Redirect = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    const hasWWW = currentUrl.includes("www");
    const isLocalhost = currentUrl.includes("localhost");

    if (hasWWW && !isLocalhost) {
      const newUrl = currentUrl.replace("//www", "//.");
      window.location.href = newUrl;
    }
  }, []);

  return null;
};

export default Redirect;
