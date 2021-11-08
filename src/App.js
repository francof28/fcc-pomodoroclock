import { useEffect, useState } from 'react';
import './App.css';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [currentSession, setCurrentSession] = useState('Session');

  const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;

    return `${minutes}:${seconds}`;
  }
  
  useEffect(() => {
    if(sessionTime === 0){
      if(currentSession === 'Session'){
        setCurrentSession('Break');
        setSessionTime(breakLength * 60);
      } else if(currentSession === 'Break'){
        setCurrentSession('Session');
        setSessionTime(sessionLength * 60);
      }
    }
  }, [sessionTime, currentSession, breakLength, sessionLength])

  /*
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
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setSessionTime(sessionLength * 60)
    }
    console.log(sessionTime)
  }
  */

  const changeLength = (cant, type) => {
    if(type === "breakLength") {
      if(breakLength <= 0 && cant < 0){
        return
      }
      setBreakLength(breakLength + cant);
    } else {
      if(sessionLength <= 0 && cant < 0){
        return
      }
      setSessionLength(sessionLength + cant);
      if(!timerOn){
        setSessionTime((sessionLength + cant) * 60);
      }
    }
  }

  const isStarted = intervalId !== null;
  const handleStartStop = () => {
    if(isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {setSessionTime(prev => prev - 1)}, 1000)
      setIntervalId(newIntervalId);
    }
  }

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="Timers">
        <BreakLength type="breakLength" initialTime={breakLength} changeLength={changeLength}/>
        <SessionLength type="sessionLength" initialTime={sessionLength} changeLength={changeLength}/>
      </div>
      <div className="Session">
        <h2>{currentSession}</h2>
        <p>{convertTime(sessionTime)}</p>
        <button onClick={handleStartStop}>{isStarted? 'Stop' : 'Start'}</button>
        <button>Refresh</button>
      </div>
      <p className="Cred">by francof28</p>
    </div>
  );
}

export default App;
