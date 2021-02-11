import { useState } from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = ({ numDice = 6, title = "Main Game", maxVal = 6 }) => {
	const [numbers, setNumbers] = useState(Array.from({ length: numDice })); //create an empty array with numDice slots
	// const dice = [];
	// for (let i = 0; i < numDice; i++) {
	// 	dice.push(Math.floor(Math.random() * maxVal) + 1);
	// }
	const rollDice = () =>
		setNumbers((numbers) =>
			numbers.map((n) => Math.floor(Math.random() * maxVal) + 1)
		);

	return (
		<div className="Dice">
			<h2>{title}</h2>
			<div>
				{numbers.map((num) => (
					<Die val={num} />
				))}
			</div>
			<button onClick={rollDice}>Roll</button>
		</div>
	);
};

export default Dice;
