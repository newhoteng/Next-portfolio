'use client';

import { useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

const ColorThemeToggle = () => {
  // Set initial mode to light
  const [ isLightMode, setIsLightMode ] = useState<boolean>();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') setIsLightMode(true);
    else { setIsLightMode(false) };
  }, []);

  // Add 'dark' class to html tag when in dark mode and remove otherwise
  useEffect(() => {
    if (!isLightMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light")
    }
  }, [isLightMode])

  return (
    <div 
      onClick={() => setIsLightMode(!isLightMode)}
      className='bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-full borde borde-red-600 w-8 h-8'
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