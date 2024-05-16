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


   useEffect(()=>{
    axios.post('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys')
    .then(response => {
      setKey(response.data.key);
    })
    .catch(e => console.log('Failed to get key', e));
  },[])

  useEffect(() => {
    axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        headers : { 'x-zocom' : key }
    }).then(response => {
      setPlanets(response.data.bodies);
    })
  }, [key])

  console.log(planets);
  


  return (
    <Routes>
      <Route path='/' element={<PlanetPage planets={planets}/>} />
      <Route path='/favorites' element={<FavoritePage planets={favorites}/>} />
      <Route path='/planet/:id' element={<PlanetDetailPage planets={planets}/>} />
    </Routes>
  )
}

export default App
