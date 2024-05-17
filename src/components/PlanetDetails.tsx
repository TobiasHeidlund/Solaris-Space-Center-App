import PlanetType from '../models/Planet'
import PlanetComponent from './PlanetComponent'

type Props = {
  planet: PlanetType,
  favorites : PlanetType[],
  toggleFavorite : (id : number) => void
}
function PlanetDetails({ planet, favorites, toggleFavorite } : Props) {


  return (
    <article className='planet-details-page'>
      <PlanetComponent planet = { planet } favorites = { favorites } toggleFavorite =  { toggleFavorite } />
    </article>
  )
}

export default PlanetDetails