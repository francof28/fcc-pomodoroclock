import { useEffect, useRef, useState } from 'react';
import './App.css';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [intervalId, setIntervalId] = useState(null);
  const [currentSession, setCurrentSession] = useState('Session');
  const beepSound = useRef(null);

  
  const convertTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    minutes = minutes < 10 ? ('0' + minutes) : minutes;

    return `${minutes}:${seconds}`;
  }
  
  useEffect(() => {

    if(sessionTime === 0){
      beepSound.current.play();
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
      if(breakLength <= 1 && cant < 0){
        return
      }
      setBreakLength(breakLength + cant);
    } else {
      if(sessionLength <= 1 && cant < 0){
        return
      }
      setSessionLength(sessionLength + cant);
      setSessionTime((sessionLength + cant) * 60);
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

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSession('Session');
    setSessionLength(25);
    setBreakLength(5);
    setSessionTime(25 * 60);
    beepSound.current.load();
  }

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="Timers">
        <BreakLength id="break-length" type="breakLength" initialTime={breakLength} changeLength={changeLength}/>
        <SessionLength id="session-length" type="sessionLength" initialTime={sessionLength} changeLength={changeLength}/>
      </div>
      <div className="Session" id="timer-label">
        <h2>{currentSession}</h2>
        <p id="time-left">{convertTime(sessionTime)}</p>
        <button id="start_stop" onClick={handleStartStop}>{isStarted? 'Stop' : 'Start'}</button>
        <button id="reset" onClick={handleReset}>Refresh</button>
        <audio id="beep" ref={beepSound}>
          <source src="https://www.soundjay.com/buttons/sounds/beep-30b.mp3" type="audio/mpeg"/>
        </audio>
      </div>
      <p className="Cred">by francof28</p>
    </div>
  );
}

export default App;
