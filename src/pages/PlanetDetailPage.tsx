import { useParams, useNavigate } from 'react-router-dom';
import PlanetType from '../models/Planet'
import { useEffect, useState } from 'react';
import PlanetDetails from '../components/PlanetDetails';
import back from '../assets/back.svg'


type Props = {
    planetList : PlanetType[],
    favorites : PlanetType[],
    toggleFavorite : (id : number) => void
}

function PlanetDetailPage({ planetList, favorites, toggleFavorite }: Props) {
  const [planet, setPlanet] = useState<PlanetType >();
  const { id } = useParams();
  const navigate = useNavigate();
  
  

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
    <section className='page-wrapper'>
        <section className='planet-wrapper'>
          { planet && <PlanetDetails planet = { planet } favorites = { favorites } toggleFavorite =  { toggleFavorite }/>}
        </section>
        <button onClick={() => navigate(-1)} className="back-link">
          <img src={back}></img>
        </button>
    </section>
  )
}

export default PlanetDetailPage