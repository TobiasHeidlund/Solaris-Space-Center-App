import React from 'react';
import PlanetsTitle from '../components/PlanetTitle';
import PlanetNav from '../components/PlanetNav';
import PlanetType from '../models/Planet';

type Props = {
    planetList: PlanetType[]
}

function FavoritePage({ planetList }: Props) {
  return (
    <div>
      <p>FavoritePage</p>
      <PlanetNav planetList={[]} handleMouseOver={function (planet: PlanetType): void {
        throw new Error('Function not implemented.');
      } } handleMouseLeave={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <PlanetsTitle planet={{
        id: 0,
        type: '',
        name: '',
        latinName: '',
        rotation: 0,
        circumference: 0,
        temp: {
          day: 0,
          night: 0
        },
        distance: 0,
        orbitalPeriod: 0,
        desc: '',
        moons: []
      }} handleMouseOver={function (planet: PlanetType): void {
        throw new Error('Function not implemented.');
      } } handleMouseLeave={function (): void {
        throw new Error('Function not implemented.');
      } } />
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
