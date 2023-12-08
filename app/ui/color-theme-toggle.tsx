'use client';

import React, { useState } from 'react';
import { IoMdSunny } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

const ColorThemeToggle = () => {
  const [ isLightMode, setIsLightMode ] = useState<boolean>(true);

  return (
    <div 
      onClick={() => setIsLightMode(!isLightMode)}
      className='flex items-center justify-center rounded-full border border-red-600 w-8 h-8'
    >
      {isLightMode ? (
        <RiMoonFill />
      ) : (
        <MdWbSunny />
      )}
    </div>
  )
}

export default ColorThemeToggle