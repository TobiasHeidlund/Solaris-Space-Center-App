import { Link } from 'react-router-dom'
import PlanetType from '../models/Planet'

type Props = {
  planet : PlanetType
}


function PlanetComponent({ planet } : Props) {
  return (
    <Link to={"/planet/" + planet.id}>
      <section className='planet'>
        {<article>
          <h1>{planet.name}</h1>
        </article>

        }
        
      </section>
    </Link>
  )
}

export default PlanetComponent