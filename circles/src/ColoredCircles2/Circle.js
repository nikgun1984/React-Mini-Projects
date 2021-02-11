import "./Circle.css";
import { useState } from "react";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const Circle = (props) => {
  const [pos, setPos] = useState({ x: getRandom(), y: getRandom() });
  const moveCircle = () => {
    setPos({ x: getRandom(), y: getRandom() });
  };
  return (
    <div
      onClick={() => moveCircle()}
      className="Circle"
      style={{
        backgroundColor: props.color,
        position: "absolute",
        top: `${pos.y}vh`,
        left: `${pos.x}vw`,
      }}
    >
      {props.idx + 1}
    </div>
  );
};

export default Circle;
