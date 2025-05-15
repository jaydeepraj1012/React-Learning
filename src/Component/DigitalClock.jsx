import React, { use, useEffect, useState } from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";
  const hourAngle = (hour % 12) * 30 + minute / 2;
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <h1 className="text-center text-4xl font-bold mb-4 p-6">
          Project 3 
        </h1>
      <div>DigitalClock</div>
      <div className="text-4xl font-bold mb-4 p-6">
        {hour}:{minute}:{second} {ampm}
      </div>
      <div className="flex justify-center items-center h-screen">
      <Clock value={time} />
    </div>
    </>
  );
}

export default DigitalClock;
