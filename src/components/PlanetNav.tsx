import PlanetType from '../models/Planet'
import PlanetComponent from './PlanetComponent'



type Props = {
  planetList : PlanetType[]
}

function PlanetNav({ planetList } : Props) {

  return (
    <section className='planet-nav'>
          {
            planetList.map(planet => {
            return <PlanetComponent planet = {planet} key = {planet.id}/>
            })
          }
    </section>
  )
}

export default PlanetNav