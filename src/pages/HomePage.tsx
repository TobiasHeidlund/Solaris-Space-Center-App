import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'
import { Link } from 'react-router-dom'
import './styles/homePage.css';

type Props = {
    planetList : PlanetType [],
    handleMouseOver : (planet : PlanetType) => void,
    handleMouseLeave : () => void
    heading : string
}


function HomePage({ planetList, handleMouseLeave, handleMouseOver, heading }:Props) {
  return (
    <section className='page-wrapper home-page'> 

    <div className='nav-bar'>
      <Link to="/favorites" className="nav-link">View Favorites</Link>
    </div>
    <div>
      <h1>{heading}</h1>

      <PlanetNav 
        planetList={ planetList } 
        handleMouseOver = { handleMouseOver } 
        handleMouseLeave = { handleMouseLeave }
      />
      </div>
    </section>
  )
}

export default HomePage