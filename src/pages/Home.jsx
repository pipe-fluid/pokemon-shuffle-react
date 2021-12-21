import React from "react";
import { useState, useEffect } from "react";
import ShuffleButton from "../components/ShuffleButton/ShuffleButton";

const Home = () => {
	const [name, setName] = useState();
	const [type, setType] = useState();

	useState(() => {
		let randomId = Math.floor(Math.random() * 150);
		fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
			.then((res) => res.json())
			.then((data) => {
				setName(data.name);
				setType(data.types[0].type.name);
			});
	});

	return (
		<div>
			<h2>Shuffle 1st Gen Pokemon</h2>
			<h3>Name: {name}</h3>
			<h3>Type:{type}</h3>
			<img
				src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
				alt=""
				className="pokemon"
			/>
			<ShuffleButton />
		</div>
	);
};

export default Home;
