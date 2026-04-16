import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../../../context/FriendProvider';
import TimelineCard from './TimelineCard';
import NoData from '../../../components/NoData/NoData';

const Timeline = () => {
    const {storeInfo, setStoreInfo} = useContext(FriendContext)
    const [sortType, setSortType] = useState('')
    const [filteredInfo, setFilteredInfo] = useState(storeInfo)
    
    const handleChange = (e) =>{
        setSortType(e.target.value)
    }
    // console.log(sortType)


    useEffect(() =>{
        if(sortType){
            if(sortType === 'Call'){
                const sortedCallData = [...storeInfo].sort((a,b) => a.info && b.info === 'Call' )
                const newCallData = sortedCallData.filter(data => data.info === 'Call')
                setFilteredInfo(newCallData)
                // console.log(newCallData)
                
            }else if(sortType === 'Text'){
                const sortedTextData = [...storeInfo].sort((a,b) => a.info && b.info === 'Text')
                const newTextData = sortedTextData.filter(data => data.info === 'Text')
                setFilteredInfo(newTextData)
            }
            else{
                const sortedVideoData = [...storeInfo].sort((a,b) => a.info && b.info === 'Video')
                const newVideoData = sortedVideoData.filter(data => data.info === 'Video')
                setFilteredInfo(newVideoData)
            }
        }
    },[sortType])
    
    
                
        
    
    
    return (
        <div className='w-11/12 mx-auto py-10 h-screen'>

            <div>
                <h1 className='font-bold text-5xl'>Timeline</h1>
                <form className='py-6'>
                    <select onChange={handleChange} className='btn btn-wide bg-base-100 text-left font-normal shadow-sm rounded-lg'>
                        <option defaultChecked value="Filter">Filter Timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </form>
            </div>
            {
                storeInfo.length <= 0 ? <NoData></NoData> : <div className='space-y-6'>
                {
                filteredInfo.map((data,index) => <TimelineCard key={index} data = {data}></TimelineCard>)
            }
            </div>
            }
            
        </div>
    );
};

export default Timeline;