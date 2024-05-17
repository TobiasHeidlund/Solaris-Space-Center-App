import PlanetType from '../models/Planet'
import PlanetComponent from './PlanetComponent'

type Props = {

  planet: PlanetType

}
function PlanetDetails({ planet } : Props) {
  return (
    <article>

      
      <PlanetComponent planet = { planet }/>
    


    </article>
  )
}

export default PlanetDetails