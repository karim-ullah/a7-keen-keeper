import React from "react";
import { FcCameraAddon } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";

const TimelineCard = ({ data }) => {
  const today = new Date();
  return (
    <div className="bg-base-100 p-4 rounded-lg shadow-sm flex gap-3 items-center">
      <div className="font-medium text-4xl">
        {data.info === "Call" ? (
          <IoIosCall />
        ) : data.info === "Text" ? (
          <LuMessageSquareMore />
        ) : (
          <FcCameraAddon />
        )}
      </div>
      <div>
        <h3>
          <span className="font-bold">{data.info}</span> with {data.name}
        </h3>
        <p>
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
