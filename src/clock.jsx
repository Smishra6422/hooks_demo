import React, { useEffect, useState } from "react";

const Clock = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    let incrementSecond = second;
    if (second === 60) {
      let incrementMinute = minute;
      setMinute(++incrementMinute);
      //   setsecond(0);
      incrementSecond = 0;
    }
    setTimeout(() => {
      setSecond(++incrementSecond);
    }, 1000);
  }, [second]);
  return (
    <div>
      <h1>Minute {minute}</h1>
      <h1>Second {second}</h1>
    </div>
  );
};

export default Clock;
