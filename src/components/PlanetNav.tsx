import PlanetType from '../models/Planet'
import PlanetTitle from './PlanetTitle'


type Props = {
  planetList : PlanetType[],
  handleMouseOver : (planet : PlanetType) => void,
  handleMouseLeave : () => void
}

function PlanetNav({ planetList, handleMouseOver, handleMouseLeave } : Props) {

  return (
    <section className='planet-nav'>
      
      {
        planetList.map(planet => {
          return <PlanetTitle 
                  planet = { planet } 
                  key={planet.id} 
                  handleMouseOver = { handleMouseOver } 
                  handleMouseLeave = { handleMouseLeave }
                />
        })
      }
          
    </section>
  )
}

export default PlanetNav