import React, { use } from 'react';
import FriendCard from '../../pages/Home/Home UI/FriendCard';



const AllFriends = ({friendsPromise}) => {
    const friends = use(friendsPromise)
    // console.log(friends);
    
    return (
        <div>
            <div>
                <h3 className='font-semibold text-2xl'>Your Friend</h3>
            </div>
            
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4'>
                {
                friends.map(friend => <FriendCard key={friend.id} friend ={friend}></FriendCard>)
            }
            </div>
            
        </div>
    );
};

export default AllFriends;