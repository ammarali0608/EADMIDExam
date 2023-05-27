import React from "react";
import { useState } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const [up, setUp] = useState(false);
  setTimeout(function () {
    if (time > 0) setTime(time - 1);
    else setUp(true);
  }, 1000);
  return (
    <div>
      TIMER
      <h4>{time}</h4>
      {up ? <h3>Time's Up</h3> : <></>}
    </div>
  );
}

export default Timer;
