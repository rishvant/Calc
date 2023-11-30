import "../styles/calc.css"

const Calc = ({onButtonClick}) => {
    const btn = ["7", "4", "1", "0", "+", "8", "5", "2", ".", "-", "9", "6", "3", "/", "*", "C", "="];

    return (
        <div className="inner">
            {btn.map(button => (
                <button className="btn" onClick={() => onButtonClick(button)}>{button}</button>
            ))}
        </div>
    )
}

export default Calc;