import React, { useState } from 'react';
import CarsCard from './components/CarsCard';

const CarDisplay = ({ cars }) => {
  const itemsPerPage = 6;
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const nextPage = () => {
    if (currentPage < Math.ceil(cars.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center mt-2 flex-col p-10 '>
        <div className='w-11/12 flex flex-wrap gap-10 items-center justify-center '>
          {currentCars.map((car) => (
            <CarsCard key={car.id} {...car} />
          ))}
        </div>
        <div className='w-10/12 flex justify-end mt-6 gap-5 items-center'>
          <div className='border-2 border-black rounded-full flex items-center justify-center w-[20px] h-[20px] font-bold'>
            <p>{currentPage}</p>
          </div>
          {
            currentPage>1 && <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className='rounded-md border px-2 py-0 border-black hover:bg-gray-900 hover:text-white'
          >
            Previous
          </button>
          }

          {
            currentPage<totalPage && <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(cars.length / itemsPerPage)}
            className='rounded-md border px-2 py-0 border-black hover:bg-gray-900 hover:text-white'
          >
            Next
          </button>
          }         
          
        </div>
      </div>
    </div>
  );
};

export default CarDisplay;

