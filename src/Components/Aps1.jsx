import { useState } from "react";

function Aps1() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const add = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log(counter);
  };

  const addall = () => {
    const newCounter2 = counter + counter2;
    setCounter2(newCounter2);
    console.log(counter2);
  };

  const reset = () => {
    setCounter(0);
    setCounter2(0);
  };

  return (
    <>
      <div className="aps1" style={{ backgroundColor: {} }}>
        {counter}
      </div>
      <div className="aps1">{counter2}</div>
      <button className="mygtukas2" onClick={add}>
        add1
      </button>
      <button className="mygtukas2" onClick={addall}>
        addall
      </button>
      <button className="mygtukas2" onClick={reset}>
        reset
      </button>
    </>
  );
}

export default Aps1;
