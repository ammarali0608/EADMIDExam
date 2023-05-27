import React from "react";

function AnotherUserParticipation({ fun }) {
  return (
    <div>
      <button
        onClick={() => {
          fun();
        }}
      >
        New User
      </button>
    </div>
  );
}

export default AnotherUserParticipation;
