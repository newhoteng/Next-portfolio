'use client';

import { useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

const ColorThemeToggle = () => {
  // Set initial mode to light
  const [ isLightMode, setIsLightMode ] = useState<boolean>(true);

  // Add 'dark' class to html tag when in dark mode and remove otherwise
  useEffect(() => {
    if (!isLightMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isLightMode])

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