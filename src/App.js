import './App.css';
import Length from './Length';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="Timers">
        <Length title="Break Length" initialTime={5} />
        <Length title="Session Length" initialTime={25}/>
      </div>
      <div className="Session">
        <h2>Session</h2>
        <p>25:00</p>
        <button>Play / Stop</button>
        <button>Refresh</button>
      </div>
      <p className="Cred">by francof28</p>
    </div>
  );
}

export default App;
