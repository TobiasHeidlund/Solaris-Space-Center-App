import PlanetTitle from '../components/PlanetTitle'
import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'

type Props = {
    planetList : PlanetType []
}


function HomePage({planetList}:Props) {

  return (
    <section className='page-wrapper'> 
      <p>Space Center</p>
      <PlanetNav planetList={ planetList }/>
      
    </section>
  )
}

export default HomePage