import React, { useContext } from "react";
import { GoArchive } from "react-icons/go";
import { LuMessageSquareMore, LuPhoneCall } from "react-icons/lu";
import { MdOutlineVideocam } from "react-icons/md";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendProvider";

const FriendDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  // console.log(friends);

  const expectedFriend = friends.find((friend) => friend.id == id);
  // console.log(expectedFriend);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;


  const {handleTimeLine} = useContext(FriendContext)
 

  

  return (
    <div className="w-[70%] mx-auto flex justify-between gap-6 py-20">
      {/* left side */}
      <div className="w-[35%] h-full">
        <div className="bg-base-100 shadow-sm rounded-lg p-4 text-center space-y-3">
          <img
            className="w-22 h-22 rounded-full mx-auto"
            src={picture}
            alt={name}
          />
          <h1 className="font-semibold text-xl text-[#244d3f]">{name}</h1>
          <p className="text-sm text-[#64748B]">
            {days_since_contact}
            <span>d</span> ago
          </p>
          <div className="space-x-2">
            {tags.map((tag, index) => (
              <span
                className="badge badge-soft badge-warning uppercase"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className={`px-2 py-1 font-medium text-white rounded-full ${status === "overdue" ? "bg-[#EF4444]" : status === "on-track" ? "bg-[#244d3f]" : "bg-[#EFAD44]"}`}
          >
            {status}
          </span>
          <p className="text-sm text-[#64748B] mt-3">{bio}</p>
          <p className="text-sm text-[#64748B] mt-3">Preferred: {email}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-3">
          <button className="btn bg-white">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn bg-white"><GoArchive />
 Archive</button>
          <button className="btn bg-white"><RiDeleteBin5Line />
 Delete</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[65%] space-y-6 h-full">
        {/* first item */}
        <div className="flex justify-between items-center">
          <div className="bg-base-100 shadow-sm p-6 rounded-lg text-center">
            <h2 className="font-semibold text-3xl text-[#244d3f]">
              {days_since_contact}
            </h2>
            <p className="text-sm text-[#64748B]">Days since contact</p>
          </div>
          <div className="bg-base-100 shadow-sm p-6 rounded-lg text-center">
            <h2 className="font-semibold text-3xl text-[#244d3f]">{goal}</h2>
            <p className="text-sm text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="bg-base-100 shadow-sm p-6 rounded-lg text-center">
            <h2 className="font-semibold text-3xl text-[#244d3f]">
              {next_due_date}
            </h2>
            <p className="text-sm text-[#64748B]">Next Due</p>
          </div>
        </div>
        {/* 2nd item */}
        <div className="flex justify-between shadow-sm p-6 rounded-lg">
          <div className="space-y-3">
            <h3 className="font-medium text-xl text-[#244d3f]">
              Relationship Goal
            </h3>
            <p className="text-sm text-[#64748B]">Connect every 30 days</p>
          </div>
          <div>
            <button className="btn">Edit</button>
          </div>
        </div>
        {/* 3rd item */}
        <div className="shadow-sm p-6 rounded-lg">
          <h3 className="font-medium text-xl text-[#244d3f]">Quick Check In</h3>

          <div className="flex justify-between items-center mt-3">
            <div onClick={() => handleTimeLine('call', name)} className="btn px-8 py-8 space-x-1">
              <LuPhoneCall />
              <h4>Call</h4>
            </div>
            <div onClick={() => handleTimeLine('text', name)} className="btn px-8 py-8 space-x-1">
              <LuMessageSquareMore />
              <h4>Text</h4>
            </div>
            <div onClick={() => handleTimeLine('video', name)} className="btn px-8 py-8 space-x-1">
              <MdOutlineVideocam />
              <h4>Video</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
