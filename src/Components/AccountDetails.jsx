  import React from 'react';

const AccountDetails = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8 w-full">
      <h2 className="text-2xl font-bold text-red-700 mb-6 text-center lg:text-left">
        Account Details
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
        {/* Left Column */}
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-gray-700 mb-2">
            🏦 <span className="font-semibold text-[15px] lg:text-[17px]">Bank Name:</span> Moniepoint
          </p>
          <p className="text-gray-700 mb-2">
            💳 <span className="font-semibold text-[15px] lg:text-[17px]">Account Number:</span> 0123456789
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-gray-700 mb-2">
            📝 <span className="font-semibold text-[15px] lg:text-[17px]">Account Name:</span> IQ Hive Lounge
          </p>
          <p className="text-gray-600 mt-4 text-sm lg:mt-8 text-[15px] lg:text-[17px]">
            Please use this account for deposits and transfers only. Always confirm the amount before sending.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
