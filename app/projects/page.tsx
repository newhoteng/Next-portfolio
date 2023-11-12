'use client';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from 'next/link';


import Image from 'next/image';


const dataSources = ['/Conference/Home-desktop.png', '/Conference/Home-mobile-callapse.png', '/Conference/Home-desktop.png', '/Conference/Home-desktop.png'];

const Projects = () => {
  const [imgUrl, setImgUrl] = useState(dataSources[0]);

  // const handleScroll = (e: any) => {
  //   setTimeout(() => {
  //     const index = e.target.scrollTop / (e.target.scrollHeight / dataSources.length);
  //     const selectedSource = dataSources[index];
  //     if (selectedSource === imgUrl) {
  //       return;
  //     }
  //     setImgUrl(selectedSource);
  //   }, 500);
  // }

  return (
    <section className='h-full'>
      <div className='flex items-center justify-center h-[30%] w-full'>
        <div className='shadow-lg aspect-video h-4/5'></div>
      </div>
      <div className='relative py-8 h-[70%]'>
        <div className='absolute top-0 w-full flex items-center justify-center'>
          <FiChevronUp className='text-3xl'/>
        </div>
        <div className='absolute bottom-0 w-full flex items-center justify-center'>
          <FiChevronDown className='text-3xl'/>
        </div>
        <div className='h-full overflow-y-scroll no-scrollbar'>
          {/* map and display a list of selected projects */}
          <Link href='/' className='py-4 px-4 flex items-center justify-between'>
            <div className='text-2xl font-semibold'>Metrics</div>
            <div className='italic'>Frontend</div>
          </Link>
        </div>
      </div>

      {/* <div className='hidden border-2 h-1/3 items-center justify-center'>
        <div className='relative max-h-full w-full max-w-[800px] aspect-video rounded-2xl border-2 border-red-500'>
          <Image
            src={imgUrl}
            fill 
            alt='Picture of the project'
            className='rounded-2xl shadow-lg object-cover'
          />
        </div>
      </div> */}
      {/* <div className='overflow-y-scroll border-2 h-1/2'>
        
      </div> */}
    </section>
  )
}

export default Projects

// snap-mandatory snap-y no-scrollbar onScroll={handleScroll} snap-always snap-center  overflow-y-scroll no-scrollbar