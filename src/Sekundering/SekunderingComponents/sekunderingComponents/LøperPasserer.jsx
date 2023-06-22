import { useEffect } from "react";
export function LøperPasserer({
  index,
  løpereData,
  setLøpereData,
  setShowComponent,
}) {
  function timeSinceMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    const diffInMs = now.getTime() - midnight.getTime();
    const diffInSec = diffInMs / 1000;
    return diffInSec.toFixed(1);
  }
  const time = timeSinceMidnight();

  useEffect(() => {
    // make sure to create a new copy of løpereData before modifying it
    const updatedLøpereData = [...løpereData];
    updatedLøpereData[index]["antallPasseringer"] += 0.5;
    const antallPasseringer = updatedLøpereData[index]["antallPasseringer"]
    updatedLøpereData[index][("passering" + antallPasseringer)] = time;
    setLøpereData(updatedLøpereData);
    sessionStorage.setItem("løpereData", JSON.stringify(updatedLøpereData));
    setShowComponent(false)
  }, []);

  // return something else here since this component is not being rendered anymore
  return null;
}