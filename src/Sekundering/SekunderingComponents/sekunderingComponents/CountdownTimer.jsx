import React, { useState, useEffect } from "react";

function CountdownTimer({ initialValue, updateTimer }) {
  const [remainingTime, setRemainingTime] = useState(initialValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRemainingTime(initialValue);
    }, 200);

    return () => {
      clearTimeout(timerId); // Cleanup the timer if the component unmounts or the dependency changes before the timeout
    };
  }, [initialValue, updateTimer]);

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
