"use client"
import React, { useState } from 'react'
import MatchForm from './MatchForm'

const Header = () => {
    const [toggle,setToggle]=useState<boolean>(false);
  return (
    <div className='flex justify-between items-center bg-blue-500 p-6 relative'>
        <h1 className='font-extrabold text-white text-2xl'>CricketScore</h1>
        <div>

        <button
         onClick={()=>setToggle(true)}
         className='px-3 py-2 rounded-md bg-white font-semibold'
         >Create Team
         </button>

        </div>
      { toggle && <MatchForm setToggle={setToggle}/>}
    </div>
  )
}

export default Header