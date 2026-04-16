import AllFriends from "../../components/All Friends/AllFriends";
import Heading from "./Home UI/Heading";
import HomeStats from "./Home UI/HomeStats";


const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC] h-screen">
      <div className="container mx-auto px-2 lg:px-0 mx-auto py-20">
        <Heading></Heading>
        <HomeStats></HomeStats>
        <AllFriends></AllFriends>
      </div>
    </div>
  );
};

export default HomePage;
