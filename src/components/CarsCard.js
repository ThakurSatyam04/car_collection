import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const CarsCard = ({id,url,year,make,model,type,capacity,control,oil,milage,price}) => {
  const [isLiked,setIsLiked] = useState(false);

  const handleClick=()=>{
    setIsLiked(!isLiked);
  }
  return (
    <>
    <div className='w-[300px] bg-[#d3e5ecd5] bg-white flex flex-col rounded-md shadow-md p-1 hover:scale-105 transition-transform duration-300'>
      <img src={url} className='h-[200px] rounded-md' alt="" />


    <div className='tour-info p-2'>
      <div className='flex justify-between'>
        <h2 className='font-semibold'>{model}</h2>
        <p className='text-center border text-sm border-dashed border-black rounded-full p-1'>{year}</p>
      </div>
      <div className='justify-between grid grid-cols-2 gap-2 mb-4'>
        <p>{capacity}</p>
        <p>{oil}</p>
        <p>{milage}</p>
        <p>{control}</p>
      </div>
      <div className='flex justify-between mb-2'>
        <p>Make : {make}</p>
        <p>{type}</p>
      </div> <hr />
      <div className='w-full flex items-center justify-between mt-2'>
        <div>
          <h2 ><span className='font-bold'>{price}</span><sub>/month</sub></h2>
        </div>
        <div className='flex gap-3'>
          <div className='w-[30px] h-[30px] bg-white rounded-full right-2  grid place-items-center' onClick={handleClick}>
            {
              isLiked ? ( <FcLike fontSize = '1.4rem'/>) : (<FcLikePlaceholder fontSize='1.4rem'/>)
            }
          </div>
          <button className='bg-blue-500 p-1 text-white rounded-md hover:bg-blue-600'>Rent now</button>
        </div>
      </div>
      </div>
      <div>
    </div>
    </div>
    </>
  )
}

export default CarsCard
