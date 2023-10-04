import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CarDisplay from './CarDisplay';
import data from './cars';
import carsData from './data'

function App() {
  const [searchQuery,setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  

  const [cars,setCars] = useState(carsData);
  return (
    <>
      <Nav setFilteredCars={setFilteredCars} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <CarDisplay cars = {cars} searchQuery={searchQuery} filteredCars={filteredCars}/>
    </>
  );
}

export default App;
