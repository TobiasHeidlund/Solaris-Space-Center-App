import PlanetComponent from '../components/PlanetComponent';
import PlanetType from '../models/Planet';

type Props = {
    favorites : PlanetType[]
}

function FavoritePage({ favorites }: Props) {
  return (
    <section>
      <p>Favorites</p>
      {
        favorites.map(p => {
          return <PlanetComponent className = "favorite-planet" planet = { p } key={p.id}/>
        })
      } 
    </section>
  );
}

export default FavoritePage;
