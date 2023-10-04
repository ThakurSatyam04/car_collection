import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import CarDisplay from './CarDisplay';
import data from './cars';

function App() {
  const [cars,setCars] = useState(data);
  return (
    <>
      <Nav/>
      <CarDisplay cars = {cars}/>
    </>
  );
}

export default App;
