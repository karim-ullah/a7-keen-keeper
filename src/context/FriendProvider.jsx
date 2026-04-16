import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext()

const FriendProvider = ({children}) => {
    const [storeInfo, setStoreInfo] = useState([])

     const handleTimeLine = (text,name) =>{
    // console.log(info);
    if(text === 'call'){

      const callInfo = [{
        info: 'Call',
        name: name
      }]

      const updated = [...storeInfo, ...callInfo]
      setStoreInfo(updated)
      toast.success(`Call with ${name} successful`)
      
      
    }else if(text === 'text'){
      const textInfo = [{
        info: 'Text',
        name: name
      }]
      const updated = [...storeInfo, ...textInfo]
      setStoreInfo(updated)
      toast.success(`Text with ${name} successful`)
    }else{
      const videoInfo = [{
        info: 'Video',
        name: name
      }]
      const updated = [...storeInfo, ...videoInfo]
      setStoreInfo(updated)
      toast.success(`Video with ${name} successful`)
      
    }
    
  }
    const data = {
        storeInfo,
        setStoreInfo,
        handleTimeLine

    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;