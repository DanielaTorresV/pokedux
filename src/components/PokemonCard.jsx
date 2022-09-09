import { StarOutlined } from "@ant-design/icons";
import { Card} from "antd";

const PokemonCard = ({name}) => {
    return (
    <Card   title={name} 
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto"/>}
            extra={<StarOutlined />}
            >
        <Card.Meta description="Fire, magic"/>
    </Card>) 
}

export default PokemonCard