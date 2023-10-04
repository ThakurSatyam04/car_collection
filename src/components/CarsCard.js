import React from 'react'
import data from '../cars';

const CarsCard = ({id,url,year,make,model,type,capacity,control,oil,milage}) => {
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
      {/* <h2>{id}</h2> */}
      <div className='flex justify-between'>
        <p>Make : {make}</p>
        <p>{type}</p>
      </div>

      {/* <div className='description'>
        {description}
        <span className='read-more' onClick={readmoreHandler}>
            {readMore ? `Show Less` : `Read More`}
        </span>
      </div> */}
    </div>
      {/* <button className='btn-red' onClick={()=> removeTour(id)}>
          Not Interested
      </button> */}

    </div>
    </>
  )
}

export default CarsCard
