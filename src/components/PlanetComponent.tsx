import PlanetType from '../models/Planet'

type Props = {
  planet : PlanetType
}


function PlanetComponent({ planet } : Props) {
  return (
    <section className='planet'>Planet</section>
  )
}

export default PlanetComponent