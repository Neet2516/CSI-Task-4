import React from 'react';
import BookingDetailsCard from './BookingDetailsCard';
import TravellerDetailsForm from './TravellerDetailsForm';
import FareDetailsCard from './FareDetailsCard';
import PromoCodeSection from './PromoCodeSection';

// --- MOCK DATA ---
const mockBooking = {
    airline: "Akash Air",
    flightNo: "AA-2975",
    aircraft: "Airbus A321",
    departure: { city: "New Delhi, IN", airport: "Indira Gandhi International Airport (T-3)", time: "08:00", date: "Tue, 07 OCT" },
    arrival: { city: "Landour, IN", airport: "Dehradun Airport (T-3)", time: "13:00", date: "Tue, 07 OCT" },
    duration: "2h 15m",
    stops: "0 stop",
    baggage: "15 kgs",
    travelClass: "Economy"
};

const mockFare = {
    basicFare: 4500,
    feeSurcharges: 898,
    discount: 559,
    earnCash: 250,
};

const mockPromos = [
    { code: "YATRAHSBC", saveAmount: 799, details: "Up to Rs. 3,000 OFF on using HSBC Bank Credit Card." },
    { code: "YATRARBL", saveAmount: 799, details: "Up to Rs. 1,800 OFF on using RBL bank credit card." },
    { code: "MBKUPI", saveAmount: 600, details: "Flat Rs. 600 OFF on using Mobikwik UPI payment option." },
];
// -----------------

const BookingReviewPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
            
            {/* Header */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">
                Review Your Booking
            </h1>

            {/* Flight Details Section (Full Width) */}
            <div className="mb-10">
                <BookingDetailsCard data={mockBooking} />
            </div>

            {/* Main Content Grid (Two Columns: Content & Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column (Traveller Details) - 2/3 width */}
                <div className="lg:col-span-2 space-y-10">
                    <TravellerDetailsForm />
                </div>

                {/* Right Column (Fare & Promo) - 1/3 width */}
                <div className="lg:col-span-1 space-y-8">
                    <FareDetailsCard data={mockFare} />
                    <PromoCodeSection codes={mockPromos} />
                </div>

            </div>
        </div>
    );
};

export default BookingReviewPage;