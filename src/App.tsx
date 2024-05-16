import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import PlanetPage from './pages/PlanetPage';
import axios from 'axios';


function App() {
  const [favorites, setFavorites] = useState<Planet[]>([])
  const [key, setKey] = useState<string>();
  const [planets, setPlanets] = useState<Planet[]>([]);


  const TempPlanets: Planet[] = [
    {
        id: 1,
        type: "Terrestrial",
        name: "Earth",
        latinName: "Terra",
        rotation: 24,
        circumference: 40075,
        temp: {
            day: 15,
            night: -70,
        },
        distance: 149.6,
        orbitalPeriod: 365.25,
        desc: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
        moons: ["Moon"]
    },
    {
        id: 2,
        type: "Gas Giant",
        name: "Jupiter",
        latinName: "Iuppiter",
        rotation: 9.93,
        circumference: 439264,
        temp: {
            day: -108,
            night: -108,
        },
        distance: 778.5,
        orbitalPeriod: 4332.59,
        desc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
        moons: ["Io", "Europa", "Ganymede", "Callisto"]
    }
  ];
  useEffect(()=>{
    setPlanets(TempPlanets)
    setFavorites(TempPlanets)
  },[])


  return (
    <Routes>
      <Route path='/' element={<PlanetPage planets={planets}/>} />
      <Route path='/favorites' element={<FavoritePage planets={favorites}/>} />
      <Route path='/planet/:id' element={<PlanetDetailPage planets={planets}/>} />
    </Routes>
  )
}

export default App
