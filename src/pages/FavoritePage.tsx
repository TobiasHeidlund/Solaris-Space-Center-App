import React from 'react'
import PlanetsTitle from '../components/PlanetsTitle'
import PlanetNav from '../components/PlanetNav'

type Props = {
    planets:Planet[]
}


function FavoritePage({planets}:Props) {
  return (
    <div>
        <p>FavoritePage</p>
        <PlanetNav/>
        <PlanetsTitle/>
    </div>
  )
}

export default FavoritePage