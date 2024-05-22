import PlanetType from '../models/Planet'
import PlanetComponent from './PlanetComponent'
import './styles/planetDetails.css';


type Props = {
  planet: PlanetType,
  favorites : PlanetType[],
  toggleFavorite : (id : number) => void
}
function PlanetDetails({ planet, favorites, toggleFavorite } : Props) {


  return (
    <article className='planet-details-page'>
      <PlanetComponent planet = { planet } favorites = { favorites } toggleFavorite =  { toggleFavorite } />
      <div className={`body planet-box ${planet.name.toLowerCase()}`}></div>

    </article>
  )
}

export default PlanetDetails