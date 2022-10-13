import { useState, useEffect } from "react";

export const LocalTime = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <span className="local-time">Miami FL (Local Time) {date.toLocaleTimeString()}</span>;
};