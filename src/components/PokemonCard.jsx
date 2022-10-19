import { StarOutlined } from "@ant-design/icons";
import { Card} from "antd";

const PokemonCard = ({name, image, abilities}) => {
    return (
    <Card   title={name} 
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}
            >
        <Card.Meta description={renderAbilities(abilities)} />
    </Card>) 
}

const renderAbilities = (abilities) => {
    return abilities.map(ability => ability.ability.name).join(", ")
}

export default PokemonCard