import React from "react";
import { useNavigate } from "react-router";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();
  const handlecard = (friend) => {
    navigate(`/friend-details/${friend.id}`);
  };

  return (
    
    <div
      onClick={() => handlecard(friend)}
      className="bg-base-100 shadow-sm rounded-lg p-6 text-center space-y-3"
    >
      <img
        className="w-22 h-22 rounded-full mx-auto"
        src={friend.picture}
        alt={friend.name}
      />
      <h1 className="font-semibold text-xl text-[#244d3f]">{friend.name}</h1>
      <p className="text-sm text-[#64748B]">
        {friend.days_since_contact}
        <span>d</span> ago
      </p>
      <div className="space-x-2">
        {friend.tags.map((tag, index) => (
          <span
            className="badge badge-soft badge-warning uppercase"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`px-2 py-1 font-medium text-white rounded-full ${friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "on-track" ? "bg-[#244d3f]" : "bg-[#EFAD44]"}`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default FriendCard;
