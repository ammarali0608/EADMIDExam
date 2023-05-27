import React from "react";
import { useEffect } from "react";

function PollDisplay(props) {
  console.log(props);

  return (
    <div>
      <center>
        <h3>What is your favorite programming language?</h3>
        <h4> javaScript : {props.votes.javaScript} votes</h4>
        <h4> Python : {props.votes.python} votes</h4>
        <h4> Java : {props.votes.java} votes</h4>
        <h4> C# : {props.votes.Cs} votes</h4>
      </center>
    </div>
  );
}

export default PollDisplay;
