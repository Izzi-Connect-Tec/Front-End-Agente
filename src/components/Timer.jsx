// Timer
// Code obtained from:
// https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
// Obtained by: Karla Cruz

import React, { useState, useEffect } from "react";
import "../styles/timer.css";
const Timer = () => {
  // State to store time
  const [time, setTime] = useState(0);

  // State to check stopwatch running or not
  const [isRunning, ] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  return (
    <div className="timerContainer">
      <p className="timerTime">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;