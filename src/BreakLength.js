import './BreakLength.css';

const BreakLength = ({initialTime, type, changeLength}) => {
    return (
        <div className="BreakLength">
            <h3>Break Length</h3>
            <div className="TimeConfig">
                <button className="Controler" onClick={() => changeLength(-1, type)}> - </button>
                <p> {initialTime} </p>
                <button className="Controler" onClick={() => changeLength(1, type)}> + </button>
            </div>
        </div>
    )
}

export default BreakLength;