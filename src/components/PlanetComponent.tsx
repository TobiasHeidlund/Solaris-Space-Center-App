import PlanetType from '../models/Planet'

type Props = {
  planet : PlanetType
}


function PlanetComponent({ planet } : Props) {
  return (
     <section className='planet-wrapper'>
      {
       <section className='planet-info'>
                  <div className="planet-main-info">
                    <h1>{planet.name}</h1>
                    <h3>{planet.latinName}</h3>
                    <p>{planet.desc}</p>
                  </div>
                  <div className="planet-short-info">
                    <p><strong>OMKRETS</strong></p>
                    <p>{planet.circumference}</p>
                    <p><strong>KM FRÅN SOLEN</strong></p>
                    <p>{planet.distance}</p>
                    <p><strong>MAX TEMPERATUR</strong></p>
                    <p>{planet.temp.day}</p>
                    <p><strong>MIN TEMPERATUR</strong></p>
                    <p>{planet.temp.night}</p>
                  </div>
                  <div className="planet-moon-info">
                    <p><strong>MÅNAR</strong></p>
                    <p>{planet.moons}</p>
                  </div>

          </section>
      }

     </section>
  )
}

export default PlanetComponent