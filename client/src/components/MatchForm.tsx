"use client";
import { MatchType } from "@/types/MatchForm";
import React, { useState } from "react";

const MatchForm = ({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<MatchType>({
    venue: "",
    status: "",
    date: "",
    overPerInnings: 0,
  });
  const isOk = () => {
    if (data.venue && data.status && data.date && data.overPerInnings > 0) {
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Data: ", JSON.stringify(data));
  };
  
  return (
    <div className="flex items-center justify-center absolute bg-black bg-opacity-40 min-h-screen min-w-full top-0 left-0">
      <div className="flex flex-col gap-5 bg-white rounded p-6 relative">
        <span
          onClick={() => setToggle(false)}
          className="absolute top-1 right-4 cursor-pointer"
        >
          X
        </span>
        <h1 className="font-bold text-2xl">Enter The Match Details</h1>
        <div className="flex flex-col gap-3">
          <input
            onChange={(e) => setData({ ...data, venue: e.target.value })}
            className="px-3 py-2 outline-none  border-blue-300 border-solid border-2 rounded"
            type="text"
            placeholder="Venue"
          />
          <input
            onChange={(e) => setData({ ...data, status: e.target.value })}
            className="px-3 py-2 outline-none  border-blue-300 border-solid border-2 rounded"
            type="text"
            placeholder="Status"
          />
          <input
            onChange={(e) => setData({ ...data, date: e.target.value })}
            className="px-3 py-2 outline-none  border-blue-300 border-solid border-2 rounded"
            type="date"
            placeholder="Date"
          />
          <input
            onChange={(e) =>
              setData({ ...data, overPerInnings: Number(e.target.value) })
            }
            className="px-3 py-2 outline-none  border-blue-300 border-solid border-2 rounded"
            type="number"
            placeholder="Over Per Innings"
          />
          <button
            onClick={handleSubmit}
            disabled={isOk()}
            className={`px-3 py-2 rounded-md font-semibold cursor-pointer
    ${
      isOk()
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchForm;
