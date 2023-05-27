import logo from "./logo.svg";
import "./App.css";
import PollDisplay from "./Components/PollDisplay";
import { useState } from "react";

function App() {
  const [votes, setVotes] = useState({
    javaScript: 0,
    python: 0,
    java: 0,
    Cs: 0,
  });
  const changeVOtes = (votes) => {
    setVotes(votes);
  };
  return (
    <div className="App">
      <h1>Polling App</h1>
      <PollDisplay votes={votes} changeVotes={changeVOtes} />
    </div>
  );
}

export default App;
