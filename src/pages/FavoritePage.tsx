import PlanetNav from '../components/PlanetNav';
import PlanetType from '../models/Planet';

type Props = {
    favorites : PlanetType[],
    handleMouseOver : (planet : PlanetType) => void,
    handleMouseLeave : () => void,
    heading : string
}

function FavoritePage({ favorites, handleMouseLeave, handleMouseOver, heading}: Props) {
  return (
    <section>
      <h1>{heading}</h1>
    
         <PlanetNav planetList = { favorites } handleMouseLeave={handleMouseLeave} handleMouseOver={handleMouseOver}/>
      
      
    </section>
  );
}

export default FavoritePage;
