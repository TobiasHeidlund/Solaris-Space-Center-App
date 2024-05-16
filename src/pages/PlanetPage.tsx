import React from 'react'
import PlanetsTitle from '../components/PlanetsTitle'
import PlanetNav from '../components/PlanetNav'

type Props = {
    planets:Planet[]
}


function PlanetPage({planets}:Props) {
    planets.map(
        (p)=>
        console.log(p)
    )
  return (
    <div> 
    <p>PlanetPage</p>
    <PlanetNav/>
    <PlanetsTitle/>
    </div>
  )
}

export default PlanetPage