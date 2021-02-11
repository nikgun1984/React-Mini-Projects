import Circle from "./Circle";
import { useState } from "react";
import ColorButtons from "./ColoredButtons";

const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => {
      //   circles.push("magenta"); WONT WORK BECAUSE THE SAME COPY
      //   return circles;
      return [...circles, color];
    });
  };

  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        options={["peachpuff", "lightsteelblue", "aquamarine"]}
      />
      {circles.map((color, idx) => (
        <Circle color={color} idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default ColoredCircles;
