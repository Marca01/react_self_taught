import { useState, useEffect } from "react";

function useClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return { time };
}

export default useClock;
