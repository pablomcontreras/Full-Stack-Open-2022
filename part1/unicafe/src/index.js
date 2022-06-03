import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Feedback = () => (
  <h1>Give FeedBack</h1>
)

const Statitics = () => {
  
  return (
<h1>Statitics</h1>
  )
}



function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback />
      <Statitics />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

