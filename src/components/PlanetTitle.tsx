import PlanetType from '../models/Planet'
import { Link } from 'react-router-dom'

type Props = {
  planet : PlanetType
}

function PlanetTitle({ planet } : Props) {
  return (
      <section className='home-page'>
        <Link to={"/planet/" + planet.id}>
          <section className='planet'>
            {             
              <h1>{planet.name}</h1>
            }
            
          </section>
      </Link>
  </section>
  )
}

export default PlanetTitle