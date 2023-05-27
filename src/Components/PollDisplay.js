import React from "react";
import { useEffect } from "react";

function PollDisplay({ Q, choices }) {
  const { question } = Q;
  return (
    <div>
      <center>
        <h3>{question}</h3>
        {choices.map((val) => (
          <h4 id={val.label}>
            {" "}
            {val.label} : {val.votes} votes
          </h4>
        ))}
      </center>
    </div>
  );
}

export default PollDisplay;
