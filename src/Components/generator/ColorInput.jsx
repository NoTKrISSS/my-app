import { useState } from "react";

function Input({ handleColor }) {
  const [color, setColor] = useState();
  const [number, setNumber] = useState(0);
  const [shape, setShape] = useState();

  const changeColor = (e) => {
    console.log("color", e.target.value);
    handleColor(e.target.value);
    setColor(e.target.value);
  };

  const changeNumber = (e) => {
    console.log("number", e.target.value);
    setNumber(e.target.value);
  };

  return (
    <>
      <input
        onChange={(e) => changeColor(e)}
        type="color"
        value={color}
      ></input>
      <input onChange={changeNumber} type="text"></input>
    </>
  );
}

export default Input;
