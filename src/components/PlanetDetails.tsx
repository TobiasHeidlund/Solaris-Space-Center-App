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
      <div className={`body planet-box ${planet.name.toLowerCase()}`}></div>
      <PlanetComponent planet = { planet } favorites = { favorites } toggleFavorite =  { toggleFavorite } />
    </article>
  )
}

export default PlanetDetails