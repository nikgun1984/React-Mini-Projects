import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      onClick={() => props.changePosition(props.idx)}
      className="Circle"
      style={{
        backgroundColor: props.color,
        position: "absolute",
        top: `${props.y}vh`,
        left: `${props.x}vw`,
      }}
    >
      {props.idx + 1}
    </div>
  );
};

export default Circle;
