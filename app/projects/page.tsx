'use client';
import React, { useState } from 'react';
import Image from 'next/image';


const dataSources = ['/Conference/Home-desktop.png', '/Conference/Home-mobile-callapse.png', '/Conference/Home-desktop.png', '/Conference/Home-desktop.png'];

const Projects = () => {
  const [imgUrl, setImgUrl] = useState(dataSources[0]);

  const handleScroll = (e: any) => {
    setTimeout(() => {
      const index = e.target.scrollTop / (e.target.scrollHeight / dataSources.length);
      const selectedSource = dataSources[index];
      if (selectedSource === imgUrl) {
        return;
      }
      setImgUrl(selectedSource);
    }, 500)
    // const index = e.target.scrollTop / (e.target.scrollHeight / dataSources.length);
    // const selectedSource = dataSources[index];
    // if (selectedSource === imgUrl) {
    //   return;
    // }
    // setImgUrl(selectedSource);
  }

  return (
    <section className='h-full border-2 border-yellow-500'>
      <div className='border-2 h-1/2 flex items-center justify-center'>
        <div className='relative max-h-full w-full max-w-[800px] aspect-video rounded-2xl border-2 border-red-500'>
          <Image
            src={imgUrl}
            fill 
            alt='Picture of the project'
            className='rounded-2xl shadow-lg object-cover'
          />
        </div>
      </div>
      <div onScroll={handleScroll} className='snap-mandatory snap-y no-scrollbar overflow-y-scroll border-2 h-1/2'>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Metrics</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Bookstore</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Metrics</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Bookstore</div>
      </div>
    </section>
  )
}

export default Projects