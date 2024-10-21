import PlanetType from '../models/Planet'
import './styles/planetComponetnt.css';

type Props = {
  planet : PlanetType,
  favorites? : PlanetType[],
  toggleFavorite? : (id : number) => void,
  className? : string
}


 

function PlanetComponent({ planet, favorites, toggleFavorite, className } : Props) {

   

  return (
          /*${planet.name.toLowerCase()*/
          <>
          <div className={`planet-details ${className || ''}`}>
            <article>
            <h2> {planet.name}</h2>
            <h3> {planet.latinName}</h3>
            <p className='planet-description'>{planet.desc}</p>
            </article>
            <figure className='linebreak'></figure>
            <article className='planet-info'>
              <div className="planet-info-item">
                <p className="planet-info-label">Circumference</p>
                <p className="planet-info-value">{planet.circumference}</p>
              </div>
              <div className="planet-info-item">
                <p className="planet-info-label">Distance From Sun</p>
                <p className="planet-info-value">{planet.distance}</p>
              </div>
              <div className="planet-info-item">
                <p className="planet-info-label">Day Temperature</p>
                <p className="planet-info-value">{planet.temp.day}</p>
              </div>
              <div className="planet-info-item">
                <p className="planet-info-label">Night Temperature</p>
                <p className="planet-info-value">{planet.temp.night}</p>
              </div>
            </article>
            <figure className='linebreak'></figure>

          <div>
            <h3 className='moon-title'>Moons</h3>
            <p>{planet.moons.join(', ')}</p>
          </div>
          <div className="planet-action-icon"
          onClick={ () => toggleFavorite && toggleFavorite(planet.id) }>
          {
            favorites?.find(planetInFavorites => planetInFavorites.id === planet.id) ?  <p className='favorite-text'>Remove from favorites</p> : <p className='favorite-text'>Add to favorites</p>
          }
        </div>
        </div>

        
        </>
     )
  }
export default PlanetComponent