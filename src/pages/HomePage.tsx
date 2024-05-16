import PlanetsTitle from '../components/PlanetsTitle'
import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'

type Props = {
    planetList : PlanetType []
}


function HomePage({planetList}:Props) {
    planetList.map(
        (p)=>
        console.log(p)
    )
  return (
    <div> 
    <p>HomePage</p>
    <PlanetNav/>
    <PlanetsTitle/>
    </div>
  )
}

export default HomePage