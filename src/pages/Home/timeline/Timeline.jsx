import React, { useContext } from 'react';
import { FriendContext } from '../../../context/FriendProvider';
import TimelineCard from './TimelineCard';

const Timeline = () => {
    const {storeInfo} = useContext(FriendContext)
    console.log(storeInfo);
    
    return (
        <div className='container mx-auto px-2 lg:px-0 py-10'>

            <div>
                <h1 className='font-bold text-5xl'>Timeline</h1>
                <form className='py-6'>
                    <select className='btn btn-wide bg-base-100 text-left font-normal shadow-sm rounded-lg'>
                        <option value="" selected>Filter Timeline</option>
                        <option value="">Call</option>
                        <option value="">Text</option>
                        <option value="">Video</option>
                    </select>
                </form>
            </div>
            <div className='space-y-6'>
                {
                storeInfo.map((data,index) => <TimelineCard key={index} data = {data}></TimelineCard>)
            }
            </div>
        </div>
    );
};

export default Timeline;