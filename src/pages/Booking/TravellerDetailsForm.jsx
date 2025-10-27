import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';

// ✅ Move Input outside to prevent re-render issues
const Input = ({ name, placeholder, type = "text", className = "", value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value || ''} // Controlled value
    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${className}`}
    onChange={onChange}
  />
);

const TravellerDetailsForm = () => {
  const [travellerData, setTravellerData] = useState({
    email: '',
    countryCode: '+91',
    mobile: '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravellerData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Traveller Data Submitted:', travellerData);
    alert('Form submission simulated. Check console for data.');
    navigate('/random'); // Navigate
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4">
        Enter Traveller Details
      </h2>

      {/* Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-700">Contact Details</h3>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="md:w-1/2">
            <Input
              name="email"
              type="email"
              placeholder="Email ID"
              value={travellerData.email}
              onChange={handleChange}
            />
          </div>

          <div className="md:w-1/2 flex">
            <select
              name="countryCode"
              value={travellerData.countryCode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-l-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 w-24 flex-shrink-0"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
            <Input
              name="mobile"
              placeholder="Mobile Number"
              type="tel"
              className="rounded-l-none"
              value={travellerData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Traveller Info */}
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-medium text-gray-700 border-t pt-4">Traveller Information</h3>
        <p className="text-sm text-red-700 font-medium bg-red-50 p-3 rounded-lg border border-red-200">
            <span className="font-bold">Important Note:</span> Please ensure that the names of the passengers on the travel documents is the same as on their government issued identity proof.
        </p>
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700">Adult 1</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              name="title"
              value={travellerData.title}
              onChange={handleChange}
              className="sm:w-1/5 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <Input
              name="firstName"
              placeholder="First Name (and Middle Name)"
              className="sm:w-2/5"
              value={travellerData.firstName}
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              className="sm:w-2/5"
              value={travellerData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Link to="/MainPage/Random">
      <button
        type="submit"
        className="w-full sm:w-1/3 py-3 mt-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-150" 
      >
        Continue
      </button> </Link>
    </form>
  );
};

export default TravellerDetailsForm;


