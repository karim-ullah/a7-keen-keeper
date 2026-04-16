import React, { useContext } from 'react';

const HomeStats = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-10">
        <div className="bg-base-100 p-8 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-3xl text-[#244D3F]">10</p>
            <p>Total Friends</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-3xl text-[#244D3F]">3</p>
            <p>On Track</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-3xl text-[#244D3F]">6</p>
            <p>Need Attention</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center shadow-sm">
            <p className="font-semibold text-3xl text-[#244D3F]">12</p>
            <p>Interactions This Month</p>
        </div>
        
      </div>
    );
};

export default HomeStats;