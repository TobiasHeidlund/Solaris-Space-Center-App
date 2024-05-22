import PlanetType from '../models/Planet'
import PlanetTitle from './PlanetTitle'
import './styles/planetNav.css';


type Props = {
  planetList : PlanetType[],
  handleMouseOver : (planet : PlanetType) => void,
  handleMouseLeave : () => void
}

function PlanetNav({ planetList, handleMouseOver, handleMouseLeave } : Props) {

  return (
    <nav className='solar-system'>
      
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
          
    </nav>
  )
}

export default PlanetNav