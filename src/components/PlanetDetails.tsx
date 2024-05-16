import PlanetType from '../models/Planet'

type Props = {

  planet : PlanetType

}
function PlanetDetails({ planet } : Props) {
  return (
    <article>
      <div>
        <h1>{planet.name}</h1>
        <h2>{planet.latinName}</h2>
        <p>Distance: {planet.distance}</p>
        <p>Orbital Period: {planet.orbitalPeriod}</p>
      </div>

    </article>
  )
}

export default PlanetDetails