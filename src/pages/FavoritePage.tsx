import React from 'react';
import PlanetsTitle from '../components/PlanetTitle';
import PlanetNav from '../components/PlanetNav';
import PlanetType from '../models/Planet';
import './FavoritePage.css'; 

type Props = {
    planetList: PlanetType[]
}

function FavoritePage({ planetList }: Props) {
  return (
    <div className="favorite-page">
      <p>FavoritePage</p>
      <PlanetNav />
      <PlanetsTitle />
      <div>
        {planetList.length === 0 ? (
          <p>No favorite planets to display</p>
        ) : (
          <ul>
            {planetList.map((planet) => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FavoritePage;
