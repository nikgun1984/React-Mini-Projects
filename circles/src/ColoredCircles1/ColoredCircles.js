import Circle from "./Circle";
import { useState } from "react";
import ColorButtons from "./ColoredButtons";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => {
      //   circles.push("magenta"); WONT WORK BECAUSE THE SAME COPY
      //   return circles;
      return [...circles, { color, x: getRandom(), y: getRandom() }];
    });
  };
  const changePosition = (idx) => {
    setCircles((circles) => {
      const copy = [...circles];
      copy[idx].x = getRandom();
      copy[idx].y = getRandom();
      return copy;
    });
  };
  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        options={["peachpuff", "lightsteelblue", "aquamarine"]}
      />
      {circles.map(({ color, x, y }, idx) => (
        <Circle
          changePosition={changePosition}
          color={color}
          idx={idx}
          key={idx}
          x={x}
          y={y}
        />
      ))}
    </div>
  );
};

export default ColoredCircles;
