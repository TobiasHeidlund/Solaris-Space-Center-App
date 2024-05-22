import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'
import { Link } from 'react-router-dom'

type Props = {
    planetList : PlanetType [],
    handleMouseOver : (planet : PlanetType) => void,
    handleMouseLeave : () => void
    heading : string
}


function HomePage({ planetList, handleMouseLeave, handleMouseOver, heading }:Props) {


  
 
  return (
    <section className='page-wrapper'> 
    <Link to="/favorites" className="nav-link">View Favorites</Link>
      
      <h1>{heading}</h1>
      <PlanetNav 
        planetList={ planetList } 
        handleMouseOver = { handleMouseOver } 
        handleMouseLeave = { handleMouseLeave }
      />
      
    </section>
  )
}

export default HomePage