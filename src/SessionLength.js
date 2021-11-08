import './SessionLength.css';

const SessionLength = ({initialTime, type, changeLength}) => {
    return (
        <div className="SessionLength" id="session-label">
            <h3>Session Length</h3>
            <div className="TimeConfig">
                <button className="Controler" id="session-decrement" onClick={() => changeLength(-1, type)}> - </button>
                <p> {initialTime} </p>
                <button className="Controler" id="session-increment" onClick={() => changeLength(1, type)}> + </button>
            </div>
        </div>
    )
}

export default SessionLength;