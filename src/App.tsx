import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import HomePage from './pages/HomePage';
import axios from 'axios';
import PlanetType from './models/Planet'



function App() {
  const [favorites, setFavorites] = useState<PlanetType[]>([])
  const [key, setKey] = useState<string>();
  const [planetList, setPlanetList] = useState<PlanetType[]>([]);
  const [heading, setHeading] = useState<string>('Solaris Space Center')


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
      setPlanetList(response.data.bodies);
    })
    .catch(e => console.log(e));
  }, [key])

  const toggleFavorite = (id : number ) => {
      if(favorites.some(planet => planet.id === id)) {
        console.log('Removed from favorites');
        const filteredFavorites = favorites.filter(planet => planet.id !== id);
        setFavorites(filteredFavorites);
      } else {
        console.log('Add to favorites');
        setFavorites(favorites => {
          const foundPlanet = planetList.find(planet => planet.id === id);
          return foundPlanet ? [...favorites, foundPlanet] : favorites;
        })
      }
  };

  const handleMouseOver = (planet : PlanetType) => {
    setHeading(planet.name)
  }


const handleMouseLeave = () => {
    setHeading('Solaris Space Center')
}
  
  
  return (
    <Routes>
      <Route path='/' element={<HomePage 
                                planetList = { planetList } 
                                handleMouseLeave={ handleMouseLeave } 
                                handleMouseOver={ handleMouseOver } 
                                heading = { heading } />} />
      <Route path='/favorites' element={<FavoritePage 
                                          favorites = { favorites } 
                                          handleMouseOver = {handleMouseOver} 
                                          handleMouseLeave = {handleMouseLeave}/>} />
      <Route path='/planet/:id' element={<PlanetDetailPage 
                                          planetList = { planetList } 
                                          favorites = { favorites }
                                          toggleFavorite =  { toggleFavorite }
                                          />
                                        }
      />
    </Routes>
  )
}

export default App
