import "./App.css";
import Dice from "./Dice";

function App() {
	return (
		<div className="App">
			<Dice />
			<Dice title="Roll Me!!!" numDice={10} />
		</div>
	);
}

export default App;
