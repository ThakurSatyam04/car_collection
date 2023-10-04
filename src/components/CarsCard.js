import React from 'react'
import data from '../cars';

const CarsCard = ({id,image,title,start_production,
}) => {
  return (
    <>
    <div className='w-[300px] h-[300px] bg-[#d3e5ecd5] flex flex-col rounded-md'>
      <img src={image} className='h-[200px] rounded-t-md' alt="" />


    <div className='tour-info p-1'>
      <h2>{title}</h2>
      <p>{start_production}</p>

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
