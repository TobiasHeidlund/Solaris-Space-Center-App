import PlanetType from '../models/Planet'
import { Link } from 'react-router-dom'

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
              <h1 
                onMouseOver={ () => handleMouseOver(planet) } 
                onMouseLeave={handleMouseLeave}
              >
                  {planet.name}
              </h1>
            }
            
          </section>
      </Link>
  </section>
  )
}

export default PlanetTitle