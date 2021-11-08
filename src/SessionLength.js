import './SessionLength.css';

const SessionLength = ({initialTime, type, changeLength}) => {
    return (
        <div className="SessionLength">
            <h3>Session Length</h3>
            <div className="TimeConfig">
                <button className="Controler" onClick={() => changeLength(-1, type)}> - </button>
                <p> {initialTime} </p>
                <button className="Controler" onClick={() => changeLength(1, type)}> + </button>
            </div>
        </div>
    )
}

export default SessionLength;