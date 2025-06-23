"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { showfeeds } from "@/app/api/query";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const DisplayFeedback = () => {


  const { data, isLoading, isError } = useQuery({
    queryKey: ["showfeeds"],
    queryFn: showfeeds
  });

  if (isLoading)
    return (
      <p className="text-center text-lg text-blue-400 py-6 animate-pulse">
        Loading feedbacks...
      </p>
    );
  if (isError)
    return (
      <p className="text-center text-red-500 text-lg py-6">
        Error loading feedbacks
      </p>
    );

  const fetchdata = [...data].reverse();

  return (
    <div className="w-full  bg-gray-900 py-10 px-4 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center border-b pb-4 border-gray-700">
          {fetchdata.length>0?(
            <p>What People Are Saying</p>
          ):(<p>No feedback</p>)}
      </h2>

      

      <div className="flex flex-col items-center gap-4">
        {fetchdata?.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-300 mb-3 text-base">{item.feed}</p>
            <div className="flex gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <StarOutlinedIcon key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFeedback;

