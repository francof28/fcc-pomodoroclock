import './BreakLength.css';

const BreakLength = ({initialTime, type, changeLength}) => {
    return (
        <div className="BreakLength" id="break-label">
            <h3>Break Length</h3>
            <div className="TimeConfig">
                <button className="Controler" id="break-decrement" onClick={() => changeLength(-1, type)}> - </button>
                <p> {initialTime} </p>
                <button className="Controler" id="break-increment" onClick={() => changeLength(1, type)}> + </button>
            </div>
        </div>
    )
}

export default BreakLength;