import axios from "axios";

export const getPokemon = async () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((error) => console.error("There was an error: ", error));
};
