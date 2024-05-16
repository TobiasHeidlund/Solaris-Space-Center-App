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
    <section> 
      <p>HomePage</p>
        <PlanetNav planetList = { planetList }/>
        <PlanetsTitle/>
    </section>
  )
}

export default HomePage