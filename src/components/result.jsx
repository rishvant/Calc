import "../styles/calc.css";

const Result = ({value}) => {
    return (
        <input type="text" className="result" value={value} readOnly/>
    )
}

export default Result;