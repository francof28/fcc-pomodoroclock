import './Length.css';

const Length = ({title, initialTime, increase, decrease}) => {
    return (
        <div className="Length">
            <h3>{title}</h3>
            <div className="TimeConfig">
                <button onClick={() => decrease()}> - </button>
                <p> {initialTime} </p>
                <button onClick={() => increase()}> + </button>
            </div>
        </div>
    )
}

export default Length;