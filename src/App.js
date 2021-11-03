import { useState } from 'react';
import './App.css';
import Length from './Length';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(sessionLength * 60);

  const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;

    return `${minutes}:${seconds}`;
  }
  
  const breakLengthIncrease = () => {
    setBreakLength(breakLength + 1);
  }

  const breakLengthDecrease = () => {
    if (breakLength > 0) {
      setBreakLength(breakLength - 1);
    }
  }

  const sessionLengthIncrease = () => {
    setSessionLength(sessionLength + 1);
    setSessionTime(sessionLength * 60);
  }

  const sessionLengthDecrease = () => {
    if (breakLength > 0) {
      setSessionLength(sessionLength - 1);
      setSessionTime(sessionLength * 60);
    }
  }

  

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="Timers">
        <Length title="Break Length" initialTime={breakLength} increase={breakLengthIncrease} decrease={breakLengthDecrease}/>
        <Length title="Session Length" initialTime={sessionLength} increase={sessionLengthIncrease} decrease={sessionLengthDecrease}/>
      </div>
      <div className="Session">
        <h2>Session</h2>
        <p>{convertTime(sessionTime)}</p>
        <button>Play / Stop</button>
        <button>Refresh</button>
      </div>
      <p className="Cred">by francof28</p>
    </div>
  );
}

export default App;
