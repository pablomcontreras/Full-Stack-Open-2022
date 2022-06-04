import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const OpinionButton = (props) => {
  //console.log('Propiedades de Opinion Button', props)

  return <button onClick={props.handler}>{props.name}</button>;
};

const Feedback = (props) => {
  //console.log('propiedades de feedback',props)

  return (
    <>
      <h1>Give FeedBack</h1>
      <OpinionButton name="Good" handler={props.handleClickg} />
      <OpinionButton name="Neutral" handler={props.handleClickn} />
      <OpinionButton name="Bad" handler={props.handleClickb} />
    </>
  );
};

const Statitic = (props) => {
  return (
    <>
    <td>
      {props.name}
    </td>
        <td>
       {props.value}
      </td>
      </>
  );
};

const Statitics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const promedioPuntuacion = props.good - props.bad;

  //const promedio = (total / 3).toFixed(2);
  const promedioPositivo = ((props.good * 100) / total).toFixed(2);

  if (!props.good && !props.neutral && !props.bad) {
    return (
      <>
        <h1>Statitics</h1>
        <p> No feedback given yet</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Statitics</h1>
        <table>
          <tbody>
          <tr>
          <Statitic name="Good" value={props.good} />
          </tr>
          <tr>
          <Statitic name="Neutral" value={props.neutral} />
          </tr>
          <tr>
          <Statitic name="Bad" value={props.bad} />
          </tr>
          </tbody>
        </table>
          <hr></hr>
          <table>
          <tbody>
          <tr>
          <Statitic name="Total" value={total} />
          </tr>
          <tr>
          <Statitic name="Average" value={promedioPuntuacion} />
          </tr>
          <tr>
          <Statitic name="Positive Ratings" value={promedioPositivo} />
          </tr>
          </tbody>
        </table>
      </>
    );
  }
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const manejarClickGood = () => setGood(good + 1);
  const manejarClickNeutral = () => setNeutral(neutral + 1);
  const manejarClickBad = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        handleClickg={manejarClickGood}
        handleClickn={manejarClickNeutral}
        handleClickb={manejarClickBad}
      />
      <Statitics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
