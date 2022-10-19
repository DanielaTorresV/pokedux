import { Card} from "antd";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import StarButton from "./StarButton";

const PokemonCard = ({name, image, abilities, id, favorite}) => {
    const dispatch = useDispatch();
    const abilitiesString = abilities.map(ability => ability.ability.name).join(", ")

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId : id}))
    }

    return (
    <Card   title={name} 
            cover={<img src={image} alt={name} />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
            >
        <Card.Meta description={abilitiesString} />
    </Card>) 
}


export default PokemonCard