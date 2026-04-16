import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../../context/FriendProvider";
import NoData from "../../../components/NoData/NoData";

const Stats = () => {
  const { storeInfo } = useContext(FriendContext);

  const callData = storeInfo.filter((info) => info.info === "Call");
  const textData = storeInfo.filter((info) => info.info === "Text");
  const videoData = storeInfo.filter((info) => info.info === "Video");
  console.log(callData);

  const data = [
    { name: "Call", value: callData.length, fill: "#0088FE" },
    { name: "Text", value: textData.length, fill: "#00C49F" },
    { name: "Video", value: videoData.length, fill: "#FFBB28" },
  ];

  return (
    <div className="w-full lg:w-[60%] mx-auto px-2 lg:px-0 h-screen">
      <div className="py-10">
        <h2 className="font-bold text-4xl text-[#244d3f]">
          Friendship Analytics
        </h2>

        <div className="bg-base-100 shadow-sm rounded-lg p-8 mt-6">
          <h3 className="font-medium text-xl text-[#244d3f] mb-3">
            By Interaction Type
          </h3>

          {storeInfo.length <= 0 ? (
            <NoData></NoData>
          ) : (
            <PieChart
              className="-space-y-6"
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "300px",
                margin: "auto",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend></Legend>
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
