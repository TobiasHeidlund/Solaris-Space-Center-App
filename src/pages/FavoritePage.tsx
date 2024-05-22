import PlanetTitle from '../components/PlanetTitle';
import PlanetType from '../models/Planet';

type Props = {
    favorites : PlanetType[],
    handleMouseOver : (planet : PlanetType) => void,
    handleMouseLeave : () => void
}

function FavoritePage({ favorites, handleMouseLeave, handleMouseOver }: Props) {
  return (
    <section>
      <p>Favorites</p>
      {
        favorites.map(p => {
          return <PlanetTitle planet = { p } handleMouseLeave={handleMouseLeave} handleMouseOver={handleMouseOver}/>
        })
      } 
    </section>
  );
}

export default FavoritePage;
