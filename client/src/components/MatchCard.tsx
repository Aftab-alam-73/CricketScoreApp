"use client"
import React, { useState } from 'react'
import TeamForm from './TeamForm';
import PlayerForm from './PlayerForm';

const MatchCard = () => {
    const [teamToggle,setTeamToggle]=useState<boolean>(false);
    const [playerToggle,setPlayerTeamToggle]=useState<boolean>(false);
  return (
    <div className='flex flex-col gap-5 shadow w-[400px] p-5 bg-gray-300 rounded '>
        <div className='flex justify-between'>
        <div className='flex  items-center gap-4'>
         <span className='w-9 h-9 rounded-full bg-gray-500'></span>   
        <p>INDIA</p>
        </div>
        <div>742-2(12.1)</div>
        </div>
        <div className='flex justify-between'>
        <div className='flex  items-center gap-4'>
         <span className='w-9 h-9 rounded-full bg-gray-500'></span>   
        <p>PAKISTAN</p>
        </div>
        <div>74-4(13.4)</div>
        </div>
        <div className='flex justify-between'>
            <span className='text-red-400'>Status</span>
            <div className='flex items-center gap-3'>
                <button  onClick={()=>setPlayerTeamToggle(true)} className='px-3 py-2 bg-blue-500 rounded hover:bg-blue-400'>Add Players</button>
                <button onClick={()=>setTeamToggle(true)} className='px-3 py-2 bg-blue-500 rounded hover:bg-blue-400'>Add Teams</button>
            </div>
        </div>
      {teamToggle && <TeamForm setTeamToggle={setTeamToggle}/>}
      {playerToggle && <PlayerForm setPlayerToggle={setPlayerTeamToggle}/>}
    </div>
  )
}

export default MatchCard