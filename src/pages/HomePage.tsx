import PlanetNav from '../components/PlanetNav'
import PlanetType from '../models/Planet'
import { useEffect, useState } from 'react'

type Props = {
    planetList : PlanetType [],
}


function HomePage({ planetList }:Props) {
  const [heading, setHeading] = useState<string>('Space Center')


  const handleMouseOver = (planet : PlanetType) => {
      setHeading(planet.name)
    }
  

  const handleMouseLeave = () => {
      setHeading('Space Center')
  }

  useEffect(() => {
    console.log(heading);
    
  }, [heading])

  
 
  return (
    <section className='page-wrapper'> 
      
      <p>{heading}</p>
      <PlanetNav planetList={ planetList } handleMouseOver = { handleMouseOver } handleMouseLeave = { handleMouseLeave }/>
      
    </section>
  )
}

export default HomePage