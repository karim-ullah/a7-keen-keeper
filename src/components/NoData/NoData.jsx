import React from 'react';

const NoData = () => {
    return (
        <div className='bg-base-100 shadow-sm rounded-l-lg p-10 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-xl'>No Data Found</h1>
            <p>Go to home and select</p>
        </div>
    );
};

export default NoData;