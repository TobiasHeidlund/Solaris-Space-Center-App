import PlanetType from '../models/Planet'
import PlanetTitle from './PlanetTitle'


type Props = {
  planetList : PlanetType[]
}

function PlanetNav({ planetList } : Props) {

  return (
    <section className='planet-nav'>
      
      {
        planetList.map(planet => {
          return <PlanetTitle planet = { planet } key={planet.id}/>
        })
      }
          
    </section>
  )
}

export default PlanetNav