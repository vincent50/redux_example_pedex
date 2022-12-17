import { StarButton } from './StarButton'
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch()
  const typesString = types.map(elem => elem.type.name).join(', ')

  const clickOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }

  return <Card 
    title={name}
    cover={<img src={image} alt={name}/>}
    extra={<StarButton isFavorite={favorite} onClick={clickOnFavorite} />}
  >
    <Meta description={typesString} />
  </Card>
}

export default PokemonCard
