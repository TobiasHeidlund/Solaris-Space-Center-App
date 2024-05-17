import PlanetsTitle from '../components/PlanetTitle'
import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'


type Props = {
    planetList : PlanetType[]
}


function FavoritePage({ planetList } : Props) {
  return (
    <div>
        <p>FavoritePage</p>
        <PlanetNav/>
        <PlanetsTitle/>
    </div>
  )
}

export default FavoritePage