import React from 'react';

const FareDetailsCard = ({ data }) => {
    const totalFare = data.basicFare + data.feeSurcharges - data.discount;
    const totalSavings = data.discount;

    const formatCurrency = (amount) => `₹ ${amount.toLocaleString('en-IN')}`;

    const DetailRow = ({ label, amount, isNegative = false, isBold = false }) => (
        <div className={`flex justify-between py-1 ${isBold ? 'font-semibold text-gray-900' : 'text-sm text-gray-600'}`}>
            <span className="text-gray-700">{label}</span>
            <span className={isNegative ? 'text-red-600' : 'text-gray-800'}>
                {isNegative ? '-' : ''}
                {formatCurrency(amount)}
            </span>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
                <h2 className="text-xl font-semibold text-gray-800">Fare Details</h2>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    View Fare Rules
                </button>
            </div>

            {/* Fare Breakdown */}
            <div className="space-y-1 mb-4">
                <DetailRow label="Basic Fare (1 Traveller) *" amount={data.basicFare} />
                <DetailRow label="Fee & Surcharges *" amount={data.feeSurcharges} />
                <DetailRow label="Discount" amount={data.discount} isNegative={true} />
            </div>

            {/* Total Fare */}
            <div className="border-t pt-3 mb-4">
                <DetailRow label="Total Fare" amount={totalFare} isBold={true} />
            </div>

            {/* You Pay Section (Highlighted) */}
            <div className="bg-blue-50/50 border-y border-gray-200 py-3 mb-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>You Pay</span>
                    <span>{formatCurrency(totalFare)}</span>
                </div>
            </div>

            {/* Savings & Earnings */}
            <div className="pt-3 space-y-1 text-sm">
                <DetailRow label="Total Savings" amount={totalSavings} />
                <DetailRow label="Earn eCash" amount={data.earnCash} />
            </div>
        </div>
    );
};

export default FareDetailsCard;