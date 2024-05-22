import PlanetNav from '../components/PlanetNav';
import PlanetType from '../models/Planet';
import './styles/favoritePage.css';

type Props = {
    favorites : PlanetType[],
    handleMouseOver : (planet : PlanetType) => void,
    handleMouseLeave : () => void,
    heading : string
}

function FavoritePage({ favorites, handleMouseLeave, handleMouseOver, heading}: Props) {
  return (
    <section className='favorite-page'>
      <h1>{heading}</h1>
    
         <PlanetNav planetList = { favorites } handleMouseLeave={handleMouseLeave} handleMouseOver={handleMouseOver}/>
      
      
    </section>
  );
}

export default FavoritePage;
