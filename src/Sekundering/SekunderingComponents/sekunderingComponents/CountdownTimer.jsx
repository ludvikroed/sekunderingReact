import React, { useState, useEffect } from "react";

function CountdownTimer({ initialValue }) {
  const [remainingTime, setRemainingTime] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Format the remaining time as minutes and seconds
  const formatTime = (time) => {
    const absTime = Math.abs(time);
    const minutes = Math.floor(absTime / 60);
    const seconds = absTime % 60;

    return `${time < 0 ? "-" : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return <div>{formatTime(remainingTime)}</div>;
}

export default CountdownTimer;
