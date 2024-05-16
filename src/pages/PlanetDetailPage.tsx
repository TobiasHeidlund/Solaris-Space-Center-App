import { useParams } from 'react-router-dom';
import PlanetDetails from '../components/PlanetDetails'
import PlanetType from '../models/Planet'
import { useEffect, useState } from 'react';

type Props = {
    planetList : PlanetType[];
}

function PlanetDetailPage({ planetList }: Props) {
  const [planet, setPlanet] = useState<PlanetType >();
  const { id } = useParams();
  
  

  useEffect(() => {
    if(id !== undefined){
      const planet : PlanetType | undefined = planetList.find(p => p.id === parseInt(id));
      if(planet == undefined){
        console.log(`No planet found`);
      } else {
        setPlanet(planet)
      }
    }
  }, [id]);

  

  return (
    <section className='planet-page'>
        <section className='planet-wrapper'>
          { planet && <PlanetDetails planet = { planet }/>}
        </section>
    </section>
  )
}

export default PlanetDetailPage