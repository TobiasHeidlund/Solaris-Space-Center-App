import React from 'react';
import PlanetType from '../models/Planet';
import './PlanetComponent.css'; 


type Props = {
  planet: PlanetType,
  favorites: PlanetType[],
  toggleFavorite: (id: number) => void
}

function PlanetComponent({ planet, favorites, toggleFavorite }: Props) {
  return (
    <section className="planet-wrapper">
      <div className="planet-info">
        <div className="title-and-favorite">
          <h1>{planet.name}</h1>
          <button onClick={() => toggleFavorite(planet.id)}>
            {favorites.find(planetInFavorites => planetInFavorites.id === planet.id) ?
              <p>Remove from favorites</p> : <p>Add to favorites</p>}
          </button>
        </div>
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
  );
}

export default PlanetComponent;
