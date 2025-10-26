import React from 'react';

const BookingDetailsCard = ({ data }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-scroll">
        
            <div className="p-4 md:p-6 bg-blue-50/50">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <span className='mr-4'>{data.departure.city.split(',')[0]} - {data.arrival.city.split(',')[0]}</span>
                    <span className="text-sm font-medium text-gray-500">{data.stops}</span>
                    <span className="text-sm font-medium text-blue-600">Total Time: {data.duration}</span>
                </div>
            </div>

            {/* Body: Flight Segments */}
            <div className="flex border-l-[6px] border-blue-600">
                
                {/* Left Stripe: Departure Info */}
                <div className="w-1/4 p-4 text-center border-r border-gray-200 bg-gray-50 flex flex-col justify-center">
                    <div className="text-xs uppercase text-gray-600 mb-1">Departure</div>
                    <div className="text-lg font-semibold text-gray-800">{data.airline}</div>
                    <div className="text-sm text-gray-600">{data.flightNo}</div>
                    <div className="text-xs text-gray-500">{data.aircraft}</div>
                </div>

                {/* Center: Timeline/Details */}
                <div className="flex-1 flex items-center justify-between p-4 md:p-6">
                    
                    {/* Departure City/Time */}
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{data.departure.time}</div>
                        <div className="text-sm text-gray-600">{data.departure.city}</div>
                        <div className="text-xs text-gray-500 mt-1">{data.departure.date}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{data.departure.airport}</div>
                    </div>

                    {/* Middle Info */}
                    <div className="flex flex-col items-center mx-4 text-center">
                        <div className="text-xs text-gray-700 font-medium border border-blue-500 px-3 py-1 rounded-full bg-blue-50/50">
                            Free Meal | {data.baggage}
                        </div>
                        <div className="h-0.5 w-24 bg-gray-300 my-4"></div>
                        <div className="flex space-x-2 w-fit text-sm">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded font-medium w-fit">
                                <pre>{data.travelClass}
                                   |
                                Saver Fare</pre>
                            </button>
                        </div>
                    </div>
                    
                    {/* Arrival City/Time */}
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{data.arrival.time}</div>
                        <div className="text-sm text-gray-600">{data.arrival.city}</div>
                        <div className="text-xs text-gray-500 mt-1">{data.arrival.date}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{data.arrival.airport}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetailsCard;