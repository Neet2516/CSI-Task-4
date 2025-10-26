import React, { useState } from 'react';

const PromoCodeSection = ({ codes }) => {
    const [selectedPromo, setSelectedPromo] = useState(null);
    const [promoInput, setPromoInput] = useState('');

    const applyPromo = () => {
        // Mock application logic
        if (promoInput.toUpperCase() === "WELCOME10") {
            alert("Promo code applied successfully!");
        } else {
            alert("Invalid promo code.");
        }
    };

    const PromoOption = ({ code, saveAmount, details }) => (
        <div className="border-b last:border-b-0 py-3">
            <label className="flex items-start cursor-pointer space-x-3">
                <input
                    type="radio"
                    name="promoCode"
                    value={code}
                    checked={selectedPromo === code}
                    onChange={() => setSelectedPromo(code)}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm text-gray-800">{code}</span>
                        <span className="text-green-600 font-bold text-sm">Save ₹{saveAmount}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{details}</p>
                    <button className="text-blue-600 text-xs mt-1 hover:underline">
                        Terms & Conditions
                    </button>
                </div>
            </label>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Promo Code</h2>

            {/* Promo Input */}
            <div className="mb-6 space-y-3">
                <p className="text-sm font-medium text-gray-700">Select a Promo Code</p>
                <div className="flex flex-wrap">
                    <input
                        type="text"
                        placeholder="YOUR PROMO CODE"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-l-lg uppercase text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        onClick={applyPromo}
                        className="bg-gray-200 text-gray-700 px-4 py-3 rounded-r-lg font-semibold hover:bg-gray-300 transition duration-150"
                    >
                        Apply
                    </button>
                </div>
            </div>

            {/* Promo List */}
            <div className="space-y-1">
                {codes.map((promo) => (
                    <PromoOption key={promo.code} {...promo} />
                ))}
            </div>
        </div>
    );
};

export default PromoCodeSection;