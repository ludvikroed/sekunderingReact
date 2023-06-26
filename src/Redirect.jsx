import React, {useEffect} from "react";
const Redirect = () =>{
    useEffect(() => {
      const currentUrl = window.location.href;
      const hasWww = currentUrl.includes("www.");

      if (!hasWww) {
        // Redirect to URL with 'www.'
        const newUrl = currentUrl.replace("//", "//www.");
        window.location.href = newUrl;
      }
    }, []);

    return null;
}
export default Redirect