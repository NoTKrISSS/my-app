import { useState } from "react";

function Display({ color }) {
  console.log(color);
  //   const [colorChange, setColorChange] = useState({ color });
  //setColorChange({ color });
  return (
    <div className="window">
      <div
        className="square"
        style={{
          backgroundColor: { color },
        }}
      ></div>
    </div>
  );
}

export default Display;
