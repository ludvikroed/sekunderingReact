import React, { useEffect } from "react";
const Redirect = () => {
  useEffect(() => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("www.")) {
      if (!currentUrl.includes("3000")) {
        const newUrl = currentUrl.replace("//", "//www.");
        window.location.href = newUrl;
      }
    }
  }, []);

  return null;
};
export default Redirect;
