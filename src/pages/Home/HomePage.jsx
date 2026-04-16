import { Suspense } from "react";
import AllFriends from "../../components/All Friends/AllFriends";
import Heading from "./Home UI/Heading";
import HomeStats from "./Home UI/HomeStats";

const friendsPromise = fetch('Friends.json').then(res => res.json())
const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC]">

      <div className="w-11/12 mx-auto py-20">
        <Heading></Heading>
        <HomeStats></HomeStats>

        <Suspense fallback ={<div className="text-center py-8">
          <span className="loading loading-spinner text-primary"></span>
        </div>}>
          <AllFriends friendsPromise = {friendsPromise}></AllFriends>
        </Suspense>

        
      </div>
    </div>
  );
};

export default HomePage;
