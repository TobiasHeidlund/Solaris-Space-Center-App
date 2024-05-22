import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    planetList : PlanetType [],
}


function HomePage({ planetList }:Props) {
  const [heading, setHeading] = useState<string>('Solaris Space Center')


  const handleMouseOver = (planet : PlanetType) => {
      setHeading(planet.name)
    }
  

  const handleMouseLeave = () => {
      setHeading('Solaris Space Center')
  }

  useEffect(() => {
    console.log(heading);
  }, [heading])

  
 
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