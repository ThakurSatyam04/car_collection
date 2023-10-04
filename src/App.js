import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CarDisplay from './CarDisplay';
import data from './cars';
import carsData from './data'

function App() {
  const [cars,setCars] = useState(carsData);
  return (
    <>
      <Nav/>
      <CarDisplay cars = {cars}/>
    </>
  );
}

export default App;
