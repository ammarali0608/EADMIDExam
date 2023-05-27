import React from "react";
import { useState } from "react";

function UserParticipation({ choices, changeVotes, Q, fun }) {
  const [ans, setAns] = useState();
  const [c, setC] = useState(true);
  // console.log(ans);
  return (
    <div>
      <center>
        <br />
        <h3>Answer Choices</h3>

        {choices.map((val) => (
          <div id={val.id + val.label}>
            <input
              id={val.label}
              type="radio"
              name="language"
              onClick={(val1) => {
                setAns(val1.target.id);
              }}
            />
            <label htmlFor={val.label}>{val.label}</label>
          </div>
        ))}
        <button onClick={() => {}}>Submit</button>
      </center>
    </div>
  );
}

export default UserParticipation;
