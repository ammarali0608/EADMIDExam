import logo from "./logo.svg";
import "./App.css";
import PollDisplay from "./Components/PollDisplay";
import { useState } from "react";
import UserParticipation from "./Components/UserParticipation";
import AnotherUserParticipation from "./Components/AnotherUserParticipation";

function App() {
  const [start, setstart] = useState(false);
  const [us, setUs] = useState(false);
  const [Q, setQ] = useState({
    question: "What is your favorite programming language?",

    choices: [
      { id: 1, label: "JavaScript", votes: 0 },

      { id: 2, label: "Python", votes: 0 },

      { id: 3, label: "Java", votes: 0 },

      { id: 4, label: "C#", votes: 0 },
    ],
  });
  function forceUpdate() {
    setQ((prev) => {
      return { ...prev };
    });
  }
  const changeVOtes = (r) => {
    setQ(r);
    forceUpdate();
  };
  const started = () => {
    setstart(true);
  };
  return (
    <div className="App">
      <h1>Polling App</h1>

      <PollDisplay Q={Q} choices={Q.choices} />
      <div></div>
      {start ? (
        <UserParticipation
          choices={Q.choices}
          changeVotes={changeVOtes}
          Q={Q}
        />
      ) : (
        <></>
      )}

      <AnotherUserParticipation fun={started} />
    </div>
  );
}

export default App;
