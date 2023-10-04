import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CarDisplay from './CarDisplay';
import carsData from './data'

function App() {
  const [searchQuery,setSearchQuery] = useState('');
  // const [filteredCars, setFilteredCars] = useState([]);
  const [isSearched,setIsSearched] = useState(false)
  

  const [cars,setCars] = useState(carsData);
  return (
    <>
      <Nav setCars={setCars} cars={cars} setSearchQuery={setSearchQuery} searchQuery={searchQuery} setIsSearched={setIsSearched}/>
      <CarDisplay cars = {cars} searchQuery={searchQuery} isSearched={isSearched}/>
    </>
  );
}

export default App;
