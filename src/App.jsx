import './App.css';
import Calc from './components/calc';
import Container from './components/container';
import Result from './components/result';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      const result = eval(value);
      setValue(result);
    }
    else if (buttonText === "C") {
      setValue("");
    }
    else {
      const display = value + buttonText;
      setValue(display);
    }
  }

  return (
    <>
      <h2>Calculator</h2>
      <h3>Use on-screen buttons</h3>
      <Container>
        <Result value={value}></Result>
        <Calc onButtonClick={onButtonClick}></Calc>
        </Container>
    </>
  )
}

export default App
