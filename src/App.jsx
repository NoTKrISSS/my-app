import Input from "./Components/generator/ColorInput";
import { useState } from "react";
import Display from "./Components/generator/DisplayContent";
function App() {
  const [color, setColor] = useState("#fff");
  const [number, setNumber] = useState(0);
  const [shape, setShape] = useState();

  function handleColor(props) {
    console.log(props.target.value);
    setColor(props.target.value);
  }

  return (
    <div className="container3">
      <Input handleColor={handleColor}></Input>
      {color && <Display color={color}></Display>}
    </div>
  );
}

export default App;
