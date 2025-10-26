import React, { useState } from 'react';

const TravellerDetailsForm = () => {
    const [travellerData, setTravellerData] = useState({});

    const handleChange = (e) => {
        setTravellerData({ ...travellerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Traveller Data Submitted:', travellerData);
        // Add form validation and navigation logic here
    };

    const Input = ({ name, placeholder, type = "text", className = "" }) => (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${className}`}
            onChange={handleChange}
        />
    );

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4">
                Enter Traveller Details
            </h2>

            {/* Contact Details */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">Contact Details</h3>
                <div className="flex flex-wrap md:flex-nowrap gap-2 space-x-4">
                    <Input name="email" placeholder="Email ID" type="email" />
                    <div className="flex w-full">
                        {/* Country Code Input */}
                        <select className="p-3 border border-gray-300 rounded-l-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500">
                            <option value="+91">+91</option>
                        </select>
                        <Input name="mobile" placeholder="Mobile Number" type="tel" className="rounded-l-none" />
                    </div>
                </div>
                <p className="text-sm text-gray-500">
                    Your booking details will be sent to this email address and mobile number.
                </p>
            </div>

            {/* Traveller Information */}
            <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium text-gray-700 border-t pt-4">Traveller Information</h3>
                <p className="text-sm hover:text-red-600 font-medium bg-red-50 p-3 rounded-lg">
                    <span className="font-bold">Important Note:</span> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.
                </p>

                {/* Adult 1 Details */}
                <div className="space-y-3">
                    <h4 className="text-base font-semibold text-gray-700">Adult 1</h4>
                    <div className="flex space-x-4">
                        <select
                            name="title"
                            className="w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            onChange={handleChange}
                        >
                            <option value="">Title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                        <Input name="firstName" placeholder="First and Middle Name" className="w-1/2" />
                        <Input name="lastName" placeholder="Last Name" className="w-1/4" />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-1/3 py-3 mt-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-150"
            >
                Continue
            </button>
        </form>
    );
};

export default TravellerDetailsForm;