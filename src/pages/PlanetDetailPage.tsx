import React from 'react'
import PlanetDetails from '../components/PlanetDetails'

type Props = {
    planets:Planet[];
}

function PlanetDetailPage({planets}:Props) {
  return (
    <div>
        planets
        PlanetDetailPage
        <PlanetDetails/>
    </div>
  )
}

export default PlanetDetailPage