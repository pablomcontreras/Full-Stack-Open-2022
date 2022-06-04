import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  const [topPoints, setTopPoints] = useState(0);

  const handleClick = () => {
    //generador de numeros random (se usa al hacer click)
    // si el numero random es igual al que estaba antes, se vuelve a generar
    // de esta manera evitamos anecdotas repetidas
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    if (randomNum !== selected) {
      setSelected(randomNum);
    } else {
      handleClick();
    }
  };

  const handleClickVote = () => {
    const newPoints = [...points];
    newPoints[selected]++;
    points = newPoints;
    setMostVoted(points.indexOf(Math.max(...points)));
    setTopPoints(points[mostVoted]);
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <div style={{ marginTop: "10px" }}>
        <h1> Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <div>
          <button style={{ marginTop: "10px" }} onClick={handleClick}>
            Next Anecdote
          </button>
          <button
            style={{ marginTop: "10px", marginLeft: "10px" }}
            onClick={handleClickVote}
          >
            Vote Anecdote
          </button>
        </div>
        <h1> Anecdote with most votes</h1>"{props.anecdotes[mostVoted]}"<br />
        <br />
        Number of Votes: {topPoints}
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

let points = new Uint8Array(anecdotes.length);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
