import "./ColoredButton.css";

const ColorButton = (props) => {
  return (
    <div>
      <button
        className="ColorButton"
        onClick={() => props.addCircle(props.color)}
        style={{ backgroundColor: props.color }}
      >
        {props.color}
      </button>
    </div>
  );
};

export default ColorButton;
