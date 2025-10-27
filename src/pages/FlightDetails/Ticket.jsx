import React, { useState } from 'react';
// Assuming 'flightscollect' contains the array of flight objects
import flightscollect from './Data'; 
import { Link } from 'react-router';

const Ticket = () => {
  // Use the first flight object from the imported collection
  const flightData = flightscollect.flights[0];

  // 1. Define State and Helper Functions (MANDATORY FIX)
  const [selectedFareId, setSelectedFareId] = useState('Saver Fare'); // Initial state based on fare name

  const handleFareChange = (fareName) => {
    setSelectedFareId(fareName);
  };

  const formatPrice = (price) => `₹${price.toLocaleString()}`;
  
  const fareOptionsArray = Object.keys(flightData.fares).map(key => ({
    name: key,
    price: flightData.fares[key],
    id: key // Using the fare name as the ID
  }));


  return (
    
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-2xl overflow-hidden">
      <Link to="/MainPage"><button className='absolute left-0 ml-5'> 🡨</button></Link>
      {/* 1. Flight Details Section */}
      <div className="p-6 md:p-8 border-b border-gray-100">
        <div className="flex justify-between items-start flex-wrap">
          
          {/* Airline Info */}
          <div className="flex items-center space-x-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="w-8 h-8 flex items-center justify-center">
              {/* Placeholder for Akash Air Logo */}
              <div className="text-xl font-bold text-orange-600">A</div> 
            </div>
            <div>
              {/* FIX: Use flightName and extract airline name/code */}
              <p className="text-sm font-semibold">{flightData.flightName.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{flightData.flightName.split(' ')[1]}</p>
              <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                {flightData.duration}
              </span>
            </div>
          </div>

          
          <div className="flex justify-between w-full md:w-2/3 lg:w-3/5 items-center">
            
            <div className="text-left flex-shrink-0">
              
              <p className="text-base font-bold text-gray-800">{flightData.departure.location}</p>
              <p className="text-2xl font-bold mt-1 text-gray-900">{flightData.departure.time}</p>
              <p className="text-sm text-gray-500">14 FEB</p> 
              <p className="text-xs text-gray-500 mt-1">{flightData.departure.airport}</p>
            </div>

            <div className="flex flex-col items-center mx-4 text-center flex-shrink">
              <span className="text-sm text-gray-500 mb-1">{flightData.duration}</span>
              <div className="w-20 h-px bg-gray-400 my-1"></div>
              <span className="text-xs text-gray-600 mt-1 whitespace-nowrap">{flightData.stopType}</span>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-base font-bold text-gray-800">{flightData.arrival.location}</p>
              <p className="text-2xl font-bold mt-1 text-gray-900">{flightData.arrival.time}</p>
              <p className="text-sm text-gray-500">14 NOV</p> 
              <p className="text-xs text-gray-500 mt-1">{flightData.arrival.airport}</p>
            </div>
          </div>

          {/* Book Now Button */}
          <Link to="/MainPage/booking">
          <button className="hidden md:block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-150 flex-shrink-0">
            Book Now
          </button>
          </Link>
        </div>
      </div>
      
      {/* 2. Fare Options Section */}
      <div className="bg-blue-50 p-6 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Fare Options</h3>
          <a href="#" className="text-sm text-blue-600 hover:underline">View Details</a>
        </div>

        {/* Fare Cards Container (Uses a responsive grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* FIX: Map over the array derived from the flightData.fares object */}
          {fareOptionsArray.map((fare) => (
            <div
              key={fare.id}
              onClick={() => handleFareChange(fare.id)}
              className={`
                p-4 border-2 rounded-lg cursor-pointer transition duration-200
                ${selectedFareId === fare.id 
                  ? 'border-blue-500 bg-white shadow-md' // Selected Style
                  : 'border-gray-200 bg-white hover:border-blue-300' // Default/Hover Style
                }
              `}
            >
              <div className="flex items-center space-x-3">

                <div 
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition duration-200 ${
                    selectedFareId === fare.id 
                      ? 'border-blue-500' 
                      : 'border-gray-400'
                  }`}
                >
                  {selectedFareId === fare.id && (
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  )}
                </div>
                
                {/* Fare Name and Price */}
                <div>
                  <p className="text-lg font-semibold text-gray-900">{fare.name}</p>
                  <p className="text-xl font-extrabold text-blue-600 mt-1">
                    {/* FIX: Call the helper function to format the price */}
                    {formatPrice(fare.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Book Now Button */}
        <div className="mt-6 md:hidden">
          <Link to="/MainPage/booking">
          <button className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-150">
            Book Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Ticket