'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { lobster } from '@/app/ui/fonts';


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
    <section className='h-[calc(100vh-8rem)]'>
      <div className='h-full border border-red-600'>
        <div className='flex items-center justify-center text-white w-full bg-[#fc5193] aspect-[4/3] rounded-3xl border-2 border-green-600 h-3/5'>
          <p style={lobster.style} className="text-4xl tracking-widest">METRICS</p>
        </div>
        <div className='flex items-center justify-center h-2/5 border-2 border-blue-600'>
          <Link href='/projects/metrics' className='block'>
            <h2 className='border-2 text-2xl font-semibold'>Metrics</h2>
            <p className='border-2 italic'>Web Development - Frontend</p>
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