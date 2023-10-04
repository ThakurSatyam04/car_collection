import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import Drop_down from './Drop_down.js';
import carsData from '../data.js';
import CarDisplay from '../CarDisplay.js';

const Nav = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const [cars,setCars] = useState(carsData);

  const filteredCars = cars.filter((car)=>
    car.model.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearch = (event) =>{
    setSearchQuery(event.target.value);
  }
  return (
    <div className='flex items-center justify-center mt-4 '>
      <div className='w-11/12 shadow-md border-white border rounded-2xl p-3 flex gap-10 bg-[#d3e5ecd5]'>
        <div className='relative flex gap-5 items-center w-fit'>
            <input
            className='w-[250px] p-1 rounded-xl' 
            type="text" 
            placeholder='Search...' 
            value={searchQuery}
            onChange={handleSearch}
            />     
            <div className='absolute right-4'>
                <AiOutlineSearch/> 
            </div>    
        </div>
        <div className='flex gap-10'>
            <Drop_down title={"Relevance"}/>
            <Drop_down title={"All brands"}/>
        </div>        

      </div>
    </div>
  )
}

export default Nav
