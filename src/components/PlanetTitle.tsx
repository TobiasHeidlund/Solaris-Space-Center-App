import PlanetType from '../models/Planet'
import { Link } from 'react-router-dom'
import './styles/planetTitle.css';

type Props = {
  planet : PlanetType,
  handleMouseOver : (planet : PlanetType) => void,
  handleMouseLeave : () => void
}

function PlanetTitle({ planet, handleMouseOver, handleMouseLeave } : Props) {
  return (
      <section className='home-page'>
        <Link className = "link" to={"/planet/" + planet.id}>
          <section className='planet'>
            { 
              <div className={`body ${planet.name.toLowerCase()}`} 
              onMouseOver={ () => handleMouseOver(planet) } 
              onMouseLeave={handleMouseLeave}>
              </div>
            }
            
          </section>
      </Link>
  </section>
  )
}

export default PlanetTitle