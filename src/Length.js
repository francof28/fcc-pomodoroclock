import './Length.css';

const Length = ({title, initialTime}) => {
    return (
        <div className="Length">
            <h3>{title}</h3>
            <div className="TimeConfig">
                <button> - </button>
                <p> {initialTime} </p>
                <button> + </button>
            </div>
        </div>
    )
}

export default Length;