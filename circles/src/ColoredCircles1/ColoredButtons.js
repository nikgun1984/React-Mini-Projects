import ColorButton from "./ColoredButton";

const ColorButtons = ({ options, addCircle }) => {
  return (
    <div>
      {options.map((color) => (
        <ColorButton color={color} addCircle={addCircle} />
      ))}
    </div>
  );
};

export default ColorButtons;
