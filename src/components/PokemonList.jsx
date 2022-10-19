import PokemonCard from "./PokemonCard";
import "./PokemonList.css"

const PokemonList = ({pokemons}) => {
    return(
        <div className="PokemosList">
            {pokemons.map((pokemon) => {
                return (
                <PokemonCard 
                    key={pokemon.name} 
                    name={pokemon.name} 
                    image={pokemon.sprites.front_default}
                    abilities={pokemon.abilities}
                    id={pokemon.id}
                    favorite={pokemon.favorite}
                />)
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(""),
}

export default PokemonList;