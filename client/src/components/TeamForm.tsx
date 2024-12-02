"use client";
import React, { useState } from "react";

const TeamForm = ({
  setTeamToggle,
}: {
  setTeamToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<string>("");
  const isOk = () => {
    if (data) {
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
          onClick={() => setTeamToggle(false)}
          className="absolute top-1 right-4 cursor-pointer"
        >
          X
        </span>
        <h1 className="font-bold text-2xl">Enter The Team Details</h1>
        <div className="flex flex-col gap-3">
          <input
            onChange={(e) => setData( e.target.value) }
            className="px-3 py-2 outline-none  border-blue-300 border-solid border-2 rounded"
            type="text"
            placeholder="Team Name"
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
            Create Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamForm;
