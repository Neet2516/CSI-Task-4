import React from 'react';
import plane from '../../assets/FlightDetails/plane.png'
import filter from '../../assets/FlightDetails/filter.png'
import Ticket from './ticket';
const FlightDetails = () => {
  return (
    <>
    <div className="bg-white px-4 md:px-6 pt-4 pb-2 shadow-lg">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-end space-x-2 w-full md:w-11/12 mb-4 md:mb-0">
          <div className="hidden sm:block pt-4 pr-4 flex-shrink-0">
            <img src={plane} className='h-10' alt="" />
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 md:gap-0">
            <div className="col-span-1 border-b-2 border-transparent hover:border-red-500 transition duration-150 cursor-pointer pr-4">
              <p className="text-xs sm:text-sm text-gray-500">From</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">New Delhi (DEL)</p>
            </div>

            <div className="hidden md:flex items-center justify-center p-2 col-span-1 flex-shrink-0">
              <svg className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>

            <div className="col-span-1 border-b-2 border-transparent hover:border-red-500 transition duration-150 cursor-pointer pr-4">
              <p className="text-xs sm:text-sm text-gray-500">To</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">Landour (DDN)</p>
            </div>

            

            <div className="col-span-1 border-b-2 border-transparent hover:border-red-500 transition duration-150 cursor-pointer pr-4">
              <p className="text-xs sm:text-sm text-gray-500">Date</p>
              <div className="flex items-center text-base sm:text-lg font-semibold text-gray-900">
                <span>6 Oct</span>
                <span className="mx-1 text-gray-400 font-normal">-</span>
                <span className="text-gray-900">Return</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 border-b-2 border-transparent hover:border-red-500 transition duration-150 cursor-pointer pr-4">
              <p className="text-xs sm:text-sm text-gray-500">Traveller(s), class</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">1 Traveller, Economy</p>
            </div>
          </div>
        </div>

        <button className="w-full md:w-auto flex-shrink-0 px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-150">
          Search Again
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center py-2 space-y-2 sm:space-y-0 sm:space-x-12">
        <div className="flex items-center space-x-2">
          <img src={filter} className="h-5" alt="" />
          <a href="#" className="text-blue-600 font-medium hover:underline sm:hidden">More Filters</a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-gray-600">
          <span className="flex items-center cursor-pointer hover:text-red-500">Price <span className="ml-1 text-xs">^</span></span>
          <span className="flex items-center cursor-pointer hover:text-red-500">Depart Time <span className="ml-1 text-xs">^</span></span>
          <span className="flex items-center cursor-pointer hover:text-red-500">Airlines <span className="ml-1 text-xs">^</span></span>
          <span className="flex items-center cursor-pointer hover:text-red-500">Aircraft <span className="ml-1 text-xs">^</span></span>
          <a href="#" className="text-blue-600 hidden sm:block hover:underline">More Filters</a>
        </div>
      </div>
    </div>
    <Ticket/>
    </>
    )
};

export default FlightDetails ;
