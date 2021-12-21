import axios from "axios";

async function getPokemonData() {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/7`);
	console.log(response);
	return response.data;
}

export default getPokemonData();
